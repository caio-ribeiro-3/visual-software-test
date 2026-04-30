import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
    it('deve renderizar o conteúdo corretamente', () => {
        render(<Button>Clique aqui</Button>);
        expect(screen.getByText('Clique aqui')).toBeDefined();
    });

    it('deve disparar o evento onClick quando clicado', () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Enviar</Button>);

        fireEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('deve respeitar o estado desabilitado', () => {
        render(<Button disabled>Não clique</Button>);
        const button = screen.getByRole('button');

        expect(button.hasAttribute('disabled')).toBe(true);
    });
});
