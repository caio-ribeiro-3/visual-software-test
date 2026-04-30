import { DashboardLayout } from '@/shared/ui/dashboard-layout';
import { useNavigate } from '@/shared/infra/router/use-navigate';
import { PageHeader } from '@/shared/ui/page-header';
import { Button } from '@/shared/ui/button';
import { TextInput } from '@/shared/ui/text-input';
import { useMediaQuery } from '@/shared/ui/use-media-query';
import { Grid } from '@/shared/ui/grid';
import { Paper } from '@/shared/ui/paper';
import { MEDIA_QUERY_BREAKPOINTS } from '@/shared/ui/constants';

import { useCreateUser } from './hooks';



export const CreateUserScreen = () => {
    const navigate = useNavigate()

    const { execute, isCreating, errors, values, setValues } = useCreateUser({
        onSuccess() {
            navigate('/users')
        },
    });

    const isMobile = useMediaQuery(windowWidth => windowWidth < MEDIA_QUERY_BREAKPOINTS.MOBILE)

    const columns = isMobile ? 12 : 6

    return (
        <DashboardLayout>
            <PageHeader title='Criar Novo Usuário' />
            <Paper>
                <Grid>
                    <Grid.GridItem columns={columns}>
                        <TextInput
                            label="Nome"
                            name="nome"
                            value={values.name}
                            onChange={e => setValues({ name: e.target.value })}
                            error={errors.name?.message}
                        />
                    </Grid.GridItem>
                    <Grid.GridItem columns={columns}>
                        <TextInput
                            label="E-mail"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={e => setValues({ email: e.target.value })}
                            error={errors.email?.message}
                        />
                    </Grid.GridItem>
                    <Grid.GridItem columns={columns}>
                        <TextInput
                            label="Telefone"
                            name="telefone"
                            value={values.phone}
                            onChange={e => setValues({ phone: e.target.value })}
                            error={errors.phone?.message}
                        />
                    </Grid.GridItem>
                    <Grid.GridItem columns={columns}>
                        <TextInput
                            label="Cidade"
                            name="cidade"
                            value={values.city}
                            onChange={e => setValues({ city: e.target.value })}
                            error={errors.city?.message}
                        />
                    </Grid.GridItem>

                    <Grid.GridItem style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            type="submit"
                            disabled={isCreating}
                            onClick={execute}
                        >
                            {isCreating ? 'Salvando...' : 'Salvar Usuário'}
                        </Button>
                    </Grid.GridItem>
                </Grid>
            </Paper>
        </DashboardLayout>
    );
}
