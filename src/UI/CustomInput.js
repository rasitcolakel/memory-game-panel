import { Controller } from "react-hook-form";
import React from "react";
import { TextField, Typography } from "@mui/material";

export default function CustomInput(props) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={props.rules}
      render={({ field }) => (
        <TextField
          error={!!props?.errors?.type}
          helperText={props.errors?.messages[props.errors.type]}
          fullWidth
          {...props.inputProps}
          {...field}
        />
      )}
    />
  );
}
