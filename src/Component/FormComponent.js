import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { Alert, Slider } from '@mui/material';
import {Grid} from '@mui/material';
import {Container} from '@mui/material';
import {Button} from '@mui/material';
import CalulationScript from '../Helper/CalulationScript';

function FormComponent()
{
    const [currentAge,setCurrentAge] = useState();
    const [retirementAge,setRetirementAge] = useState();
    const [currentSavings,setCurrentSavings] = useState();
    const [expectedROR,setExpectedROR] = useState();
    const [estimatedRE,setEstimatedRE] = useState();
    const [retirementSR,setRetirementSR] = useState();
    const [clientName,setClientName] = useState();

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
          expectedRateOfReturn: yup
          .number('Enter a valid expected rate of return')
          .integer("Expected rate of return is required")
          .test(
            'Is positive?', 
            'ERROR: Enter a valid expected rate of return', 
            (value) => value > 0
            )
          .required('Expected rate of return is required'),
          estimatedRetirementExpenses: yup
          .number('Enter a valid estimated retirement expenses')
          .test(
            'Is positive?', 
            'ERROR: Enter a valid estimated retirement expenses', 
            (value) => value >= 0
            ),
          retirementSavingsRequired: yup
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
          retirementAge: 75,
          currentSavings: 1000,
          expectedRateOfReturn: 6,
          estimatedRetirementExpenses: 0,
          retirementSavingsRequired: 0,
          clientName:'',
        },
        validationSchema:validationSchema,
        onSubmit: (values) => {
          Alert("sss")
          setCurrentAge(values.currentAge)
          setRetirementAge(values.retirementAge)
          setCurrentSavings(values.currentSavings)
          setExpectedROR(values.expectedRateOfReturn)
          setEstimatedRE(values.estimatedRetirementExpenses)
          setRetirementSR(values.retirementSavingsRequired)
          setClientName(values.clientName)
        }});    

        const handleSliderChange = (event, newValue) => {
            switch(event.target.childNodes[0].name){
              case "currentAgeSlider":
                    setCurrentAge(newValue);
                    break;
                case "retirementAgeSlider":
                    setRetirementAge(newValue);
                    break;
                case "currentSavingsSlider":
                    setCurrentSavings(newValue);
                    break;
                case "expectedRORSlider":
                  setExpectedROR(newValue);
                  break;
                case "estimatedRESlider":
                  setEstimatedRE(newValue);
                  break;
                case "retirementSRSlider":
                  setRetirementSR(newValue);
                  break;   
            }
        };
        
        const updateSlider = (event)=> {
            switch(event.target.name)
            {
              case "currentAge":
                    setCurrentAge(event.target.value);
                    break;
                case "retirementAge":
                    setRetirementAge(event.target.value);
                    break;
                    case "currentSavings":
                      setCurrentSavings(event.target.value);
                      break;
                  case "expectedROR":
                    setExpectedROR(event.target.value);
                    break;
                  case "estimatedRE":
                    setEstimatedRE(event.target.value);
                    break;
                  case "retirementSR":
                    setRetirementSR(event.target.value);
                    break;  
            }
        };

    return (
        <div>
          <Container>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="clientName"
                name="clientName"
                label="Enter Your Name"
                helperText={formik.touched.clientName && formik.errors.clientName}
              />

              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, m:5}}>
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="currentAge"
                  name="currentAge"
                  label="Current Age"
                  value={currentAge}
                  onChange={updateSlider}
                  InputLabelProps={{
                      shrink: true,
                    }} 
                  error={formik.touched.currentAge && Boolean(formik.errors.currentAge)}
                  helperText={formik.touched.currentAge && formik.errors.currentAge}

              
                />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={currentAge}
                  name="currentAgeSlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={20}
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
                  value={retirementAge}
                  onChange={updateSlider}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={retirementAge}
                  name="retirementAgeSlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={20}
                  max={100}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="currentSavings"
                  name="currentSavings"
                  label="Current Savings"
                  value={currentSavings}
                  onChange={updateSlider}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={currentSavings}
                  name="currentSavingsSlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={20}
                  max={100}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="expectedROR"
                  name="expectedROR"
                  label="Expected Rate Of Return"
                  value={expectedROR}
                  onChange={updateSlider}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={expectedROR}
                  name="expectedRORSlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={20}
                  max={100}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>
            
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="estimatedRE"
                  name="estimatedRE"
                  label="Estimated Retirement Expenses"
                  value={estimatedRE}
                  onChange={updateSlider}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                  />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={estimatedRE}
                  name="estimatedRESlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={20}
                  max={100}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>
              
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="retirementSR"
                  name="retirementSR"
                  label="Retirement Savings Required"
                  value={retirementSR}
                  onChange={updateSlider}
                  InputLabelProps={{
                      shrink: true,
                    }}             
                />
                </Grid>
                <Grid item xs={6}>
                <Slider
                  value={retirementSR}
                  name="retirementSRSlider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={20}
                  max={100}
                  onChangeCommitted={handleSliderChange}
                /> 
                </Grid>
              </Grid>  
              <Button color="primary" margin="2px" variant="contained" fullWidth type="submit">Calculate</Button>
            </form>  
          </Container>
        </div>
    )
}

export default FormComponent;