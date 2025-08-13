"use client";
import {
  alpha,
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
  styled,
} from "@mui/material";
import { useFormContext, useController } from "react-hook-form";
const StyledInput = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "error",
})<{ error?: boolean }>(({ theme, error }) => ({
  width: "100%",
  "label + &": {
    fontSize: "16px",

    marginTop: theme.spacing(6),
  },
  "& .MuiInputBase-input": {
    width: "100%",
    borderRadius: 4,
    position: "relative",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    border: `1px solid ${error ? theme.palette.error.main : "#ccc"}`,
    "&:focus-within": {
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.primary.main,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

interface FieldInputProps {
  label: string;
  name: string;
  required?: boolean;
  isReadOnly?: boolean;
}

export const FieldInput = ({
  label,
  name,
  required,
  isReadOnly,
}: FieldInputProps) => {
  const { control, register } = useFormContext();

  const {
    // field,
    fieldState: { error, isTouched },
  } = useController({
    name,
    control,
  });

  const isError = !!error && isTouched;
  const errorMessage = error?.message;
  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <InputLabel
        shrink
        htmlFor={name}
        required={required}
        error={isError}
        sx={{
          "& .MuiFormLabel-asterisk": {
            color: "red",
          },

          "&.MuiInputLabel-shrink": {
            fontSize: "16px",
            transform: "scale(1)",
            color: `${isError ? "red" : "#494C57"}`,
          },
        }}
      >
        {label}
      </InputLabel>
      <StyledInput
        // {...field}
        id={name}
        readOnly={isReadOnly}
        error={isError}
        sx={{ marginTop: "20px" }}
        fullWidth
        {...register(name)}
      />
      {isError && (
        <FormHelperText error={isError}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};
