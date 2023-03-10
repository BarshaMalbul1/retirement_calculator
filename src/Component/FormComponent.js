import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { Alert, Slider } from '@mui/material';
import {Grid} from '@mui/material';
import {Container} from '@mui/material';
import {Button} from '@mui/material';
import CalulationScript from '../Helper/CalulationScript';

function FormComponent({setFormData})
{
    const [currentAgeState,setCurrentAge] = useState(25);
    const [retirementAgeState,setRetirementAge] = useState(75);
    const [currentSavingsState,setCurrentSavings] = useState(1000);
    const [expectedRORState,setExpectedROR] = useState(6);
    const [estimatedREState,setEstimatedRE] = useState(50);
    const [retirementSRState,setRetirementSR] = useState(50);
    const [annualHouseholdIncomeState,setAnnualHouseholdIncome] =useState(1000);
    const [clientNameState,setClientName] = useState();
    const [expectedIIState,setExpectedII] =useState();

    const validationSchema = yup.object({
        currentAge: yup
        .number("Invalid  current age")
        .required('Current age is required')
        .integer("Current age is required")
        .test(
          'Is positive?', 
          'ERROR: Enter a valid current age', 
          (value) => value > 0
          ),
        retirementAge: yup
          .number("Invalid  retirement age")
          .required('Retirement age is required')
          .integer("Retirement age is required")
          .test(
            'Is positive?', 
            'ERROR: Enter a valid retirement age', 
            (value) => value > 0
            ),
          currentSavings: yup
          .number("Enter a current savings")
          .integer("Current savings is required")
          .required('Current savings is required')
          .test(
            'Is positive?', 
            'ERROR: Enter a valid current savings', 
            (value) => value > 0
            ),
            expectedROR: yup
          .number('Enter a valid expected rate of return')
          .integer("Expected rate of return is required")
          .test(
            'Is positive?', 
            'ERROR: Enter a valid expected rate of return', 
            (value) => value > 0
            )
          .required('Expected rate of return is required'),
          estimatedRE: yup
          .number('Enter a valid estimated retirement expenses')
          .test(
            'Is positive?', 
            'ERROR: Enter a valid estimated retirement expenses', 
            (value) => value >= 0
            ),
            retirementSR: yup
          .number('Enter a valid retirement savings required')
          .test(
            'Is positive?',
            'ERROR: Enter a valid retirement savings required', 
            (value) => value >= 0
            ),
      });

      const formik = useFormik({
        initialValues: {
          currentAge:25,
          retirementAge: 65,
          currentSavings: 22000,
          expectedROR: 7,
          estimatedRE: 151532,
          retirementSR: 35,
          annualHouseholdIncome: 100000,
          clientName:'',
          expectedII:2,
        },
        validationSchema:validationSchema,
        onSubmit: (values) => {
          console.log(values)
          setFormData({form_input_values:values,computed:CalulationScript(values)});
          setCurrentAge(values.currentAge)
          setRetirementAge(values.retirementAge)
          setCurrentSavings(values.currentSavings)
          setExpectedROR(values.expectedRateOfReturn)
          setEstimatedRE(values.estimatedRetirementExpenses)
          setRetirementSR(values.retirementSavingsRequired)
          setAnnualHouseholdIncome(values.annualHouseholdIncome)
          setClientName(values.clientName) 
          setExpectedII(values.expectedII)
        }});    

        const handleSliderChange = (event, newValue) => {
            switch(event.target.childNodes[0].name){
              case "currentAgeSlider":
                    setCurrentAge(parseInt(newValue));
                    formik.values.currentAge= newValue;
                    break;
                case "retirementAgeSlider":
                    setRetirementAge(parseInt(newValue));
                    formik.values.retirementAge= newValue;
                    break;
                case "currentSavingsSlider":
                    setCurrentSavings(parseInt(newValue));
                    formik.values.currentSavings= newValue;
                    break;
                case "expectedRORSlider":
                  setExpectedROR(parseFloat(newValue));
                  formik.values.expectedROR= newValue;
                  break;
                case "estimatedRESlider":
                  setEstimatedRE(parseFloat(newValue));
                  formik.values.estimatedRE= newValue;
                  break;
                case "retirementSRSlider":
                  setRetirementSR(parseFloat(newValue));
                  formik.values.retirementSR= newValue;
                  break;   
                case "annualHouseholdIncomeSlider":
                  setAnnualHouseholdIncome(parseInt(newValue));
                  formik.values.annualHouseholdIncome =newValue;  
                  break;
                case "expectedIISlider":
                  setExpectedII(parseFloat(newValue));
                  formik.values.expectedII =newValue;  
                  break;
            }
        };
        
        const updateSlider = (event)=> {
            // switch(event.target.name)
            // {
            //   case "currentAge":
            //         setCurrentAge(event.target.value);
            //         break;
            //     case "retirementAge":
            //         setRetirementAge(event.target.value);
            //         break;
            //         case "currentSavings":
            //           setCurrentSavings(event.target.value);
            //           break;
            //       case "expectedROR":
            //         setExpectedROR(event.target.value);
            //         break;
            //       case "estimatedRE":
            //         setEstimatedRE(event.target.value);
            //         break;
            //       case "retirementSR":
            //         setRetirementSR(event.target.value);
            //         break;  
            // }
        };

    return (
        <div>
          <Container>
            <h1>Please fill the form</h1>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="clientName"
                name="clientName"
                label="Enter Your Name"
                value={formik.values.clientName}
                onChange={formik.handleChange}
                helperText={formik.touched.clientName && formik.errors.clientName}
              />

              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, m:5}}>
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="currentAge"
                  name="currentAge"
                  label="Current Age"
                  value={formik.values.currentAge}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                      shrink: true,
                    }} 
                  error={formik.touched.currentAge && Boolean(formik.errors.currentAge)}
                  helperText={formik.touched.currentAge && formik.errors.currentAge}
                />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={currentAgeState}
                  name="currentAgeSlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={15}
                  max={100}
                  onChangeCommitted={handleSliderChange}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="retirementAge"
                  name="retirementAge"
                  label="Retirement Age"
                  value={formik.values.retirementAge}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={retirementAgeState}
                  name="retirementAgeSlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={21}
                  max={100}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>

                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="annualHouseholdIncome"
                  name="annualHouseholdIncome"
                  label="Annual Household Income ($)"
                  value={formik.values.annualHouseholdIncome}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={annualHouseholdIncomeState}
                  name="annualHouseholdIncomeSlider"
                  valueLabelDisplay="auto"
                  step={500}
                  marks
                  min={100}
                  max={100000}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>

                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="expectedII"
                  name="expectedII"
                  label="Expected Income Increase (%)"
                  value={formik.values.expectedII}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={expectedIIState}
                  name="expectedIISlider"
                  valueLabelDisplay="auto"
                  step={500}
                  marks
                  min={100}
                  max={100000}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>

                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="currentSavings"
                  name="currentSavings"
                  label="Current Savings ($)"
                  value={formik.values.currentSavings}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={currentSavingsState}
                  name="currentSavingsSlider"
                  valueLabelDisplay="auto"
                  step={500}
                  marks
                  min={0}
                  max={100000}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="expectedROR"
                  name="expectedROR"
                  label="Expected Rate Of Return"
                  value={formik.values.expectedROR}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={expectedRORState}
                  name="expectedRORSlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={100}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>
            
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="estimatedRE"
                  name="estimatedRE"
                  label="Estimated Retirement Expenses ()"
                  value={formik.values.estimatedRE}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={estimatedREState}
                  name="estimatedRESlider"
                  valueLabelDisplay="auto"
                  step={500}
                  marks
                  min={500}
                  max={100000}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>
              
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="retirementSR"
                  name="retirementSR"
                  label="Retirement Savings Required (%)"
                  value={formik.values.retirementSR}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={retirementSRState}
                  name="retirementSRSlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={100}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>
              </Grid>  
              <br></br>
              <Button margin="2px" variant="contained" fullWidth color="secondary" type="submit">Calculate</Button>
            </form>  
          </Container>
        </div>
    )
}

export default FormComponent;