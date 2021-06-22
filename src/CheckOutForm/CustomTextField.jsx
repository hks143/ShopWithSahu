import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput=({ name, label, required ,placeholder})=> {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller   
        control={control}
        // label={label}
        // fullWidth
        // required={required}
        defaultValue=""
        name={name}
        render = {({ field})=> (
            <TextField
            {...field}
                fullWidth
                name={name}
                label={label}
                placeholder={placeholder}
                required={required}
            />
        )}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;