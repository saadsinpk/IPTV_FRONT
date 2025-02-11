import { TextField, Grid } from "@mui/material";
import React, { useState } from "react";

function DateComponentFromTo({ width, onDatechange, startDate, setStartDate }) {
  const [endDate, setEndDate] = useState("");

  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: `${width || 100}% !important`,
        flexBasis: `${width || 100}% !important`,
      }}
      id="DateComponentFromTo"
    >
      <Grid item xs={12} sm={6}>
        <TextField
          type="date"
          label="Start Date"
          InputLabelProps={{ shrink: true }}
          value={startDate?.startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            onDatechange("startDate", e.target.value);
          }}
          fullWidth
          sx={{ flex: 1 }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          type="date"
          label="End Date"
          InputLabelProps={{ shrink: true }}
          value={startDate?.endDate}
          onChange={(e) => {
            onDatechange("endDate", e.target.value);
            setEndDate(e.target.value);
          }}
          fullWidth
          sx={{ flex: 1 }}
        />
      </Grid>
    </Grid>
  );
}

export default DateComponentFromTo;
