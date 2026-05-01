import type { PropsWithChildren } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";



/**
 * Cabeçalho de página padronizado com suporte a ações.
 * 
 * Exibe o título da seção e organiza elementos adicionais (como botões ou filtros) 
 * de forma responsiva, alternando entre colunas em dispositivos móveis e 
 * linha em telas maiores.
 */
export function PageHeader({ title, children }: PropsWithChildren<{ title: string }>) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                mb: 3,
                gap: 2
            }}
        >
            <Typography variant="h5">
                {title}
            </Typography>
            {children}
        </Box>
    )
}