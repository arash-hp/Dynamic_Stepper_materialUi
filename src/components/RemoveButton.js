import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";
import { stepDefaultData } from "../config/formInitialValues";

const RemoveButton = (props) => {
  const { values, setValues } = useFormikContext();
  const { className, activeStep ,onChange} = props;

  const handleClick = () => {
    const nextStep = activeStep - 1;
        setValues({...values,steps:values.steps.filter((value,index)=>{
          console.log(index)
          return index !== activeStep
        })})
        onChange(nextStep)
  };

  return (
    <Button
    disabled={values.steps.length <= 1}
      className={className}
      variant="contained"
      color="primary"
      onClick={handleClick}
      type="button"
    >
      Remove
    </Button>
  );
};

export default RemoveButton;
