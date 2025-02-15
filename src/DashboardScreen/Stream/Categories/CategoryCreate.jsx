import React, { useState } from "react";
import { Box, Grid, InputLabel } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UniversalInput from "@/components/ui/UniversalInput";
import UniversalSelect from "@/components/ui/UniversalSelect";
import { LoadingButton } from "@mui/lab";

function CategoryCreate() {
  const [parentName, setParentName] = useState(""); // State for driver name

  const parentResellerOptions = [
    { isoCode: "admin", name: "Admin" },
    { isoCode: "admin0505", name: "admin0505" },
    { isoCode: "iric058", name: "iric058" },
    { isoCode: "yasirn7zgzat", name: "Yasirn7zgzat" },
    { isoCode: "segolu", name: "Segolu" },
    { isoCode: "owa-aga", name: "owa-aga" },
    { isoCode: "oguz26", name: "Oguz26" },
    { isoCode: "msg", name: "MSG" },
    { isoCode: "baros88", name: "Baros88" },
    { isoCode: "cemocam", name: "cemocam" },
    { isoCode: "aztek17", name: "aztek17" },
    { isoCode: "zeus41", name: "Zeus41" },
    { isoCode: "suphican", name: "Suphican" },
    { isoCode: "yasirdanish", name: "YasirDanish" },
    { isoCode: "yazamazcocuk06", name: "yazamazcocuk06" },
    { isoCode: "sjdrjryusan", name: "sjdrjryusan" },
    { isoCode: "set4", name: "Set4" },
    { isoCode: "tupal", name: "Tupal" },
    { isoCode: "kuyitey", name: "kuyitey" },
    { isoCode: "kusey91", name: "kusey91" },
    { isoCode: "sunta09", name: "sunta09" },
    { isoCode: "kaka38", name: "kaka38" },
    { isoCode: "lolajosh", name: "lolajosh" },
    { isoCode: "search", name: "Search" },
    { isoCode: "oguzr", name: "Oguzr" },
    { isoCode: "sfmsa42", name: "sfmsa42" },
    { isoCode: "nexch01", name: "Nexch01" },
    { isoCode: "djhjonny", name: "Djhjonny" },
    { isoCode: "tomtom", name: "Tomtom" },
    { isoCode: "koruempty", name: "Koruempty" },
    { isoCode: "lach007", name: "lach007" },
    { isoCode: "admin02", name: "admin02" },
  ];

  // Sample data for the table with the new structure

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
        <Grid item xs={6}>
          <InputLabel sx={{ color: "white" }}>Name</InputLabel>
          <UniversalInput
            name="name"
            width="100%"
            errorMessages="Name"
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
          />
        </Grid>

        <Grid item xs={6}>
          <InputLabel sx={{ color: "white" }}>Parent</InputLabel>

          <UniversalSelect
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
            name="parent"
            errorMessages="Parent"
            value={parentName}
            setValue={(name, value) => {
              setValue(name, value); // Update react-hook-form state
              setParentName(value); // Update local state
            }}
            options={parentResellerOptions}
            width="100%"
          />
        </Grid>
      </Grid>
      <Box>
        <LoadingButton
          type="submit"
          // loading={loading}
          variant="contained"
          className="suez-one-regular"
          sx={{
            backgroundColor: "#2D2D2D",
            marginTop: "16px",
            marginBottom: "8px",
            padding: "10px 0px",
            cursor: "pointer",
            width: { xs: "100%", sm: "40%", md: "20%" },
            "&:hover": {
              backgroundColor: "#1E1E1E",
            },
          }}
        >
          Category Create
        </LoadingButton>
      </Box>
    </div>
  );
}

export default CategoryCreate;
