import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";
import MuiRadioGroup from "@mui/material/RadioGroup";
import { useController, useFormContext } from "react-hook-form";

interface RadioGroupProps {
  options: Array<{ value: string; label: string }>;
  name: string;
  label: string;
  required?: boolean;
}
export const RadioGroup = ({
  options,
  name,
  label,
  required,
}: RadioGroupProps) => {
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
  return (
    <FormControl>
      <FormLabel id={name} required={required} error={isError}>
        {label}
      </FormLabel>
      <MuiRadioGroup
        aria-labelledby={name}
        defaultValue={options[0]?.value}
        name={name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
      >
        {options.map((option) => {
          return (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          );
        })}
      </MuiRadioGroup>
      {isError && (
        <FormHelperText error={isError}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};
