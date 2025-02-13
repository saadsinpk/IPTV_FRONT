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
import SettingsComponent from "@/components/SettingsComponent";
import AnnouncementEditor from "@/components/AnnouncementEditor";

function GroupCreate() {
  const [parentName, setParentName] = useState(""); // State for driver name
  const [groupName, setgroupName] = useState(""); // State for driver name
  const [isDiscountEnabled, setIsDiscountEnabled] = useState(false);

  const groupOptions = [
    { isoCode: "reseller", name: "Reseller" },
    { isoCode: "admin", name: "Admin" },
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
          <InputLabel sx={{ color: "white" }}>Role</InputLabel>
          <UniversalSelect
            register={register}
            errors={errors}
            isSubmitted={isSubmitted}
            name="role"
            errorMessages="Role"
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
          <SettingsComponent />
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <InputLabel sx={{ color: "white" }}>Refund Daily Amount</InputLabel>
            <UniversalInput
              name="refund"
              width="100%"
              errorMessages="Refund Daily Amount"
              register={register}
              errors={errors}
              isSubmitted={isSubmitted}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={{ color: "white" }}>
              Create Sub Resellers Price
            </InputLabel>
            <UniversalInput
              name="resellersprice"
              width="100%"
              errorMessages="Resellers Price"
              register={register}
              errors={errors}
              isSubmitted={isSubmitted}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={{ color: "white" }}>
              Create total trials daily
            </InputLabel>
            <UniversalInput
              name="trials"
              width="100%"
              errorMessages="total trials"
              register={register}
              errors={errors}
              isSubmitted={isSubmitted}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={{ color: "white" }}>
              Minimum Credits to create trial lines
            </InputLabel>
            <UniversalInput
              name="minimumcredits"
              width="100%"
              errorMessages="Minimum Credits"
              register={register}
              errors={errors}
              isSubmitted={isSubmitted}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={{ color: "white" }}>Subreseller Group</InputLabel>
            <UniversalSelect
              register={register}
              errors={errors}
              isSubmitted={isSubmitted}
              name="role"
              errorMessages="Role"
              value={groupName}
              setValue={(name, value) => {
                setValue(name, value); // Update react-hook-form state
                setgroupName(value); // Update local state
              }}
              options={groupOptions}
              width="100%"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={{ color: "white" }}>Announcement</InputLabel>

          <AnnouncementEditor />
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
          Group Create
        </LoadingButton>
      </Box>
    </div>
  );
}

export default GroupCreate;
