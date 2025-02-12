import React, { useState } from "react";
import { Box, Grid, InputLabel, Paper } from "@mui/material";
import SearchComponent from "@/components/ui/SearchComponent";
import DynamicTable from "@/components/ui/tablewithentries";
import UniversalButton from "@/components/ui/UniversalButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UniversalInput from "../../components/ui/UniversalInput";

function UserCreate() {
  const [searchValue, setSearchValue] = useState("");

  // Sample data for the table with the new structure

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm();
  return (
    <div className="min-h-screen bg-[#42596b] text-white p-4">
      {/* Table Component */}
      <Grid
        container
        spacing={2}
        className="mb-5 w-full"
        sx={{ width: "100% !important" }}
      >
        <Grid
          sx={{ maxWidth: "33% !important", flexBasis: "33% !important" }}
          item
          xs={12}
          sm={4}
        >
          <InputLabel sx={{ color: "white" }}>Phone Number</InputLabel>
          <UniversalInput
            name="phoneNumber"
            width="100%"
            errorMessages="Phone Number"
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
          />
        </Grid>
        <Grid
          sx={{ maxWidth: "33% !important", flexBasis: "33% !important" }}
          item
          xs={12}
          sm={4}
        >
          <InputLabel sx={{ color: "white" }}>Email Address</InputLabel>
          <UniversalInput
            width="100%"
            name="email"
            type="email"
            errorMessages="Email Address"
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
          />
        </Grid>
        <Grid
          sx={{ maxWidth: "33% !important", flexBasis: "33% !important" }}
          item
          xs={12}
          sm={4}
        >
          <InputLabel sx={{ color: "white" }}>Phone Number</InputLabel>
          <UniversalInput
            name="phoneNumber"
            width="100%"
            errorMessages="Phone Number"
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default UserCreate;
