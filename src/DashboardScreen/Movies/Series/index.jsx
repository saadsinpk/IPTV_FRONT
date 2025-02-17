import React, { useState } from 'react'
import { Box, TextField, Select, MenuItem, IconButton, Typography, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from 'react-router-dom';
import UniversalButton from '../../../components/ui/UniversalButton';
import SearchComponent from '../../../components/ui/SearchComponent';
import DynamicTable from '../../../components/ui/tablewithentries';


function Series() {
    const [open, setOpen] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate()
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
    return (
        <div className="min-h-screen bg-[#42596b] text-white p-4">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "90%",
                    margin: "0px auto",
                    marginBottom: "20px"
                }}
            >
                <UniversalButton
                    onClick={() => navigate("/dashboard/create_users")}
                    height={"55px"}
                    children="Create Series"
                />

                <UniversalButton
                    onClick={() => navigate("/dashboard/category")}
                    height={"55px"}
                    children="CATEGORIES"
                />
                <SearchComponent
                    placeHolder="Search Username"
                    setSearchTerm={setSearchValue}
                    searchTerm={searchValue}
                />
            </Box>

            <Box sx={{ width: "90%", margin: "0px auto", backgroundColor: "#3d4550", borderRadius: 1, overflow: "hidden" }}>
                {/* Header */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#191c1f",
                        color: "white",
                        padding: "10px 16px",
                    }}
                >
                    <Typography sx={{ fontWeight: "bold" }}>CUSTOM FILTER</Typography>
                    <IconButton onClick={() => setOpen(!open)} sx={{ color: "#f5a623" }}>
                        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Box>
                {/* Filter Inputs */}
                {open && (
                    <Box sx={{ display: "flex", gap: 2, backgroundColor: "#b4b8bd", padding: 2 }}>
                        <TextField label="SERVERS" variant="filled" fullWidth sx={{ backgroundColor: "white" }} />
                        <TextField label="CATEGORIES" variant="filled" fullWidth sx={{ backgroundColor: "white" }} />
                        <Select defaultValue="ALL" fullWidth variant="filled" sx={{ backgroundColor: "white" }}>
                            <MenuItem value="ALL">ALL</MenuItem>
                            <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                            <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                        </Select>
                    </Box>
                )}
            </Box>
            <Paper sx={{  width: "90%", backgroundColor: "#2f3a4d",margin: "30px auto", p: 2}}>
                <DynamicTable
                    entriesBtn={entries}
                    headers={headers}
                    data={tableData}
                    actions={actions}
                />
            </Paper>
        </div >
    )
}

export default Series
