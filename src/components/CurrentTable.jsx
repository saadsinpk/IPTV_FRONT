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

const CurrentTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "100%", width: "98%", boxShadow: 3, borderRadius: 2 }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "#2d343c" }}>
          <TableRow>
            {[
              "Server",
              "Server ID",
              "Username",
              "Channel",
              "Speed",
              "IP",
              "Flag",
              "User Agent",
              "Start",
              "Total",
              "Type",
              "Owner",
              "Restreamer",
              "ISP",
              "Host",
              "ASN",
              "Actions",
            ].map((header) => (
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
              <TableCell>{row.server}</TableCell>
              <TableCell>{row.serverId}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.channel}</TableCell>
              <TableCell sx={{ width: 120 }}>
                <LinearProgress variant="determinate" value={row.speed} />
              </TableCell>
              <TableCell>{row.ip}</TableCell>
              <TableCell>
                <Flag code={row.flag} style={{ width: 25 }} />
              </TableCell>
              <TableCell>{row.userAgent}</TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.restreamer}</TableCell>
              <TableCell>{row.isp}</TableCell>
              <TableCell>{row.host}</TableCell>
              <TableCell>{row.asn}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" size="small">
                  Kick
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrentTable;
