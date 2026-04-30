import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { ToastProvider, useToast } from './toast';

const TestComponent = ({ message }: { message: string }) => {
    const toast = useToast();
    return <button onClick={() => toast(message, 'success')}>Show</button>;
};

describe('Toast System', () => {
    it('deve exibir a mensagem de toast ao ser disparada', () => {
        render(
            <ToastProvider>
                <TestComponent message="Operação concluída" />
            </ToastProvider>
        );

        const button = screen.getByRole('button');
        act(() => {
            button.click();
        });

        expect(screen.getByText('Operação concluída')).toBeDefined();
    });

    it('deve remover o toast automaticamente após o timeout', () => {
        vi.useFakeTimers();
        render(
            <ToastProvider>
                <TestComponent message="Temporário" />
            </ToastProvider>
        );

        act(() => {
            screen.getByRole('button').click();
        });

        expect(screen.getByText('Temporário')).toBeDefined();

        act(() => {
            vi.advanceTimersByTime(3000);
        });

        expect(screen.queryByText('Temporário')).toBeNull();
        vi.useRealTimers();
    });
});
