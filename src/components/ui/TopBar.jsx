import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const TopBar = ({ title }) => {
  return (
    <Header
      style={{
        background: "#1a2129",
        color: "white",
        padding: "0 20px",
        fontSize: "20px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* {title} */}
    </Header>
  );
};

export default TopBar;
