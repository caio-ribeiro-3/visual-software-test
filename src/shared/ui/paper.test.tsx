import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Paper } from './paper';

describe('Paper', () => {
    it('deve renderizar o conteúdo interno corretamente', () => {
        render(
            <Paper>
                <div data-testid="child">Conteúdo Interno</div>
            </Paper>
        );
        expect(screen.getByTestId('child')).toBeDefined();
    });
});
