import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ListErrorFeedback } from './list-error-feedback';

describe('ListErrorFeedback', () => {
    it('deve exibir a mensagem de erro fornecida', () => {
        const errorMsg = "Falha na conexão com o servidor";
        render(<ListErrorFeedback message={errorMsg} />);

        expect(screen.getByText('Ops! Algo deu errado.')).toBeDefined();
        expect(screen.getByText(errorMsg)).toBeDefined();
    });
});
