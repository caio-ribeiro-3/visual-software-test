import type { PropsWithChildren } from 'react';

import MUIPaper from '@mui/material/Paper';


/**
 * Container de superfície.
 * 
 * Fornece uma base visual com elevação e preenchimento responsivo, 
 * ideal para agrupar conteúdos relacionados, como formulários ou 
 * seções de detalhes, mantendo uma largura máxima controlada.
 */
export function Paper(props: PropsWithChildren) {
    return (
        <MUIPaper sx={{ maxWidth: 800, p: { xs: 3, md: 4 } }} elevation={2} {...props} />
    )
}