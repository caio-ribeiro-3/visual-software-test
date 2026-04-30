import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { Link } from '@/shared/infra/router/link';

import { DashboardLayout } from './dashboard-layout';
import { Button } from './button';

export const NotFoundScreen = () => {
    return (
        <DashboardLayout>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { md: 'center' },
                    minHeight: '100vh',
                    bgcolor: 'background.default',
                    p: 2
                }}
            >
                <Paper
                    sx={{
                        p: { xs: 4, md: 6 },
                        maxWidth: 500,
                        textAlign: 'center',
                        borderRadius: 2
                    }}
                >

                    <Typography
                        variant="h3"
                        component="h1"
                        color="primary.main"
                        gutterBottom
                    >
                        404
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Página não encontrada
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                        O link que você tentou acessar pode estar quebrado ou a página foi removida.
                    </Typography>

                    <Link to='/'>
                        <Button>
                            Voltar para o início
                        </Button>
                    </Link>
                </Paper>
            </Box>
        </DashboardLayout>
    );
}
