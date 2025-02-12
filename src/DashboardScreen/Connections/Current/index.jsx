import React, { useState } from "react";
import CurrentTable from "../../../components/CurrentTable";
import {
  PaginationEllipsis,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "../../../components/ui/pagination";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";
import DynamicTable from "../../../components/ui/tablewithentries";
import UniversalButton from "../../../components/ui/UniversalButton";

// Sample country and server data for the dropdowns
const countries = ["USA", "Canada", "UK", "Australia"];
const servers = ["Server 1", "Server 2", "Server 3", "Server 4"];
const entries = [
  {
    label: "Columns",
    icon: <UniversalButton children={"Columns"} />,
    handler: (row) => {
      handleOpenModal(row); // Open the modal instead of alert
    },
  },
  {
    label: "Check All",
    icon: <UniversalButton children={"Check All"} />,
    handler: (row) => {
      handleOpenModal(row); // Open the modal instead of alert
    },
  },
  {
    label: "UnCheck All",
    icon: <UniversalButton children={"UnCheck All"} />,
    handler: (row) => {
      handleOpenModal(row); // Open the modal instead of alert
    },
  },
  {
    label: "Reload",
    icon: <UniversalButton children={"Reload"} />,
    handler: (row) => {
      handleOpenModal(row); // Open the modal instead of alert
    },
  },
  {
    label: "Export",
    icon: <UniversalButton children={"Export"} />,
    handler: (row) => {
      handleOpenModal(row); // Open the modal instead of alert
    },
  },
];
const actions = [
  {
    label: "Edit",
    icon: <UniversalButton children={"Export"} />,
    handler: (row) => console.log("Edit", row),
  },
  {
    label: "Delete",
    icon: <UniversalButton children={"Export"} />,
    handler: (row) => console.log("Delete", row),
  },
];

const tableData = [
  {
    server: "AMERIKA 24 TB",
    serverId: 105,
    username: "hakankesici",
    channel: "TR: CNN TURK HD",
    speed: 70,
    ip: "85.96.50.177",
    flag: "tr",
    userAgent: "9XtreamPlayer LibVLC/3.0.18",
    start: "08:21:04 11/02/2025",
    total: "38m 55s",
    type: "ts_live",
    owner: "Korneriptv",
    restreamer: "NO",
    isp: "Turk Telekomunikasyon A.S",
    host: "vkfzggyf.3651923.xyz:8880",
    asn: 47331,
  },
  // More rows can be added here
];
const headers = [
  "server",
  "serverId",
  "username",
  "channel",
  "speed",
  "ip",
  "flag",
  "userAgent",
  "start",
  "total",
  "type",
  "owner",
  "restreamer",
  "isp",
  "host",
  "asn",
];
function CurrentPage() {
  // State for the selected country and server
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedServer, setSelectedServer] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleServerChange = (event) => {
    setSelectedServer(event.target.value);
  };

  return (
    <div className="min-h-screen bg-[#42596b] text-white p-4">
      {/* Filter section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          {/* Country filter */}
          <FormControl variant="outlined" size="small" className="w-40">
            <InputLabel>Country</InputLabel>
            <Select
              label="Country"
              value={selectedCountry}
              onChange={handleCountryChange}
              className="bg-white text-white"
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Server filter */}
          <FormControl variant="outlined" size="small" className="w-40">
            <InputLabel>Server</InputLabel>
            <Select
              label="Server"
              value={selectedServer}
              onChange={handleServerChange}
              className="bg-white text-white"
            >
              {servers.map((server) => (
                <MenuItem key={server} value={server}>
                  {server}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Table and Pagination */}
      <Paper sx={{ width: "98%", backgroundColor: "#2f3a4d", mt: 3, p: 2 }}>
        <DynamicTable
          entriesBtn={entries}
          headers={headers}
          data={tableData}
          actions={actions}
        />
      </Paper>
      <div className="flex justify-center mt-6">
        <Pagination aria-label="pagination">
          <PaginationPrevious>
            <span>Previous</span>
          </PaginationPrevious>

          <PaginationContent>
            <PaginationItem>
              <PaginationLink isActive={true} href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
          </PaginationContent>

          <PaginationNext>
            <span>Next</span>
          </PaginationNext>
        </Pagination>
      </div>
    </div>
  );
}

export default CurrentPage;
