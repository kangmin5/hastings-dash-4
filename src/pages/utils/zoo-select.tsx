import React, { ReactNode } from "react";
import {
  Select,
  SelectProps,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import { ZooControl } from "./zoo-control";
import { FieldValues, useController } from "react-hook-form";

export interface ISelectItem {
  label: ReactNode;
  value: string | number;
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}

// 만약 props 가 더 필요하다면 아래 정의하면 됩니다.
type CustomSelectProps<T> = {
  selectList: ISelectItem[];
  placeholder: string;
  onChange?: (event: SelectChangeEvent<T>) => void;
};

type ZooProps<T extends FieldValues> = Omit<
  SelectProps,
  "onChange" | "placeholder"
> &
  CustomSelectProps<T> &
  ZooControl<T>;

function ZooSelect<T extends FieldValues>(props: ZooProps<T>) {
  const {
    name,
    rules,
    control,
    selectList,
    placeholder,
    onChange: propsOnChange,
  } = props;
  const {
    field: { value, onChange, onBlur },
  } = useController({
    name,
    rules,
    control,
  });

  const handleChange = (event: SelectChangeEvent<T>) => {
    onChange(event);
    if (propsOnChange) {
      propsOnChange(event);
    }
  };

  const renderValue = () =>
    value && !!value.length
      ? selectList.find((item) => item.value === value)?.label
      : placeholder;

  return (
    <Select
      value={value}
      renderValue={renderValue}
      onChange={handleChange}
      onBlur={onBlur}
      sx={{
        width: "220px",
        padding: "8px",
        "& .MuiSelect-outlined": { padding: 0 },
      }}
    >
      {selectList.map(({ label, value, disabled }, index) => (
        <MenuItem key={index} value={value} disabled={disabled ?? false}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default ZooSelect;
