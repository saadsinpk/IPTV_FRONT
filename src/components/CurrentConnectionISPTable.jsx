import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Flag from "react-world-flags";

const data = [
  {
    isp: "1&1 Versatel Deutschland GmbH	",
    total: 1,
  },
  // More rows can be added here
];

const CurrentConnectionISPTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "100%", width: "98%", boxShadow: 3, borderRadius: 2 }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "#2d343c" }}>
          <TableRow>
            {["ISP", "Total"].map((header) => (
              <TableCell
                key={header}
                sx={{ color: "white", fontWeight: "bold" }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} hover>
              <TableCell>{row.isp}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrentConnectionISPTable;
