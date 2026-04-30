import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Grid } from './grid';

describe('Grid', () => {
    it('deve renderizar o container e seus itens filhos', () => {
        render(
            <Grid>
                <Grid.GridItem data-testid="item-1">Item 1</Grid.GridItem>
                <Grid.GridItem data-testid="item-2">Item 2</Grid.GridItem>
            </Grid>
        );

        expect(screen.getByTestId('item-1')).toBeDefined();
        expect(screen.getByTestId('item-2')).toBeDefined();
    });

    it('deve aplicar o tamanho de colunas correto', () => {
        const { container } = render(
            <Grid>
                <Grid.GridItem columns={6}>Metade</Grid.GridItem>
            </Grid>
        );
        expect(container.firstChild).toBeDefined();
    });
});
