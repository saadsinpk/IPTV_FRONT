import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  TextField,
} from "@mui/material";
import DateComponentFromTo from "@/components/ui/DateComponentFromTo";
import SearchComponent from "@/components/ui/SearchComponent";
import { Input } from "@/components/ui/Input";
import DynamicTable from "@/components/ui/tablewithentries";

const History = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dateChange, setDateChange] = useState({ startDate: "", endDate: "" });

  const onDateChange = (key, value) => {
    setDateChange((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const tableData = [
    {
      ID: "001",
      Type: "Stream",
      "User / MAC": "user123",
      Stream: "Channel 1",
      Server: "Server 1",
      "User Agent": "Chrome",
      IP: "192.168.1.1",
      Start: "2025-02-10",
      End: "2025-02-11",
      Country: "USA",
    },
  ];

  const headers = Object.keys(tableData[0]);

  return (
    <div className="min-h-screen bg-[#42596b] text-white p-4">
      <Grid container spacing={2} sx={{ maxWidth: "100%", width: "99.5%" }}>
        <Grid className="flex gap-[16px]" item xs={12} sm={6}>
          <DateComponentFromTo
            startDate={dateChange.startDate}
            endDate={dateChange.endDate}
            width={60}
            setStartDate={(value) => onDateChange("startDate", value)}
            setEndDate={(value) => onDateChange("endDate", value)}
          />
          <SearchComponent
            placeHolder="Username"
            setSearchTerm={setSearchValue}
            searchTerm={searchValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Stream (Optional)"
            sx={{
              bgcolor: "white",
              borderRadius: "4px",
              "& input": { color: "black" },
            }}
          />
        </Grid>
      </Grid>
      <Paper sx={{ width: "98%", backgroundColor: "#2f3a4d", mt: 3, p: 2 }}>
        <DynamicTable headers={headers} data={tableData} />
      </Paper>
    </div>
  );
};

export default History;
