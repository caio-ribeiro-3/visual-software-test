import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor, act } from '@testing-library/react';
import { useListUsers, useCreateUser } from './hooks';

const mockList = vi.fn();
vi.mock('@/shared/infra/repository/context', () => ({
    useRepository: () => ({ list: mockList })
}));

describe('useListUsers', () => {
    it('deve buscar a lista de usuários ao montar', async () => {
        const mockData = [{ id: '1', name: 'User Test' }];
        mockList.mockResolvedValue(mockData);

        const { result } = renderHook(() => useListUsers());

        expect(result.current.isLoading).toBe(true);

        await waitFor(() => {
            expect(result.current.data).toEqual(mockData);
            expect(result.current.isLoading).toBe(false);
        });

        expect(mockList).toHaveBeenCalledWith('users');
    });
});

const mockCreate = vi.fn();
vi.mock('@/shared/infra/repository/context', () => ({
    useRepository: () => ({ create: mockCreate })
}));

describe('useCreateUser', () => {
    it('deve validar e criar usuário com sucesso', async () => {
        const onSuccess = vi.fn();
        const { result } = renderHook(() => useCreateUser({ onSuccess }));

        await act(async () => {
            result.current.setValues({
                name: 'Nome Válido',
                email: 'teste@email.com',
                city: 'Cidade Teste',
                phone: '11999999999'
            });
        });

        await act(async () => {
            await result.current.execute();
        });

        expect(mockCreate).toHaveBeenCalledWith('users', expect.objectContaining({
            name: 'Nome Válido'
        }));
        expect(onSuccess).toHaveBeenCalled();
    });

    it('deve conter erros e não chamar o repositório se os dados forem inválidos', async () => {
        const { result } = renderHook(() => useCreateUser({}));

        await act(async () => {
            result.current.setValues({ name: 'Ab' });
        });

        await act(async () => {
            result.current.execute();
        });

        expect(result.current.errors.name?.message).toBe('Campo nome deve ter mais de 4 caracteres');
        expect(mockCreate).not.toHaveBeenCalled();
    });
});
