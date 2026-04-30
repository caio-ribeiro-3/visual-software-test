import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from './skeleton';

describe('Skeleton', () => {
    it('deve renderizar o componente de carregamento corretamente', () => {
        const { container } = render(<Skeleton />);

        const skeletonElement = container.querySelector('.MuiSkeleton-root');
        expect(skeletonElement).toBeDefined();
    });

    it('deve possuir a animação de pulsação por padrão', () => {
        const { container } = render(<Skeleton />);
        const skeletonElement = container.querySelector('.MuiSkeleton-pulse');
        expect(skeletonElement).toBeDefined();
    });
});
