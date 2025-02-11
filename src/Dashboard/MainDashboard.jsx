import React, { useState, useMemo } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  BarChartOutlined,
  SettingOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { MdWindow } from "react-icons/md";
import { FaServer, FaUserFriends } from "react-icons/fa";
import { Routes, useNavigate, Route, useLocation } from "react-router-dom";
import SubMainDashboard from "../DashboardScreen/SubMainDashboard";
import TopBar from "../components/ui/TopBar"; // Import the TopBar component
import { IoMdMail } from "react-icons/io";
import StatisticList from "../DashboardScreen/Statistic/StatisticList";
import CurrentPage from "../DashboardScreen/Connections/Current";

const { Sider, Content } = Layout;

const Sidebar = ({ collapsed, toggleCollapsed }) => {
  const [selectedKeys, setSelectedKeys] = useState(["dashboard"]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (key) => {
    if (key === "/dashboard") {
      navigate("/dashboard"); // Navigate to the root dashboard path
    } else {
      navigate(key); // Navigate to the specified path
    }
    setSelectedKeys([key]);
  };

  const handleLogout = () => {
    console.log("logut karo");
    localStorage.removeItem("token");
    navigate("/");
  };

  const getTitleFromPath = (path) => {
    switch (path) {
      case "/dashboard/statistic":
        return "Dashboard / Statistic";
      case "/dashboard/connections":
        return "Dashboard / Connections";
      case "/dashboard/connections_live":
        return "Dashboard / Connections / Live";
      case "/dashboard/connections_vod":
        return "Dashboard / Connections / VOD";
      case "/dashboard/users":
        return "Dashboard / Users/Resellers";
      case "/dashboard/user_list":
        return "Dashboard / Users/Resellers / User List";
      case "/dashboard/reseller_list":
        return "Dashboard / Users/Resellers / Reseller List";
      case "/dashboard/statistics":
        return "Dashboard / Statistics";
      case "/dashboard/movies":
        return "Dashboard / Movies";
      case "/dashboard/series":
        return "Dashboard / Series";
      case "/dashboard/autobook":
        return "Dashboard / Autobook";
      case "/dashboard/bouquets":
        return "Dashboard / Bouquets";
      case "/dashboard/providers":
        return "Dashboard / Providers";
      case "/dashboard/transcodeprofiles":
        return "Dashboard / TranscodeProfiles";
      case "/dashboard/createdchannel":
        return "Dashboard / CreatedChannel";
      case "/dashboard/radio":
        return "Dashboard / Radio";
      case "/dashboard/folderwatch":
        return "Dashboard / FolderWatch";
      case "/dashboard/epg":
        return "Dashboard / EPG";
      case "/dashboard/archive":
        return "Dashboard / Archive";
      case "/dashboard/lines":
        return "Dashboard / Lines";
      case "/dashboard/settings":
        return "Dashboard / Settings";
      default:
        return "Dashboard";
    }
  };

  const navItems = useMemo(
    () => [
      {
        name: "Dashboard",
        key: "/dashboard",
        icon: <MdWindow />,
      },
      {
        name: "Statistic",
        key: "/dashboard/statistic",
        icon: <MdWindow />,
      },
      {
        name: "Connections",
        key: "/dashboard/connections",
        icon: <FaServer />,
        subItems: [
          { name: "Current", key: "/dashboard/connections_current" },
          {
            name: "Current Connection ISP",
            key: "/dashboard/current_connection_isp",
          },
          { name: "Map", key: "/dashboard/connections_map" },
          { name: "History", key: "/dashboard/connections_history" },
        ],
      },
      {
        name: "Helpdesk",
        key: "/dashboard/helpdesk",
        icon: <FaUserFriends />,
      },
      {
        name: "Users / Reseller",
        key: "/dashboard/users_reseller",
        icon: <BarChartOutlined />,
      },
      {
        name: "Streams",
        key: "/dashboard/streams",
        icon: <BarChartOutlined />,
      },
      {
        name: "Movies",
        key: "/dashboard/movies",
        icon: <VideoCameraOutlined />,
      },
      {
        name: "Series",
        key: "/dashboard/series",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Audiobook",
        key: "/dashboard/audiobook",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Bouquets",
        key: "/dashboard/bouquets",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Providers",
        key: "/dashboard/providers",
        icon: <AppstoreOutlined />,
      },
      {
        name: "TranscodeProfiles",
        key: "/dashboard/transcodeprofiles",
        icon: <AppstoreOutlined />,
      },
      {
        name: "CreatedChannel",
        key: "/dashboard/createdchannel",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Radio",
        key: "/dashboard/radio",
        icon: <AppstoreOutlined />,
      },
      {
        name: "FolderWatch",
        key: "/dashboard/folderwatch",
        icon: <AppstoreOutlined />,
      },
      {
        name: "EPG",
        key: "/dashboard/epg",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Archive",
        key: "/dashboard/archive",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Lines",
        key: "/dashboard/lines",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Settings",
        key: "/dashboard/settings",
        icon: <SettingOutlined />,
      },
      {
        name: "LogOut",
        key: "logout",
        icon: <SettingOutlined />,
        onClick: handleLogout,
      },
    ],
    []
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Layout>
        <Sider
          width={collapsed ? 60 : 250}
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          style={{
            background: "#2d343c",
            minHeight: "100vh",
            overflowY: "auto",
          }}
        >
          <div
            className="logo"
            style={{
              height: 63,
              display: "flex",
              alignItems: "center",
              color: "#7a7f83",
              fontSize: 20,
              width: "100%",
              backgroundColor: "#1a2129",
              paddingLeft: "30px",
            }}
          >
            <IoMdMail color="#2d343c" size={30} />
            &nbsp;
            <span style={{ color: "white", fontWeight: "bold" }}>D</span>
            ASHBOARD / {/* Only "D" is white */}
          </div>
          <Menu
            theme="#2d343c"
            mode="inline"
            selectedKeys={selectedKeys}
            onClick={(e) => {
              if (e.key === "logout") {
                handleLogout();
              } else {
                handleNavClick(e.key);
              }
            }}
          >
            {navItems.map((item) => {
              if (item.subItems) {
                return (
                  <Menu.SubMenu
                    key={item.key}
                    icon={item.icon}
                    color="white"
                    style={{
                      color: "white",
                    }}
                    title={collapsed ? item.name.charAt(0) : item.name}
                  >
                    {item.subItems.map((subItem) => (
                      <Menu.Item
                        key={subItem.key}
                        onClick={() => handleNavClick(subItem.key)}
                      >
                        {subItem.name}
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              }
              return (
                <Menu.Item
                  key={item.key}
                  icon={item.icon}
                  color="white"
                  style={{
                    color: "white",
                  }}
                  onClick={() => handleNavClick(item.key)}
                >
                  {item.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <TopBar title={getTitleFromPath(location.pathname)} />{" "}
          {/* Pass the current route title */}
          <Content style={{ margin: "0", overflow: "initial" }}>
            <Routes>
              <Route path="*" element={<SubMainDashboard />} />
              <Route path="statistic" element={<StatisticList />} />
              <Route path="connections_current" element={<CurrentPage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Sidebar;
