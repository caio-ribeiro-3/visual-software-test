import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor, act } from '@testing-library/react';
import { useQuery, useMutation } from './hooks';

const mockToast = vi.fn();
vi.mock('@/shared/ui/toast', () => ({
    useToast: () => mockToast
}));

describe('Query', () => {
    beforeEach(() => { vi.clearAllMocks(); });

    it('deve carregar dados com sucesso', async () => {
        const handler = vi.fn().mockResolvedValue('dados da api');
        const { result } = renderHook(() => useQuery({ handler }));

        expect(result.current.isLoading).toBe(true);

        await waitFor(() => {
            expect(result.current.data).toBe('dados da api');
            expect(result.current.isLoading).toBe(false);
        });
    });

    it('deve disparar toast em caso de erro', async () => {
        const handler = vi.fn().mockRejectedValue(new Error('Falha na rede'));
        renderHook(() => useQuery({ handler }));

        await waitFor(() => {
            expect(mockToast).toHaveBeenCalledWith('Error: Falha na rede', 'error');
        });
    });


    it('deve executar sucesso e chamar callbacks', async () => {
        const handler = vi.fn().mockResolvedValue({ ok: true });
        const onSuccess = vi.fn();

        const { result } = renderHook(() => useMutation({ handler, onSuccess }));

        await act(async () => {
            await result.current.mutate({ id: 1 });
        });

        expect(handler).toHaveBeenCalledWith({ id: 1 });
        expect(onSuccess).toHaveBeenCalled();
    });

    it('deve gerenciar erro e chamar onFailure', async () => {
        const handler = vi.fn().mockRejectedValue(new Error('Erro no servidor'));
        const onFailure = vi.fn();

        const { result } = renderHook(() => useMutation({ handler, onFailure }));

        await act(async () => {
            await result.current.mutate({});
        });

        expect(onFailure).toHaveBeenCalled();
        expect(result.current.error?.message).toBe('Erro no servidor');
    });
});

