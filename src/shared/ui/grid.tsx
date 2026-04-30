import type { PropsWithChildren } from 'react';

import MUIGrid from '@mui/material/Grid';

/**
 * Utilitário de layout baseado em sistema de Grid.
 * 
 * Facilita o alinhamento e a distribuição de elementos na interface,
 * fornecendo um container flexível com espaçamento padronizado.
 */
function Grid(props: PropsWithChildren) {
    return (
        <MUIGrid container spacing={3} {...props} />
    )
}

/**
 * Elemento individual da grade.
 * 
 * Permite definir a largura proporcional do item (baseada em 12 colunas)
 * e aceita estilizações customizadas para ajustes finos de layout.
 */
function GridItem({ columns = 12, ...rest }: PropsWithChildren<{ columns?: number; style?: React.CSSProperties }>) {
    return (
        <MUIGrid size={columns} {...rest} />
    )
}

Grid.GridItem = GridItem

export { Grid }