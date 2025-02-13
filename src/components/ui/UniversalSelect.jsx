import React from "react";
import {
  Grid,
  Box,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const UniversalSelect = ({
  disabled = false,
  register,
  errors,
  isSubmitted,
  name,
  errorMessages,
  value, // Current selected value (e.g., selectedCountry)
  setValue, // Function to update react-hook-form state
  options = [], // Options list to populate Select dropdown
  resetValues, // Function to reset dependent fields (e.g., reset state and city)
  width, // Optional width for Grid
}) => {
  return (
    <Grid
      style={{ maxWidth: width ? width : "" }}
      item
      xs={12}
      sm={6}
      sx={{ marginBottom: "15px" }}
    >
      <Box>
        <FormControl
          disabled={disabled}
          fullWidth
          sx={{ marginBottom: "5px" }}
          error={!!errors?.[name]}
        >
          <Select
            disabled={disabled}
            id={`${name}-input`}
            value={value || ""}
            {...register(name, {
              required: `${errorMessages} is required`,
            })}
            onChange={(event) => {
              const selectedValue = event.target.value;
              setValue(name, selectedValue); // Update react-hook-form state
              if (resetValues) {
                resetValues(selectedValue); // Reset dependent fields (e.g., state, city)
              }
            }}
            sx={{
              background: "white",
              marginBottom: "5px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: errors?.[name] ? "#f44336" : "#000000", // Red if error, black if no error
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: errors?.[name] ? "#f44336" : "#000000", // Red on hover if error
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: errors?.[name] ? "#f44336" : "#000000", // Red when focused if error
              },
            }}
            error={!!errors?.[name]}
          >
            {options.length > 0 ? (
              options.map((option) => (
                <MenuItem key={option.isoCode} value={option.isoCode}>
                  {option.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled sx={{ textAlign: "center" }}>
                No data found
              </MenuItem>
            )}
          </Select>

          {errors?.[name] && isSubmitted && (
            <FormHelperText>{errors[name].message}</FormHelperText>
          )}
        </FormControl>
      </Box>
    </Grid>
  );
};

export default UniversalSelect;
