import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ListUsersUseCase, CreateUserUseCase } from './use-cases';

describe('User Use Cases', () => {
    const mockRepository = {
        list: vi.fn(),
        create: vi.fn(),
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('ListUsersUseCase', () => {
        it('deve chamar o repositório com a entidade correta', async () => {
            const useCase = new ListUsersUseCase(mockRepository as any);
            mockRepository.list.mockResolvedValue([{ id: '1', name: 'João' }]);

            const result = await useCase.execute();

            expect(mockRepository.list).toHaveBeenCalledWith('users');
            expect(result).toHaveLength(1);
        });
    });

    describe('CreateUserUseCase', () => {
        const useCase = new CreateUserUseCase(mockRepository as any);

        it('deve validar os campos antes de chamar o repositório', async () => {
            const payloadInvalido = { city: 'test', email: 'email@email.com', name: 'Ab' };

            await expect(useCase.execute(payloadInvalido as any))
                .rejects.toThrow('Campo nome deve ter mais de 4 caracteres');

            expect(mockRepository.create).not.toHaveBeenCalled();
        });

        it('deve persistir dados se a validação passar', async () => {
            const payloadValido = {
                name: 'Carlos Alberto',
                city: 'São Paulo',
                email: 'carlos@teste.com',
                phone: '11111111111'
            };

            await useCase.execute(payloadValido);

            expect(mockRepository.create).toHaveBeenCalledWith('users', payloadValido);
        });
    });
});
