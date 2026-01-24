/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useCallback } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useController, useFormContext } from "react-hook-form";
import { DateTimeValidationError, PickerChangeHandlerContext } from "@mui/x-date-pickers/models";
import { FormField } from "./FormField";

interface CustomChangeEvent {
  target: {
    name: string;
    value: Dayjs | Date | null;
  };
}

interface FormDateTimePickerProps {
  name: string;
  inputFormat?: string;
  required?: boolean;
  label?: string;
  labelCapitalized?: boolean;
  labelShrinked?: boolean;
  disabled?: boolean;
  minDate?: Dayjs | Date;
  maxDate?: Dayjs | Date;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onError?: (error: any, value: Dayjs | null) => void;
  onChange?: (event: CustomChangeEvent) => void;
  defaultValue?: Dayjs | Date | null;
  disableCalendarPicker?: boolean;
  width?: string | number;
  className?: string;
  disableFuture?: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
}

export const DateTimePicker = (props: FormDateTimePickerProps) => {
  const {
    name,
    inputFormat = "DD/MM/YYYY",
    required = false,
    label,
    labelCapitalized,
    labelShrinked,
    disabled,
    minDate,
    maxDate,
    onError,
    onChange,
    defaultValue,
    disableCalendarPicker,
    width,
    className,
    disableFuture,
    ...rest
  } = props;

  const { control } = useFormContext();

  const {
    field: { value, onChange: fieldOnChange },
    fieldState: { error, isTouched },
  } = useController({
    name,
    control,
    defaultValue: defaultValue ? dayjs(defaultValue) : null,
  });

  const isError = !!error && isTouched;
  const errorMessage = error?.message;

  const handleDateChange = useCallback(
    (
      date: Dayjs | null,
      // biome-ignore lint/correctness/noUnusedVariables: <explanation>
      context: PickerChangeHandlerContext<DateTimeValidationError>,
    ): void => {
      const formatted = date ? date.format("DD-MM-YYYY") : null;

      // update react-hook-form
      fieldOnChange(formatted);

      // Call custom onChange if provided
      if (onChange) {
        onChange({ target: { name, value: date } });
      }
    },
    [fieldOnChange, onChange, name],
  );

  const dayjsValue = value ? dayjs(value, "DD-MM-YYYY") : null;
  const minDayjs = minDate ? dayjs(minDate) : undefined;
  const maxDayjs = maxDate ? dayjs(maxDate) : undefined;

  return (
    <FormField
      label={label}
      labelCapitalized={labelCapitalized}
      labelShrinked={labelShrinked}
      helperText={isError ? errorMessage : undefined}
      required={required}
      disabled={disabled}
      error={isError}
      className={className}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <MuiDatePicker
            value={dayjsValue}
            minDate={minDayjs}
            maxDate={maxDayjs}
            name={name}
            format={inputFormat}
            disableFuture={disableFuture}
            slotProps={{
              textField: {
                name,
                error: isError,
                disabled,
                required,
                fullWidth: true,
                InputProps: {
                  endAdornment: disabled || disableCalendarPicker ? null : undefined,
                },
              },
            }}
            onChange={handleDateChange}
            {...rest}
          />
        </DemoContainer>
      </LocalizationProvider>
    </FormField>
  );
};
