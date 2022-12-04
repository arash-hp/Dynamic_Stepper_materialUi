import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { addSteps, getSteps } from "../api/StepApi";
import NextButton from "../components/NextButton";
import RemoveButton from "../components/RemoveButton";
import { initialValues } from "../config/formInitialValues";
import { getStepsAction } from "../redux/counterSlice";
import StepForm from "../components/StepForm";
import Stepper from "../components/Stepper";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));


const currentValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  family: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  created_by: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export function getStepContent({ dataSteps }) {}

export const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [dataSteps, setDataSteps] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNext = async (nextStep) => {
    setActiveStep(nextStep);
    await getSteps().then((res) => console.log(res));
    // setActiveStep(activeStep + 1);
  };
  useEffect(() => {
    dataSteps.map((item) => {});
  }, [dataSteps]);

  const createValidation = () => {
    const data = [
      `steps[${activeStep}].name`,
      `steps[${activeStep}].family`,
      `steps[${activeStep}].message`,
      `steps[${activeStep}].description`,
      `steps[${activeStep}].created_by`,
    ];
    return data;
  };


  const handleRemove = (nextStep) => {
    setActiveStep(nextStep);
  };

  function handleSubmit(values, actions) {
    dispatch(getStepsAction(values));
    addSteps({
      process_id: "1",
      current_step: "1",
      deadline: "2030-10-10",
      data: values.steps,
      finished: "1",
      field_id: "3",
    }).then((res) => navigate("/step-show"));
  }

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={Yup.object().shape(
      //   {
      //      `steps[${activeStep}].name`:Yup.string().required("Required"),
      //      `steps[${activeStep}].family`:Yup.string().required("Required"),
      //      `steps[${activeStep}].message`:Yup.string().required("Required"),
      //      `steps[${activeStep}].description`:Yup.string().required("Required"),
      //      `steps[${activeStep}].created_by`:Yup.string().required("Required"),
      //   }
      // )}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <Stepper activeStep={activeStep} />
            <StepForm step={activeStep} />
            <RemoveButton
              className={classes.button}
              activeStep={activeStep}
              onChange={handleRemove}
            />
            <NextButton
              className={classes.button}
              onChange={handleNext}
              activeStep={activeStep}
            />
            <Button
              disabled={isSubmitting}
              // disabled={activeStep<= 1}
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Finish
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

// export default LinaerStepper;
