import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

interface CheckboxGroupProps {
  options: Array<{ value: string; label: string }>;
  label?: string;
  name: string;
  required?: boolean;
}
export const CheckboxGroup = ({
  options,
  label,
  name,
  required,
}: CheckboxGroupProps) => {
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
    <FormGroup row>
      {label && (
        <FormLabel id={name} required={required} error={isError}>
          {label}
        </FormLabel>
      )}
      {options.map((option) => {
        return (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                key={option.value}
                onChange={(e) => {
                  const newValue = e.target.checked
                    ? [...(field.value || []), option.value]
                    : (field.value || []).filter(
                        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                        (v: any) => v !== option.value
                      );
                  field.onChange(newValue);
                }}
                checked={field.value?.includes(option.value) || false}
                value={option.value}
              />
            }
            label={option.label}
          />
        );
      })}
      {isError && (
        <FormHelperText error={isError}>{errorMessage}</FormHelperText>
      )}
    </FormGroup>
  );
};
