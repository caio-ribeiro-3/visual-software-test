import type { PropsWithChildren } from 'react';

import Paper from '@mui/material/Paper'
import MUITable from '@mui/material/Table'
import MUITableBody from '@mui/material/TableBody'
import MUITableCell from '@mui/material/TableCell'
import MUITableContainer from '@mui/material/TableContainer'
import MUITableHead from '@mui/material/TableHead'
import MUITableRow from '@mui/material/TableRow'

function Table({ children }: PropsWithChildren) {
    return (
        <MUITableContainer component={Paper}>
            <MUITable>
                {children}
            </MUITable>
        </MUITableContainer>
    )
}

function TableHead({ children }: PropsWithChildren) {
    return (
        <MUITableHead>
            {children}
        </MUITableHead>
    )
}

function TableRow({ children }: PropsWithChildren) {
    return (
        <MUITableRow hover>
            {children}
        </MUITableRow>
    )
}

function TableBody({ children }: PropsWithChildren) {
    return (
        <MUITableBody>
            {children}
        </MUITableBody>
    )
}

function TableCell({ children }: PropsWithChildren) {
    return (
        <MUITableCell>
            {children}
        </MUITableCell>
    )
}

Table.TableHead = TableHead
Table.TableBody = TableBody
Table.TableCell = TableCell
Table.TableRow = TableRow


export { Table }