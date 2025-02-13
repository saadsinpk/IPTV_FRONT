import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Country } from "country-state-city";
import React, { useEffect, useState } from "react";

function CoutrySelect({ errors, watch, register }) {
  const [countriesList, setCountriesList] = useState([]);
  const countryValue = watch("country") || "";
  useEffect(() => {
    setCountriesList(Country.getAllCountries());
  }, []);
  return (
    <FormControl fullWidth error={!!errors.country}>
      <Select
        sx={{ background: "white" }}
        value={countryValue}
        {...register("country", { required: "Country is required" })}
        onChange={(event) => setValue("country", event.target.value)}
      >
        {countriesList.map((country) => (
          <MenuItem key={country.isoCode} value={country.isoCode}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errors.country?.message}</FormHelperText>
    </FormControl>
  );
}

export default CoutrySelect;
