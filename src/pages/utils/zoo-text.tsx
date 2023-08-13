import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useController
} from "react-hook-form";
import {ZooControl, ZooForm} from './zoo-control'

type ZooProps<T extends FieldValues> = TextFieldProps & ZooControl<T>;

function ZooText<T extends FieldValues>({
  name,
  rules,
  control,
  ...props
}: ZooProps<T>) {
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({
    name,
    rules,
    control,
  });

  return (
    <TextField
      value={value}
      onChange={onChange}
      inputProps={{
        maxLength: 255,
      }}
      InputProps={{
        sx: {
          border: `1px solid ${error ? "red" : "gray"}`, //간단한 에러
        },
      }}
      {...props}
    />
  );
}

export default ZooText;
