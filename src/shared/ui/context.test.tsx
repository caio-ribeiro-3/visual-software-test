import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UIProvider } from './context';

describe('UIProvider', () => {
    it('deve renderizar os componentes filhos corretamente', () => {
        render(
            <UIProvider>
                <div data-testid="child">Conteúdo Protegido</div>
            </UIProvider>
        );

        expect(screen.getByTestId('child')).toBeDefined();
        expect(screen.getByText('Conteúdo Protegido')).toBeDefined();
    });

    it('deve aplicar as configurações globais sem quebrar a árvore', () => {
        const { container } = render(
            <UIProvider>
                <button>Test</button>
            </UIProvider>
        );

        expect(container).toBeDefined();
    });
});
