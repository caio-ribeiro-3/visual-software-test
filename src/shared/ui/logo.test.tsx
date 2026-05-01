import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { Logo } from './logo';

describe('Logo', () => {
    it('deve renderizar a imagem do logotipo com o link para a raiz', () => {
        const { unmount } = render(
            <BrowserRouter>
                <Logo />
            </BrowserRouter>
        );

        const link = screen.getByRole('link');
        const img = screen.getByRole('img');

        expect(link.getAttribute('href')).toBe('/');
        expect(img.getAttribute('src')).toContain('logo_visual_software.png');
        expect(img.getAttribute('width')).toBe('120');
        unmount()
    });

    it('deve ter a propriedade de carregamento antecipado (eager)', () => {
        render(
            <BrowserRouter>
                <Logo />
            </BrowserRouter>
        );

        const img = screen.getByRole('img');
        expect(img.getAttribute('loading')).toBe('eager');
    });
});
