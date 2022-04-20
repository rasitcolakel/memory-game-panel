import { Controller } from "react-hook-form";
import React from "react";
import { TextField } from "@mui/material";

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
          value={
            props.inputProps && props.inputProps?.type === "number"
              ? Number(field.value)
              : field.value
          }
          onChange={(e) => {
            if (props.inputProps?.type === "number") {
              field.onChange(Number(e.target.value));
            } else {
              field.onChange(e.target.value);
            }
          }}
        />
      )}
    />
  );
}
