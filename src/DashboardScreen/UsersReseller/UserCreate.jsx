import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  Paper,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UniversalInput from "@/components/ui/UniversalInput";
import UniversalSelect from "@/components/ui/UniversalSelect";
import CoutrySelect from "@/components/ui/CoutrySelect";
import { LoadingButton } from "@mui/lab";

function UserCreate() {
  const [parentName, setParentName] = useState(""); // State for driver name
  const [groupName, setgroupName] = useState(""); // State for driver name
  const [isDiscountEnabled, setIsDiscountEnabled] = useState(false);

  const groupOptions = [
    { isoCode: "super-admin", name: "Super Admin" },
    { isoCode: "administrators", name: "Administrators" },
    { isoCode: "banned", name: "Banned" },
    { isoCode: "bizim-cocuklar", name: "BIZIM COCUKLAR" },
    { isoCode: "reseller", name: "Reseller" },
    { isoCode: "dizi-grubu", name: "Dizi Grubu" },
    { isoCode: "dansker", name: "Dansker" },
    { isoCode: "oguz", name: "OGUZ" },
    { isoCode: "trion", name: "Trion" },
    { isoCode: "yasin", name: "YASIN" },
    { isoCode: "danish", name: "DANISH" },
    { isoCode: "isvicre-grup", name: "ISVICRE GRUP" },
    { isoCode: "avrupa", name: "Avrupa" },
    { isoCode: "registered-users", name: "Registered Users" },
  ];

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
          <InputLabel sx={{ color: "white" }}>User Name</InputLabel>
          <UniversalInput
            name="user_name"
            width="100%"
            errorMessages="User Name"
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
          />
        </Grid>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <InputLabel sx={{ color: "white" }}>Password</InputLabel>
          <UniversalInput
            name="password"
            width="100%"
            errorMessages="Password"
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ color: "white" }}>DNS</InputLabel>
          <UniversalInput
            name="dns"
            width="100%"
            errorMessages="DNS"
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ color: "white" }}>Group</InputLabel>
          <UniversalSelect
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
            name="group"
            errorMessages="Group"
            value={groupName}
            setValue={(name, value) => {
              setValue(name, value); // Update react-hook-form state
              setgroupName(value); // Update local state
            }}
            options={groupOptions}
            width="100%"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ color: "white" }}>Parent Reseller</InputLabel>

          <UniversalSelect
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
            name="parentreseller"
            errorMessages="Parent Reseller"
            value={parentName}
            setValue={(name, value) => {
              setValue(name, value); // Update react-hook-form state
              setParentName(value); // Update local state
            }}
            options={parentResellerOptions}
            width="100%"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ color: "white" }}>Country Restriction</InputLabel>

          <CoutrySelect errors={errors} watch={watch} register={register} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Checkbox for Discount */}
          <InputLabel sx={{ color: "white" }}>Master Reseller</InputLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={isDiscountEnabled}
                onChange={(e) => setIsDiscountEnabled(e.target.checked)}
                sx={{
                  "&.Mui-checked": {
                    color: "#4CAF50",
                  },
                }}
              />
            }
            sx={{
              fontWeight: "500",
              fontSize: "1rem",
              marginTop: "16px",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={{ color: "white" }}>Description</InputLabel>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Write the detailed content"
            {...register("description", {
              required: "Description is required",
            })}
            sx={{ background: "white" }}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={{ color: "white" }}>Dashboard Message</InputLabel>
          <TextField
            fullWidth
            sx={{ background: "white" }}
            multiline
            rows={4}
            placeholder="Write the detailed content"
            {...register("description", {
              required: "Dashboard Message is required",
            })}
            error={!!errors.message}
            helperText={errors.message?.message}
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
          User Create
        </LoadingButton>
      </Box>
    </div>
  );
}

export default UserCreate;
