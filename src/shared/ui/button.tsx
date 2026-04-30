import type { PropsWithChildren } from "react";

import MUIButton from "@mui/material/Button";



interface ButtonProps {
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?(): void;
}

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