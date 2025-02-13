import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

const data = [
  { part: "Reseller", permission: "Delete Sub-Reseller" },
  { part: "Lines/Mag/XtreamTV", permission: "Convert" },
  { part: "ISP Lock", permission: "Enable/Disable" },
  { part: "ISP Lock", permission: "Reset" },
  { part: "ISP Lock", permission: "Direct Auto lock ISP" },
  { part: "ISP Lock", permission: "[LINE] Autolock on ISP after one week" },
  { part: "ISP Lock", permission: "[MAG]Autolock on ISP after one week" },
  { part: "ISP Lock", permission: "[XtreamTV] Autolock on ISP after one week" },
  { part: "MAG Lock", permission: "Enable/Disable" },
  { part: "MAG Lock", permission: "Reset" },
  { part: "Lines", permission: "Edit Username" },
  {
    part: "Lines/Mag/XtreamTV",
    permission: "Prevent Creation with same username and password",
  },
  {
    part: "Lines/Mag/XtreamTV",
    permission: "Extend only with package that has same connection",
  },
  { part: "MAC", permission: "Edit Mac" },
  { part: "Lines/Mag/XtreamTV", permission: "Edit Password" },
  { part: "Lines/Mag/XtreamTV", permission: "Delete" },
  { part: "Lines/Mag/XtreamTV", permission: "Bouquet Selection" },
  { part: "Lines/Mag/XtreamTV", permission: "Can select all Bouquets" },
  {
    part: "Lines/Mag/XtreamTV",
    permission: "Can select all Bouquets and set the selected bouquet",
  },
  {
    part: "Lines/Mag/XtreamTV",
    permission: "Tickbox to select all bouquets of the package",
  },
];

const SettingsComponent = () => {
  const [checked, setChecked] = React.useState([false]); // State for checkboxes

  const handleCheck = (event, index) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  return (
    <TableContainer component={Paper} className="container mx-auto">
      <Table className="min-w-full table-auto">
        <TableHead className="bg-gray-100">
          <TableRow>
            <TableCell className="px-4 py-2 text-left font-medium text-gray-700 uppercase tracking-wider"></TableCell>
            <TableCell className="px-4 py-2 text-left font-medium text-gray-700 uppercase tracking-wider">
              Part
            </TableCell>
            <TableCell className="px-4 py-2 text-left font-medium text-gray-700 uppercase tracking-wider">
              Permission
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              <TableCell className="border px-4 py-2">
                <Checkbox
                  checked={checked[index] || false} // Handle undefined values
                  onChange={(event) => handleCheck(event, index)}
                  inputProps={{ "aria-label": "checkboxed" }} // Add aria-label
                />
              </TableCell>
              <TableCell className="border px-4 py-2">{row.part}</TableCell>
              <TableCell className="border px-4 py-2">
                {row.permission}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SettingsComponent;
