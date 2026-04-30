import type { PropsWithChildren } from 'react';

import MUIGrid from '@mui/material/Grid';

function Grid(props: PropsWithChildren) {
    return (
        <MUIGrid container spacing={3} {...props} />
    )
}

function GridItem({ columns = 12, ...rest }: PropsWithChildren<{ columns?: number; style?: React.CSSProperties }>) {
    return (
        <MUIGrid size={columns} {...rest} />
    )
}

Grid.GridItem = GridItem

export { Grid }