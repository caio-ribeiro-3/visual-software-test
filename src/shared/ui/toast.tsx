import React, { createContext, useContext, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

type ToastType = 'success' | 'error';

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

interface ToastContainerProps {
    toasts: Toast[];
}

const ToastContainer = ({ toasts }: ToastContainerProps) => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                zIndex: 2000,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}
        >
            {toasts.map((toast) => (
                <Slide key={toast.id} direction="left" in mountOnEnter unmountOnExit>
                    <Alert
                        severity={toast.type}
                        variant="filled"
                        sx={{
                            minWidth: 280,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            borderRadius: 2
                        }}
                    >
                        {toast.message}
                    </Alert>
                </Slide>
            ))}
        </Box>
    );
};

interface ToastContextData {
    (message: string, type: ToastType): void;
}

const ToastContext = createContext<ToastContextData | null>(null);


/**
 * Provedor e gerenciador de notificações temporárias (Toasts).
 * 
 * Centraliza a lógica de exibição de alertas flutuantes no sistema, 
 * controlando o tempo de vida de cada mensagem e sua renderização 
 * em uma camada superior da interface.
 */
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((message: string, type: ToastType) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    );
};
/**
 * Hook para disparar notificações visuais.
 * 
 * Fornece uma função que aceita uma mensagem e um tipo (sucesso ou erro),
 * enfileirando o alerta para exibição automática no canto da tela.
 */
export const useToast = () => useContext(ToastContext)!;
