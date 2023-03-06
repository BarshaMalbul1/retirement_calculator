import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

function SummaryReport({data}){
    let input = data.form_input_values;
    const [checked, setChecked] = React.useState(false);
    const containerRef = React.useRef(null);
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

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return (
      <div>
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
      </div>
    );
}
export default SummaryReport;