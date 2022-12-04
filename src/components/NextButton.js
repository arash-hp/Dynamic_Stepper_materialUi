import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";
import { stepDefaultData } from "../config/formInitialValues";
import { isEmpty } from "lodash";

const NextButton = (props) => {
  const { values, setValues, errors ,dirty} = useFormikContext();
  const { className, activeStep, onChange } = props;

  const disabled = !isEmpty(errors) || !dirty;


  const handleClick = () => {
    const nextStep = activeStep + 1;
    if (!values.steps[nextStep]) {
      setValues({
        ...values,
        steps: [...values.steps, { ...stepDefaultData }],
      });
    }
    onChange(nextStep);
  };

  return (
    <Button
      disabled={disabled}
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
