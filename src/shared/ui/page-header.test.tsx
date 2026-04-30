import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PageHeader } from './page-header';

describe('PageHeader', () => {
    it('deve renderizar o título corretamente', () => {
        render(<PageHeader title="Título da Página" />);
        expect(screen.getByText('Título da Página')).toBeDefined();
    });

    it('deve renderizar elementos filhos (ações) ao lado do título', () => {
        render(
            <PageHeader title="Usuários">
                <button>Adicionar</button>
            </PageHeader>
        );

        expect(screen.getByText('Usuários')).toBeDefined();
        expect(screen.getByRole('button', { name: /adicionar/i })).toBeDefined();
    });

    it('deve manter a estrutura de layout correta para o título', () => {
        render(<PageHeader title="Teste" />);
        const title = screen.getByText('Teste');

        expect(title.tagName).toBe('H5');
    });
});
