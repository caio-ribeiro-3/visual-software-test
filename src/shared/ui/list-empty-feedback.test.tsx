import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ListEmptyFeedback } from './list-empty-feedback';

describe('ListEmptyFeedback', () => {
    it('deve renderizar o título e a descrição fornecidos', () => {
        const props = {
            title: 'Nenhum usuário',
            description: 'Tente cadastrar um novo usuário para começar.'
        };

        render(<ListEmptyFeedback {...props} />);

        expect(screen.getByText(props.title)).toBeDefined();
        expect(screen.getByText(props.description)).toBeDefined();
    });

    it('deve renderizar o ícone de feedback', () => {
        render(<ListEmptyFeedback title="T" description="D" />);

        // Verifica a presença do ícone (via atributo data-testid padrão do MUI Icons)
        const icon = screen.getByTestId('GroupAddIcon');
        expect(icon).toBeDefined();
    });
});
