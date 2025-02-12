import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import SearchComponent from "@/components/ui/SearchComponent";
import DynamicTable from "@/components/ui/tablewithentries";
import UniversalButton from "@/components/ui/UniversalButton";

function Helpdesk() {
  const [searchValue, setSearchValue] = useState("");

  // Sample data for the table

  const entries = [
    {
      label: "Copy",
      icon: <UniversalButton children={"Copy"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
    {
      label: "CSV",
      icon: <UniversalButton children={"CSV"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
    {
      label: "Excel",
      icon: <UniversalButton children={"Excel"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
    {
      label: "Pdf",
      icon: <UniversalButton children={"Pdf"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
    {
      label: "Print",
      icon: <UniversalButton children={"Print"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
  ];

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
    },
  ];

  // Table headers
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

  // Table actions
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

  // Top action buttons

  return (
    <div className="min-h-screen bg-[#42596b] text-white p-4">
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "98%",
        }}
      >
        <SearchComponent
          placeHolder="Search Username"
          setSearchTerm={setSearchValue}
          searchTerm={searchValue}
        />
      </Box>

      {/* Table Component */}
      <Paper sx={{ width: "98%", backgroundColor: "#2f3a4d", mt: 3, p: 2 }}>
        <DynamicTable
          entriesBtn={entries}
          headers={headers}
          data={tableData}
          actions={actions}
        />
      </Paper>
    </div>
  );
}

export default Helpdesk;
