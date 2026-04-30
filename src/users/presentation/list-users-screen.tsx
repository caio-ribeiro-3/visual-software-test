import { DashboardLayout } from '@/shared/ui/dashboard-layout';
import { Link } from '@/shared/infra/router/link';
import { PageHeader } from '@/shared/ui/page-header';
import { Button } from '@/shared/ui/button';
import { Table } from '@/shared/ui/table';
import { Skeleton } from '@/shared/ui/skeleton';
import { ListErrorFeedback } from '@/shared/ui/list-error-feedback';
import { ListEmptyFeedback } from '@/shared/ui/list-empty-feedback';

import { useListUsers } from './hooks';


export const ListUsersScreen = () => {
    const { data: users, isLoading, error } = useListUsers()

    return (
        <DashboardLayout>
            <PageHeader title='Usuários'>
                <Link to='create'>
                    <Button>
                        Novo Usuário
                    </Button>
                </Link>
            </PageHeader>
            <Table>
                <Table.TableHead>
                    <Table.TableRow>
                        <Table.TableCell>Nome</Table.TableCell>
                        <Table.TableCell>E-mail</Table.TableCell>
                        <Table.TableCell>Telefone</Table.TableCell>
                        <Table.TableCell>Cidade</Table.TableCell>
                    </Table.TableRow>
                </Table.TableHead>
                <Table.TableBody>
                    {isLoading ? [1, 2, 3, 4].map((index) => (
                        <Table.TableRow key={index}>
                            {[1, 2, 3, 4].map((innerIndex) => (
                                <Table.TableCell key={innerIndex}>
                                    <Skeleton />
                                </Table.TableCell>
                            ))}
                        </Table.TableRow>
                    )) : error ? (
                        <Table.TableRow>
                            <td colSpan={4} style={{ padding: 8 }}>
                                <ListErrorFeedback
                                    message='Erro na listagem, tente novamente mais tarde.'
                                />
                            </td>
                        </Table.TableRow>
                    ) : users ? users.map((user) => (
                        <Table.TableRow key={user.id} >
                            <Table.TableCell>{user.name}</Table.TableCell>
                            <Table.TableCell>{user.email}</Table.TableCell>
                            <Table.TableCell >{user.phone}</Table.TableCell>
                            <Table.TableCell >{user.city}</Table.TableCell>
                        </Table.TableRow>
                    )) : (
                        <Table.TableRow>
                            <td colSpan={4} style={{ padding: 8 }}>
                                <ListEmptyFeedback
                                    title="Nenhum usuário encontrado"
                                    description="Sua lista está vazia. Adicione novos usuários para começar a gerenciar sua equipe."
                                />
                            </td>
                        </Table.TableRow>
                    )}
                </Table.TableBody>
            </Table>
        </DashboardLayout>
    );
}