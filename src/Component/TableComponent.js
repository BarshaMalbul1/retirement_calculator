import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Container} from '@mui/material';

export default function TableComponent({data}) {
  return (
    <TableContainer className='tableDiv'>
    <Table sx={{ minWidth: 650, border: 1 ,borderColor: 'grey.500'  }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Age</TableCell>
          <TableCell align="center">Years till retirement</TableCell>
          <TableCell align="center">Annual income</TableCell>
          <TableCell align="center">Current balance</TableCell>
          <TableCell align="center">Investment gains</TableCell>
          <TableCell align="center">Income contribution</TableCell>
          <TableCell align="center">Yearly expences</TableCell>
          <TableCell align="center">Change in retirement Fund</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.age}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center">{row.age}</TableCell>
            <TableCell align="center">{row.years_to_retire}</TableCell>
            <TableCell align="center">
              {row.annualHouseholdIncome}
            </TableCell>
            <TableCell align="center">{row.current_retirement_fund_balance}</TableCell>
            <TableCell align="center">{row.investment_growth}</TableCell>
            <TableCell align="center">{row.income_contributed_to_fund} </TableCell>
            <TableCell align="center">{row.yearly_expense}</TableCell>
            <TableCell align="center">{row.total_retirement_fund_increase}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
