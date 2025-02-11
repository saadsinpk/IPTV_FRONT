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
} from "@mui/material";
import DateComponentFromTo from "../../../components/ui/DateComponentFromTo";
import SearchComponent from "../../../components/ui/SearchComponent";
import { Input } from "../../../components/ui/input";

// Sample country and server data for the dropdowns
const countries = ["USA", "Canada", "UK", "Australia"];
const servers = ["Server 1", "Server 2", "Server 3", "Server 4"];

function History() {
  const [searchValue, setsearchValue] = useState("");

  // State for the selected country and server
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedServer, setSelectedServer] = useState("");
  const [dateChange, setDatechange] = useState({
    startDate: "",
    endDate: "",
  });

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const onDatechange = (key, value) => {
    setDatechange((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleServerChange = (event) => {
    setSelectedServer(event.target.value);
  };

  // Sample data for the table
  const tableData = [
    {
      server: "Server 1",
      serverId: "001",
      username: "user123",
      channel: "Channel 1",
      speed: "100 Mbps",
      ip: "192.168.1.1",
      flag: "USA",
      userAgent: "Chrome",
      start: "2025-02-10",
      total: "50 GB",
      type: "Stream",
      owner: "Owner 1",
      restreamer: "Restreamer 1",
      isp: "ISP 1",
      host: "Host 1",
      asn: "ASN 123",
      actions: "Edit | Delete",
    },
    // Add more data objects here as needed
  ];

  return (
    <div className="min-h-screen bg-[#42596b] text-white p-4">
      <Box
        sx={{
          flexBasis: "50%",
          display: "flex",
          justifyContent: "end",
          gap: 1,
          width: "98%",
          alignItems: "center",
        }}
      >
        <DateComponentFromTo
          startDate={dateChange}
          setStartDate={setDatechange}
          width={33}
          onDatechange={onDatechange}
        />
        <SearchComponent
          placeHolder="Username"
          setSearchTerm={setsearchValue}
          searchTerm={searchValue}
        />
        <Input
          type="text"
          className="h-14 border border-s-2 border-black rounded-[4px]"
          placeHolder="Stream (Optional)"
        />
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper} className="mt-6 bg-[#2f3a4d]">
        <Table className="min-w-full" aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#2d343c" }}>
            <TableRow className="">
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Server
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Server ID
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Username
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Channel
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Speed
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                IP
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Flag
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                User agent
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Start
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Total
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Type
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Owner
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Restreamer
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                ISP
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Host
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                ASN
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="text-white">{row.server}</TableCell>
                <TableCell className="text-white">{row.serverId}</TableCell>
                <TableCell className="text-white">{row.username}</TableCell>
                <TableCell className="text-white">{row.channel}</TableCell>
                <TableCell className="text-white">{row.speed}</TableCell>
                <TableCell className="text-white">{row.ip}</TableCell>
                <TableCell className="text-white">{row.flag}</TableCell>
                <TableCell className="text-white">{row.userAgent}</TableCell>
                <TableCell className="text-white">{row.start}</TableCell>
                <TableCell className="text-white">{row.total}</TableCell>
                <TableCell className="text-white">{row.type}</TableCell>
                <TableCell className="text-white">{row.owner}</TableCell>
                <TableCell className="text-white">{row.restreamer}</TableCell>
                <TableCell className="text-white">{row.isp}</TableCell>
                <TableCell className="text-white">{row.host}</TableCell>
                <TableCell className="text-white">{row.asn}</TableCell>
                <TableCell className="text-white">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default History;
