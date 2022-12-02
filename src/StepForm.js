
import { Grid } from '@material-ui/core';
import React from 'react';
import { InputField } from './InputField';

export default function StepForm(props) {
    const {step} = props

  return (
      <Grid container spacing={3} style={{display:"flex",flexDirection:'column' ,margin:16}}>
        <Grid item xs={12} sm={6}>
          <InputField name={`steps[${step}].name`} label='name' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={`steps[${step}].family`} label='family' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={`steps[${step}].message`} label='message' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={`steps[${step}].description`} label='description' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={`steps[${step}].created_by`} label='created_by' fullWidth />
        </Grid>
      </Grid>
  );
}
