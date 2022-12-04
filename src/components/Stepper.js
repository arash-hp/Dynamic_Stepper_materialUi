import { Step, StepLabel, Stepper as MuiStepper } from "@material-ui/core";
import { useField } from "formik";

const Stepper = ({activeStep,}) => {
    const [{value}] = useField('steps')
  return (
    <MuiStepper alternativeLabel activeStep={activeStep}>
      {value.map((step, index) => {
        return (
          <Step key={index}>
            <StepLabel >{index+1}</StepLabel>
          </Step>
        );
      })}
    </MuiStepper>
  );
};

export default Stepper;
