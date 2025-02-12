import React from "react";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  TextField,
} from "@mui/material";

const UniversalInput = ({
  multiline,
  param,
  register,
  errors,
  isSubmitted,
  name,
  label,
  errorMessages,
  type = "text",
  width,
  minLength = 0,
  maxLength = 50,
  required = true,
  disabled = false,
}) => (
  <Grid
    style={{ maxWidth: width ? width : "" }}
    item
    xs={12}
    sm={6}
    sx={{ marginBottom: "15px" }}
  >
    <Box>
      <FormControl
        fullWidth
        sx={{ marginBottom: "5px" }}
        error={!disabled && !!errors?.[name]} // Error sirf tab dikhaye jab disabled false ho
        disabled={disabled}
      >
        <InputLabel
          htmlFor={`${name}-input`}
          sx={{
            transform: param?.id ? "translate(14px, -6px) scale(0.75)" : "",
          }}
        >
          {label}
        </InputLabel>

        {multiline ? (
          <TextField
            id={`${name}-input`}
            {...(!disabled &&
              register(name, {
                ...(required && { required: `${errorMessages} is required` }),
                minLength: {
                  value: minLength,
                  message: `Minimum length is ${minLength} characters.`,
                },
                maxLength: {
                  value: maxLength,
                  message: `Maximum length is ${maxLength} characters.`,
                },
              }))}
            label={label}
            multiline
            rows={4}
            variant="outlined"
            sx={{ marginBottom: "5px" }}
            error={!disabled && !!errors?.[name]}
          />
        ) : (
          <OutlinedInput
            id={`${name}-input`}
            type={type}
            {...(!disabled &&
              register(name, {
                ...(required && { required: `${errorMessages} is required` }),
                minLength: {
                  value: minLength,
                  message: `Minimum length is ${minLength} characters.`,
                },
                maxLength: {
                  value: maxLength,
                  message: `Maximum length is ${maxLength} characters.`,
                },
              }))}
            label={label}
            sx={{
              marginBottom: "5px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor:
                    !disabled && errors?.[name] ? "#f44336" : "#000000",
                },
                "&:hover fieldset": {
                  borderColor:
                    !disabled && errors?.[name] ? "#f44336" : "#000000",
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    !disabled && errors?.[name] ? "#f44336" : "#000000",
                },
              },
            }}
            error={!disabled && !!errors?.[name]}
          />
        )}

        {!disabled && errors?.[name] && isSubmitted && (
          <FormHelperText>{errors[name].message}</FormHelperText>
        )}
      </FormControl>
    </Box>
  </Grid>
);

export default UniversalInput;
