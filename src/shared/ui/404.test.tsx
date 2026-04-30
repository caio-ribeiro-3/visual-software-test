import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { NotFoundScreen } from './404';

describe('NotFoundScreen', () => {
    const renderComponent = () =>
        render(
            <BrowserRouter>
                <NotFoundScreen />
            </BrowserRouter>
        );

    it('deve exibir o código de erro 404 e a mensagem de página não encontrada', () => {
        renderComponent();

        expect(screen.getByText('404')).toBeDefined();
        expect(screen.getByText(/Página não encontrada/i)).toBeDefined();
    });

    it('deve conter um link que redireciona para a página inicial', () => {
        renderComponent();

        const link = screen.getByRole('link', { name: /Voltar para o início/i });

        // Verifica se o atributo 'href' aponta para a raiz
        expect(link.getAttribute('href')).toBe('/');
    });

    it('deve renderizar a mensagem de auxílio ao usuário', () => {
        renderComponent();

        const helpText = screen.getByText(/O link que você tentou acessar pode estar quebrado/i);
        expect(helpText).toBeDefined();
    });
});
