import React from "react";
import { Autocomplete, TextField } from "@mui/material";

function UniversalAutocomplete({ label, options, width, val, onChange }) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      value={val || null} // Handle null or undefined value gracefully
      getOptionLabel={(option) => option?.label || ""} // Ensure the label exists
      sx={{ width: width || 300 }} // Default width, can be overridden
      onChange={(event, newValue) => {
        if (onChange) {
          onChange(newValue); // Trigger onChange handler from parent if provided
        }
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
}

export default UniversalAutocomplete;
