import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor, act } from '@testing-library/react';
import { useCreateUser, useListUsers } from './hooks';
import type { PropsWithChildren } from 'react';
import { Composer } from '@/composer';



function createWrapper(repository: any) {
    return function ({ children }: PropsWithChildren) {
        return (
            <Composer repository={repository}>
                {children}
            </Composer>
        )
    }
}

describe('useListUsers', () => {
    it('deve buscar a lista de usuários ao montar', async () => {
        const mockRepo = { list: vi.fn() };
        const mockData = [{ id: '1', name: 'User Test' }];
        mockRepo.list.mockResolvedValue(mockData);

        const { result } = renderHook(() => useListUsers(), {
            wrapper: createWrapper(mockRepo)
        });

        expect(result.current.isLoading).toBe(true);

        await waitFor(() => {
            expect(result.current.data).toEqual(mockData);
            expect(result.current.isLoading).toBe(false);
        });

        expect(mockRepo.list).toHaveBeenCalledWith('users');
    });
});

describe('useCreateUser Domain Hook', () => {
    it('deve validar e disparar a criação', async () => {
        const mockRepo = { create: vi.fn() };
        const wrapper = createWrapper(mockRepo);

        const { result } = renderHook(() => useCreateUser({}), {
            wrapper
        });

        await act(async () => {
            await result.current.setValues({
                name: 'teste',
                email: 'teste@teste.com',
                city: 'teste',
                phone: '11111111111'
            });
        });

        await act(async () => {
            await result.current.execute();
        });

        expect(mockRepo.create).toHaveBeenCalledWith('users', expect.any(Object));
    });
});