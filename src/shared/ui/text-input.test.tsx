import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextInput } from './text-input';

describe('TextInput', () => {
    it('deve renderizar o label e o valor corretamente', () => {
        render(<TextInput label="Nome" name="name" value="João" />);

        expect(screen.getByLabelText(/Nome/i)).toBeDefined();
        expect(screen.getByDisplayValue('João')).toBeDefined();
    });

    it('deve exibir mensagem de erro quando fornecida', () => {
        const errorMsg = 'Campo obrigatório';
        render(<TextInput label="Email" name="email" value="" error={errorMsg} />);

        expect(screen.getByText(errorMsg)).toBeDefined();
    });

    it('deve disparar o evento onChange ao digitar', () => {
        const onChange = vi.fn();
        render(<TextInput label="Login" name="user" value="" onChange={onChange} />);

        const input = screen.getByLabelText(/Login/i);
        fireEvent.change(input, { target: { value: 'novo_usuario' } });

        expect(onChange).toHaveBeenCalled();
    });
});
