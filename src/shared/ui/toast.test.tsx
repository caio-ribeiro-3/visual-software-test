import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { ToastProvider, useToast } from './toast';

const TestComponent = ({ message }: { message: string }) => {
    const toast = useToast();
    return <button data-testid="TestComponent" onClick={() => toast(message, 'success')}>Show</button>;
};

describe('Toast System', () => {
    it('deve exibir a mensagem de toast ao ser disparada', () => {
        const { unmount } = render(
            <ToastProvider>
                <TestComponent message="Operação concluída" />
            </ToastProvider>
        );

        const button = screen.getByTestId('TestComponent');
        act(() => {
            button.click();
        });

        expect(screen.getByText('Operação concluída')).toBeDefined();
        unmount()
    });

    it('deve remover o toast automaticamente após o timeout', () => {
        vi.useFakeTimers();
        render(
            <ToastProvider>
                <TestComponent message="Temporário" />
            </ToastProvider>
        );

        act(() => {
            screen.getByTestId('TestComponent').click();
        });

        expect(screen.getByText('Temporário')).toBeDefined();

        act(() => {
            vi.advanceTimersByTime(3000);
        });

        expect(screen.queryByText('Temporário')).toBeNull();
        vi.useRealTimers();
    });
});
