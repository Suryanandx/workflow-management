import React from "react";
import { TextField } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";

function FormTextField({ name, rules, type = "text", ...rest }) {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        rules={rules}
        control={control}
        // defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextField
            fullWidth
            type={type}
            margin="normal"
            autoComplete="off"
            label={name}
            variant={"outlined"}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            error={Boolean(errors && errors[name])}
            helperText={errors && errors[name]?.message}
            {...rest}
          />
        )}
      />
    </>
  );
}

export default FormTextField;
