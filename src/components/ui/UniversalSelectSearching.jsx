import React from "react";
import { Autocomplete, TextField } from "@mui/material";

function UniversalSelectSearching({ label, value, onChange, options = [] }) {
  return (
    <div className="w-full " id="UniversalSelectSearching">
      <Autocomplete
        id="search-select"
        options={options}
        getOptionLabel={(option) => option.label || ""}
        value={options.find((option) => option.value === value) || null}
        onChange={(event, newValue) => onChange(newValue ? newValue.value : "")}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={`${label}`}
            variant="outlined"
            size="small"
            className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 shadow-sm transition"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                fontSize: "14px",
                padding: "6px 12px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px",
              },
            }}
          />
        )}
        className="bg-white rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />
    </div>
  );
}

export default UniversalSelectSearching;
