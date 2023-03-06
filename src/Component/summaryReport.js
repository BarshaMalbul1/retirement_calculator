import { Container } from "@amcharts/amcharts5";
import { FormControlLabel,Switch,Slide } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


function SummaryReport({data}){
    console.log("summary",data.form_input_values);
    let input = data.form_input_values;
    const [checked, setChecked] = React.useState(false);
    const containerRef = React.useRef(null);
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
      }));
      const darkTheme = createTheme({ palette: { mode: 'dark' } });


    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    return (
        <Box sx={{ width: `calc(1000px + 160px)` }}>
        <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Retirement Plan Input Summary" 
        />
        <Slide direction="up" in={checked} container={containerRef.current} defaultChecked color="default">
        <Grid container rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
        {[darkTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box sx={{p: 2, bgcolor: 'background.primary', display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 0.5,}}>
              {[
                "Client Name",  input? input.clientName :"Johny",
                "Current Age:", input?input.currentAge:"",           
                "RetirementAge:",input?input.retirementAge : "",
                "Current Savings: $" ,input?input.currentSavings : "",
                "Annual Household Income: $", input?input.annualHouseholdIncome : "",
                "Expected Income Increased:",input?input.expectedII : "",
                "Estimated Monthly Retirement Expenses: ",input?input.estimatedRE : "",
                "Expected Rate of Return:" , input?input.expectedROR : "" ,
                "Retirement Savings Rate: " ,input?input.retirementSR : ""           

].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {elevation}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}  
        </Grid>
        </Slide>
       </Box>

        // /* <p>You need to save an additional ${additionalSavingsNeeded.toFixed(2)} to meet your retirement goal of ${totalSavingsNeeded.toFixed(2)}.</p>  */}
    );
}
export default SummaryReport;