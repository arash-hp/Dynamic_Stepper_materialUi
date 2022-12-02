import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

export function InputField(props) {
  const [field] = useField(props);


  return (
    <TextField
      type="text"
      {...field}
    />
  );
}
