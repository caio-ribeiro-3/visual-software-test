import type { PropsWithChildren } from 'react';

import MUIPaper from '@mui/material/Paper';

export function Paper(props: PropsWithChildren) {
    return (
        <MUIPaper sx={{ maxWidth: 800, p: { xs: 3, md: 4 } }} elevation={2} {...props} />
    )
}