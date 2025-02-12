import React from "react";
import Button from "@mui/material/Button";

const UniversalButton = ({
  disabled = false,
  backgroundColor,
  color,
  onClick,
  children,
  width,
  css,
}) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      sx={{
        backgroundColor: backgroundColor || "#6c757d",
        color: color || "#FFFFFF",
        marginRight: "5px",
        width: width,
        marginBottom: "5px",
        ...css, // Spread the custom styles passed via the `css` prop
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default UniversalButton;
