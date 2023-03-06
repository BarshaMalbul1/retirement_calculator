import React from "react";
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function SummaryReport({data}){
    let input = data.form_input_values;
    const [checked, setChecked] = React.useState(false);
    var data = {
      "Client Name":  input? input.clientName :"Johny",
      "Current Age:": input?input.currentAge:"",           
      "RetirementAge:":input?input.retirementAge : "",
      "Current Savings: $" :input?input.currentSavings : "",
      "Annual Household Income: $": input?input.annualHouseholdIncome : "",
      "Expected Income Increased:":input?input.expectedII : "",
      "Estimated Monthly Retirement Expenses: ":input?input.estimatedRE : "",
      "Expected Rate of Return:" : input?input.expectedROR : "" ,
      "Retirement Savings Rate: " :input?input.retirementSR : ""           
    };

    const switchHandler = (event) => {
      setChecked(event.target.checked);
    };
  
    var table = "";
    if(checked)
    {
      table = 
      <TableContainer>
      <Table>
      {Object.keys(data).map((key) => (
          <TableBody>
              <TableCell>{key}</TableCell>
              <TableCell>{data[key]}</TableCell>
          </TableBody>
      ))}

      </Table>
    </TableContainer>
    ;
    }

    return (
      <div>
        <FormGroup>
          <FormControlLabel
          style={{ paddingLeft: '20px' }}
            value="start"
            control={<Switch checked={checked} onChange={switchHandler}/>}
            label="Show summary"
            />
          {table}

        </FormGroup>
      </div>
    );
}
export default SummaryReport;