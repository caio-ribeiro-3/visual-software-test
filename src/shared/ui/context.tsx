import type { PropsWithChildren } from "react";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";
import { ToastProvider } from "./toast";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



/**
 * Provedor central de interface e estilos da aplicação.
 * 
 * Responsável por configurar o ecossistema visual, incluindo a aplicação 
 * do tema global, normalização de CSS, carregamento de fontes e 
 * inicialização do sistema de notificações (toast).
 */
export function UIProvider({ children }: PropsWithChildren) {
    return (
        <ThemeProvider theme={theme}>
            <ToastProvider>
                <CssBaseline />
                {children}
            </ToastProvider>
        </ThemeProvider>
    )
}