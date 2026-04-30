import type { PropsWithChildren } from "react";

import MUIButton from "@mui/material/Button";



interface ButtonProps {
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?(): void;
}
/**
 * Componente de botão padronizado da aplicação.
 * 
 * Centraliza o estilo visual e o comportamento de interações clicáveis, 
 * garantindo consistência em tamanhos, cores e estados de interação
 * em toda a interface.
 */
export function Button({ children, ...rest }: PropsWithChildren<ButtonProps>) {
    return (
        <MUIButton
            variant="contained"
            size="large"
            type="button"
            color='primary'
            {...rest}
        >
            {children}
        </MUIButton>
    )
}