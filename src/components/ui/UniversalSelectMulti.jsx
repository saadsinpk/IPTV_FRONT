import { Autocomplete, TextField } from "@mui/material";
import React from "react";

function UniversalSelectMulti({ options, label }) {
  return (
    <div className="  w-[50%]">
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={label}
            className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 shadow-sm transition"
          />
        )}
        className="bg-white  rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />
    </div>
  );
}

export default UniversalSelectMulti;
