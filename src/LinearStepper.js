import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MonochromePhotosOutlined } from "@material-ui/icons";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSteps, getSteps } from "./Api/StepApi";
import checkoutFormModel from "./checkoutFormModel";
import { initialValues } from "./formInitialValues";
import NextButton from "./NextButton";
import { getStepsAction, increment } from "./redux/counterSlice";
import RemoveButton from "./RemoveButton";
import StepForm from "./StepForm";
import Stepper from "./Stepper";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

const { formId, formField } = checkoutFormModel;

export function getStepContent({dataSteps}) {}

export const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [dataSteps, setDataSteps] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(activeStep)
  const handleNext = async (nextStep) => {
    setActiveStep(nextStep);
    // await getSteps().then((res) => console.log(res));
    // setActiveStep(activeStep + 1);
  };
  // setDataSteps(res.data.ProcessPipe)
  useEffect(() => {
    dataSteps.map((item) => {
      const stepItem = item.data.split(',');
      // const result = stepItem.map((item)=>{
      //   console.log(item.split(':'));
      // }) 
      // const obj = JSON.parse(item);
      // const result = Object.entries(obj).flat();
      // console.log(stepItem);
    });

  }, [dataSteps]);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  const handleRemove = (nextStep) => {
    setActiveStep(nextStep);;
  };

  function handleSubmit(values, actions) {
    dispatch(getStepsAction(values))
    navigate('/step-show')
    // console.log(values);
    let dataStep = [];
    let current_step = 280;
    let indexStep = 0;
    values.steps.map((item, index) => {
      current_step += 1;
      if (indexStep == index) {
        for (const [key, value] of Object.entries(item)) {
          dataStep.push(`${key}: ${value}`);
        }
      }
      addSteps({
        process_id: "1",
        current_step: `${current_step}`,
        deadline: "2030-10-10",
        data: `${dataStep}`,
        finished: "1",
        field_id: "3",
      });
      indexStep += 1;
      dataStep = [];
    });
  }

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={currentValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form id={formId}>
            <Stepper activeStep={activeStep} />
            <StepForm step={activeStep} />
            <Button
              className={classes.button}
              disabled={activeStep === 0}
              onClick={handleBack}
              type="button"
            >
              Back
            </Button>
            <RemoveButton className={classes.button} activeStep={activeStep} 
              onChange={handleRemove}
              />
            <NextButton
              className={classes.button}
              onChange={handleNext}
              activeStep={activeStep}
            />
            <Button
              disabled={isSubmitting}
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Finish
            </Button>
            {/* <Button
              className={classes.button}
              disabled={activeStep === 0}
              type="button"
              onClick={()=> navigate('step-show')}
            >
              ShowStep
            </Button> */}
          </Form>
        );
      }}
    </Formik>
  );
};

// export default LinaerStepper;
