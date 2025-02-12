import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Button,
} from "@mui/material";

const DynamicTable = ({ headers, data, actions, entriesBtn }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          {entriesBtn &&
            entriesBtn.map((item, index) => (
              <span
                key={index}
                onClick={() => item?.handler && item.handler(row)}
                className="cursor-pointer"
              >
                {typeof item.icon === "function" ? item.icon(row) : item.icon}
              </span>
            ))}
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="bg-[#2d343c] text-white">
              {headers.map((header, index) => (
                <TableCell
                  key={index}
                  className="font-bold text-center text-white"
                  sx={{
                    textTransform: "capitalize",
                    textAlign: "center !important",
                    color: "white !important",
                  }}
                >
                  {header}
                </TableCell>
              ))}
              {actions && (
                <TableCell
                  sx={{
                    textTransform: "capitalize",
                    textAlign: "center !important",
                    color: "white !important",
                  }}
                  className="font-bold"
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="hover:bg-gray-100">
                {headers.map((header, colIndex) => (
                  <TableCell
                    className="text-center"
                    sx={{ textAlign: "center !important" }}
                    key={colIndex}
                  >
                    {row[header]}
                  </TableCell>
                ))}
                {actions && (
                  <TableCell>
                    {actions.map((item, index) => (
                      <span
                        key={index}
                        onClick={() => item?.handler && item.handler(row)}
                        className="cursor-pointer text-center"
                      >
                        {typeof item.icon === "function"
                          ? item.icon(row)
                          : item.icon}
                      </span>
                    ))}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DynamicTable;
