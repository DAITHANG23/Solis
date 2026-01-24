/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { FormControl, FormControlProps, FormHelperText, InputLabel, styled } from "@mui/material";
import React, { ReactNode } from "react";

interface FormFieldProps extends Omit<FormControlProps, "children"> {
  label?: string;
  labelShrinked?: boolean;
  labelCapitalized?: boolean;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
  required?: boolean;
}

const StyledFormControl = styled(FormControl, {
  shouldForwardProp: (prop) => prop !== "isError",
})<{ isError?: boolean }>(({ isError }) => ({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    borderRadius: "8px !important",
    borderColor: isError ? "red !important" : "#888B94",
  },

  "& .MuiOutlinedInput-root:hover:not(.Mui-disabled) .MuiOutlineInput-notchedOutline": {
    borderColor: "#888B94",
  },

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#888B94",
  },

  "& legend": {
    backgroundColor: "transparent",
    color: "transparent",
    width: 0,
  },

  "& .MuiOutlinedInput-adornedStart": {
    paddingLeft: 5,
  },

  "& .MuiOutLineInput-adornedEnd": {
    paddingRight: 5,
  },

  "& .MuiInputBase-inputAdornedStart": {
    paddingLeft: 5,
  },

  "& .MuiInputBase-inputAdornedEnd": {
    paddingRight: 5,
  },
}));

const StyledInputLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => prop !== "labelCapitalized" && prop !== "isError",
})<{ labelCapitalized: boolean; isError?: boolean }>(({ labelCapitalized, isError }) => ({
  lineHeight: "18px",
  textTransform: labelCapitalized ? "capitalize" : "unset",
  color: isError ? "red !important" : "#494C57",
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
  "&.MuiInputLabel-shrink.MuiInputLabel-outlined": {
    transform: "translate(2px, -17px) scale(1) !important",
  },
  "&.MuiPickersSectionList-root.MuiPickersInputBase-sectionsContainer": {
    padding: "11.5px 0px",
  },
}));

export const FormField: React.FC<FormFieldProps> = ({
  label,
  labelShrinked = true,
  labelCapitalized = false,
  helperText,
  error,
  fullWidth,
  children,
  required,
  ...props
}) => {
  return (
    <StyledFormControl variant='outlined' {...props} error={error} isError={error}>
      {label && (
        <StyledInputLabel
          error={error}
          isError={error}
          shrink={labelShrinked || undefined}
          labelCapitalized={labelCapitalized}
          required={required}
        >
          {label}
        </StyledInputLabel>
      )}

      {children}
      {helperText && <FormHelperText sx={{ color: "red" }}>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
};
