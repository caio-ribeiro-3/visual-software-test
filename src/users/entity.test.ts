import { describe, it, expect } from 'vitest';
import { userValidators } from './entity';

describe('userValidators', () => {
    describe('name', () => {
        it('deve lançar erro se não for string', () => {
            expect(() => userValidators.name(123)).toThrow('Campo nome deve ser do tipo texto');
        });

        it('deve lançar erro se tiver menos de 4 caracteres', () => {
            expect(() => userValidators.name('Abc')).toThrow('Campo nome deve ter mais de 4 caracteres');
        });

        it('deve passar com nome válido', () => {
            expect(() => userValidators.name('João Silva')).not.toThrow();
        });
    });

    describe('email', () => {
        it('deve validar formato de e-mail usando o motor do browser', () => {
            expect(() => userValidators.email('email-invalido')).toThrow('Campo email é inválido');
            expect(() => userValidators.email('teste@teste.com')).not.toThrow();
        });
    });

    describe('phone', () => {
        it('deve aceitar apenas números e exatamente 11 dígitos', () => {
            expect(() => userValidators.phone('1199999999a')).toThrow('Campo telefone contém caracteres inválidos');
            expect(() => userValidators.phone('1199999999')).toThrow('Campo telefone deve conter 11 digitos');
            expect(() => userValidators.phone('11988887777')).not.toThrow();
        });
    });
});
