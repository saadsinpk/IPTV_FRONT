import React, { useState } from "react";
import {
  PaginationEllipsis,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import CurrentConnectionISPTable from "@/components/CurrentConnectionISPTable";

// Sample country and server data for the dropdowns
const countries = ["USA", "Canada", "UK", "Australia"];
const servers = ["Server 1", "Server 2", "Server 3", "Server 4"];

function CurrentConnectionISP() {
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

      {/* Table and Pagination */}
      <CurrentConnectionISPTable />
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

export default CurrentConnectionISP;
