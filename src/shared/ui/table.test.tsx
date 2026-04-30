import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Table } from './table';

describe('Table', () => {
    it('deve renderizar a estrutura completa da tabela corretamente', () => {
        render(
            <Table>
                <Table.TableHead>
                    <Table.TableRow>
                        <Table.TableCell>Nome</Table.TableCell>
                    </Table.TableRow>
                </Table.TableHead>
                <Table.TableBody>
                    <Table.TableRow>
                        <Table.TableCell>testando123</Table.TableCell>
                    </Table.TableRow>
                </Table.TableBody>
            </Table>
        );

        expect(screen.getByText('Nome')).toBeDefined();
        expect(screen.getByText('testando123')).toBeDefined();
    });

    it('deve renderizar o container principal com o componente Paper', () => {
        const { container } = render(<Table><tbody><tr><td>Test</td></tr></tbody></Table>);
        expect(container.querySelector('.MuiPaper-root')).toBeDefined();
    });
});
