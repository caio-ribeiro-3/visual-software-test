import type { PropsWithChildren } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function PageHeader({ title, children }: PropsWithChildren<{ title: string }>) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
                justifyContent: 'space-between',
                alignItems: { md: 'center' },
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