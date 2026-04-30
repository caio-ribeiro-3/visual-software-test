import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { RouterProvider } from '../infra/router/context';

import { DashboardLayout } from './dashboard-layout';

describe('DashboardLayout', () => {
    const renderLayout = () =>
        render(
            <RouterProvider>
                <DashboardLayout>
                    <div data-testid="content">Conteúdo da Página</div>
                </DashboardLayout>
            </RouterProvider>
        );

    it('deve renderizar o conteúdo principal e o logotipo', () => {
        renderLayout();
        expect(screen.getByTestId('content')).toBeDefined();
        expect(screen.getByRole('list')).toBeDefined();
    });

    it('deve renderizar os itens de menu configurados', () => {
        renderLayout();
        expect(screen.getAllByText(/Usuários/i).length).toBeGreaterThan(0);
    });

    it('deve alternar o estado do menu móvel ao clicar no botão de menu', () => {
        renderLayout();

        const menuButton = screen.getByRole('button', { name: /menu/i });

        fireEvent.click(menuButton);

        const drawer = screen.queryByRole('presentation');
        expect(drawer).toBeDefined();
    });
});
