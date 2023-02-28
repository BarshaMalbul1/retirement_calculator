import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { Slider } from '@mui/material';

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
                case "retirementAgeSlider":
                    setRetirementAge(newValue);
                    break;
            }
        };
        
        const updateSlider = (event)=> {
            switch(event.target.name)
            {
                case "retirementAge":
                    setRetirementAge(event.target.value);
                    break;
            }
        };

    return (
        <div>
            <h1>{retirementAge}</h1>
            <form>
                <TextField
                    fullWidth
                    id="clientName"
                    name="clientName"
                    label="Enter Your Name"
                    helperText={formik.touched.clientName && formik.errors.clientName}
                    />

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
            </form>

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
        </div>
    )
}

export default FormComponent;