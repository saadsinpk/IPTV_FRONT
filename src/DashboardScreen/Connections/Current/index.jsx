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
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

// Sample country and server data for the dropdowns
const countries = ["USA", "Canada", "UK", "Australia"];
const servers = ["Server 1", "Server 2", "Server 3", "Server 4"];

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
      <CurrentTable />
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
