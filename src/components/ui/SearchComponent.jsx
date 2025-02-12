import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = ({
  searchTerm,
  setSearchTerm,
  placeHolder = "Search...",
}) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const handleSearchClick = () => {
  //   if (onSearch) {
  //     onSearch(searchTerm);
  //   }
  // };

  return (
    <div className="gap-3" style={{ display: "flex" }}>
      <TextField
        placeholder={placeHolder}
        id="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        sx={{
          background: "white",
          color: "black",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black", // default border color
            },
            "&:hover fieldset": {
              borderColor: "black", // hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "black", // focused border color
            },
          },
        }}
      />
    </div>
  );
};

export default SearchComponent;
