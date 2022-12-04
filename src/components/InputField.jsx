import { TextField } from "@material-ui/core";
import { useField } from "formik";
import React from "react";

export function InputField(props) {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField type="text" {...field} {...props}/>
      {(meta.error && meta.touched) && <div style={{color:'red'}}>{meta.error}</div>}
    </>
  );
}
