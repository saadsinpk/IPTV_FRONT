import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import SearchComponent from "@/components/ui/SearchComponent";
import DynamicTable from "@/components/ui/tablewithentries";
import UniversalButton from "@/components/ui/UniversalButton";
import { useNavigate } from "react-router-dom";
import UniversalAutocomplete from "../../components/ui/UniversalAutocompleteSelect";
import UniversalSelectMulti from "../../components/ui/UniversalSelectMulti";
import UniversalSelectSearching from "../../components/ui/UniversalSelectSearching";

function Streams() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedserveres, setSelectedserveres] = useState({
    title: "",
    _id: "",
  });
  const [selectedCategories, setSelectedCategories] = useState({
    title: "",
    _id: "",
  });
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedConnection, setSelectedConnection] = useState("");
  const [selectedProviders, setSelectedProviders] = useState("");
  const serveres = [
    { title: "Main Server", id: "0000001" },
    { title: "48 TB VOD", id: "0000002" },
    { title: "VOD 36 TB", id: "0000003" },
    { title: "WS-28 Mart", id: "0000004" },
  ];
  const categories = [
    { title: "TR: ULUSAL", id: "0000001" },
    { title: "TR: SPOR", id: "0000002" },
    { title: "TR: HABER", id: "0000003" },
    { title: "TR: SINEMA", id: "0000004" },
  ];

  // Sample data for the table with the new structure
  const entries = [
    {
      label: "Columns",
      icon: <UniversalButton children={"Columns"} />,
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
    {
      label: "Actions",
      icon: <UniversalButton children={"Actions"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
  ];
  const navigate = useNavigate();

  const tableData = [
    {
      id: "14376",
      name: "# CANADA LIVE CHANNELS #",
      clients: "0",
      uptime: "On Demand",
      server: "PLATIN",
      info: [
        { label: "Category", value: "CAN: CANADA", color: "yellow" },
        { label: "Type", value: "S", color: "blue" },
      ],
      actions: ["add", "edit", "delete"],
    },
    {
      id: "5669",
      name: "# USA LIVE CHANNELS #",
      clients: "0",
      uptime: "On Demand",
      server: "server 15",
      info: [
        { label: "Category", value: "US: USA", color: "yellow" },
        { label: "Type", value: "S", color: "blue" },
      ],
      actions: ["add", "edit", "delete"],
    },
    {
      id: "1741",
      name: "# ELLAS FHD (SAT.)",
      clients: "0",
      uptime: "On Demand",
      server: "PLATIN",
      info: [
        { label: "Category", value: "SPAIN", color: "yellow" },
        { label: "Type", value: "S", color: "blue" },
      ],
      actions: ["add", "edit", "delete"],
    },
    {
      id: "22904",
      name: "#TR SPOR INFO#",
      clients: "0",
      uptime: "93h 04m 32s",
      server: "server 15",
      info: [
        { label: "Bitrate", value: "455 Kbps", icon: "🔊" },
        { label: "Resolution", value: "1920 x 1080", icon: "📺" },
        { label: "Codec", value: "h264", icon: "🎥" },
        { label: "Audio", value: "mp2", icon: "🎵" },
        { label: "Aspect", value: "1.02x", icon: "📐" },
        { label: "FPS", value: "25", icon: "🎞️" },
      ],
    },
  ];

  // Table headers
  const headers = ["id", "name", "clients", "uptime", "server", "info"];

  // Table actions
  const actions = [
    {
      icon: "➕",
      handler: (row) => console.log("Add", row),
    },
    {
      icon: "✏️",
      handler: (row) => console.log("Edit", row),
    },
    {
      icon: "❌",
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
        <UniversalButton
          onClick={() => navigate("/dashboard/create_users")}
          height={"55px"}
          children="Create Stream"
        />

        <UniversalButton
          onClick={() => navigate("/dashboard/category")}
          height={"55px"}
          children="CATEGORIES"
        />
        <UniversalButton height={"55px"} children="RESET FILTER" />
        <UniversalButton height={"55px"} children="Refresh" />
        <UniversalButton height={"55px"} children="TOP DOWN STREAM DNS" />
        <SearchComponent
          placeHolder="Search Username"
          setSearchTerm={setSearchValue}
          searchTerm={searchValue}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "98%",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        <UniversalSelectMulti
          label="SERVERS"
          options={serveres}
          val={selectedserveres}
          width={300}
          onChange={(newValue) => setSelectedserveres(newValue)} // Update the selected driver
        />
        <UniversalSelectMulti
          label="CATEGORIES"
          options={categories}
          val={selectedCategories}
          width={300}
          onChange={(newValue) => setSelectedCategories(newValue)} // Update the selected driver
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "98%",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        <UniversalSelectSearching
          label={"Status"}
          options={[
            { value: "All", label: "All" },
            { value: "Online", label: "Online" },
            { value: "Offline", label: "Offline" },
            { value: "Stopped", label: "Stopped" },
          ]}
          value={selectedStatus}
          onChange={(newValue) => setSelectedStatus(newValue)}
        />
        <UniversalSelectSearching
          label={"CONNECTIONS"}
          options={[
            { value: "Default", label: "Default" },
            { value: "Higher than 20", label: "Higher than 20" },
            { value: "Higher than 50", label: "Higher than 50" },
            { value: "Higher than 100", label: "Higher than 100" },
          ]}
          value={selectedConnection}
          onChange={(newValue) => setSelectedConnection(newValue)}
        />
        <UniversalSelectSearching
          label={"Providers(DNS Filter)"}
          options={[{ value: "No provider", label: "No provider" }]}
          value={selectedProviders}
          onChange={(newValue) => setSelectedProviders(newValue)}
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

export default Streams;
