"use client";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { useController, useFormContext } from "react-hook-form";

interface SelectFieldProps {
  options: Array<{ value: string; label: string }>;
  label: string;
  required?: boolean;
  name: string;
}
export const SelectField = ({
  options,
  label,
  required,
  name,
}: SelectFieldProps) => {
  const [open, setOpen] = useState(false);
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error, isTouched },
  } = useController({
    name,
    control,
  });

  const isError = !!error && isTouched;
  const errorMessage = error?.message;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <FormControl style={{ width: "100%" }} variant="outlined">
      <InputLabel
        shrink
        required={required}
        htmlFor="age-select"
        sx={{
          position: "static",
          transform: "none",
          mb: 0.5,
          "& .MuiFormLabel-asterisk": {
            color: "red",
          },
          marginBottom: 0,
          textAlign: "start",
        }}
        error={isError}
      >
        {label}
      </InputLabel>
      <Select
        labelId="age-label"
        sx={{
          width: "100%",
          "& .MuiSelect-outlined": {
            padding: "11.5px 14px",
          },
        }}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onBlur={field.onBlur}
        onChange={field.onChange}
        inputRef={field.ref}
        value={field.value || ""}
        error={isError}
        id="age-select"
        displayEmpty
        renderValue={(selected) => {
          if (selected === "") {
            return <span style={{ color: "#aaa" }}>Chọn lớp học</span>;
          }
          return options.find((o) => o.value === selected)?.label;
        }}
      >
        {options.map((o) => {
          return (
            <MenuItem key={o.label} value={o.value}>
              {o.label}
            </MenuItem>
          );
        })}
      </Select>
      {isError && (
        <FormHelperText error={isError}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};
