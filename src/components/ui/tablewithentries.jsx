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
                    key={colIndex}
                    className="text-center"
                    sx={{ textAlign: "center !important" }}
                  >
                    {header === "info" ? (
                      <div className="flex flex-wrap gap-1 justify-center">
                        {row.info?.map((info, i) => (
                          <span
                            key={i}
                            className={`px-2 py-1 text-white rounded ${
                              info.color === "yellow"
                                ? "bg-yellow-400"
                                : "bg-blue-500"
                            }`}
                          >
                            {info.icon
                              ? `${info.icon} ${info.value}`
                              : `${info.label}: ${info.value}`}
                          </span>
                        ))}
                      </div>
                    ) : (
                      row[header]
                    )}
                  </TableCell>
                ))}
                {actions && (
                  <TableCell sx={{ textAlign: "center" }}>
                    {actions.map((item, index) => (
                      <span
                        key={index}
                        onClick={() => item?.handler && item.handler(row)}
                        className="cursor-pointer text-center mx-1"
                      >
                        {item.icon}
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
