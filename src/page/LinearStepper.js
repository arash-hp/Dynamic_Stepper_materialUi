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
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

export const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [dataSteps, setDataSteps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleReset = (event) => {
  //   setValue("sad");
  //   console.log(event)
  // };


  const handleNext = async (nextStep) => {
    setActiveStep(nextStep);
    // await getSteps().then((res) => console.log(res));
    // setActiveStep(activeStep + 1);
  };
  useEffect(() => {
    dataSteps.map((item) => {});
  }, [dataSteps]);

  const handleRemove = (nextStep) => {
    setActiveStep(nextStep);
  };

  function handleSubmit(values, actions) {
    setLoading(true);
    dispatch(getStepsAction(values));
    addSteps({
      process_id: "1",
      current_step: "1",
      deadline: "2030-10-10",
      data: values.steps,
      finished: "1",
      field_id: "3",
    }).then((res) => {
      navigate("/step-show");
      setLoading(false);
    });
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        steps: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required("Required"),
            family: Yup.string().required("Required"),
            message: Yup.string().required("Required"),
            product: Yup.array().required("Required"),
            created_by: Yup.array().required("Required"),
          })
        ),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <Stepper activeStep={activeStep} />
            <StepForm step={activeStep} value={todos}/>
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
            {loading && (
              <Box sx={{ width: "100%", marginTop: "16px" }}>
                <LinearProgress />
              </Box>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

// export default LinaerStepper;
