import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";
import { stepDefaultData } from "../config/formInitialValues";

const NextButton = (props) => {
  const { values, setValues } = useFormikContext();
  const { className, activeStep, onChange } = props;

  const handleClick = () => {
    const nextStep = activeStep + 1;
    if (!values.steps[nextStep]) {
        setValues({...values,steps:[...values.steps,{...stepDefaultData}]})
    }
    onChange(nextStep)
  };

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={handleClick}
      type="button"
    >
      Next
    </Button>
  );
};

export default NextButton;
