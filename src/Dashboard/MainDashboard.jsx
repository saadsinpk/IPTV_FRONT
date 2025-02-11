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
            key: "/dashboard/connections_current_connection_isp",
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
        name: "Transcode Profiles",
        key: "/dashboard/transcode_profiles",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Created Channel",
        key: "/dashboard/created_channel",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Radio",
        key: "/dashboard/radio",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Folder Watch",
        key: "/dashboard/folder_watch",
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
        subItems: [
          { name: "User", key: "/dashboard/lines_user" },
          {
            name: "MAG",
            key: "/dashboard/lines_mag",
          },
          { name: "XtreamTV", key: "/dashboard/lines_xtreamtv" },
        ],
      },
      {
        name: "Packages",
        key: "/dashboard/Packages",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Stats",
        key: "/dashboard/stats",
        icon: <AppstoreOutlined />,
        subItems: [
          { name: "Streams", key: "/dashboard/stats_streams" },
          { name: "Line usage", key: "/dashboard/stats_line_usage" },
          { name: "MAG Leaks(ISP)", key: "/dashboard/stats_mag_leaks_isp" },
          { name: "DNS Finder", key: "/dashboard/stats_dns_finder" },
          {
            name: "User Agent History",
            key: "/dashboard/stats_user_agent_history",
          },
          { name: "User Agent", key: "/dashboard/stats_user_agent" },
          { name: "Compromized", key: "/dashboard/stats_compromized" },
          {
            name: "Match-username-password",
            key: "/dashboard/stats_match_username_password",
          },
          { name: "Dangerous Ips", key: "/dashboard/stats_dangerous_ips" },
          {
            name: "Diff ISP Detection",
            key: "/dashboard/stats_diff_isp_detection",
          },
          { name: "Proxy Detection", key: "/dashboard/stats_proxy_detection" },
          { name: "Top50", key: "/dashboard/stats_top50" },
          {
            name: "Top 50 online DNS",
            key: "/dashboard/stats_stats_Top_50_online_dns",
          },
          {
            name: "Top 50 offline DNS",
            key: "/dashboard/stats_Top_50_offline_dns",
          },
          { name: "Top ASN/ISP", key: "/dashboard/stats_Top_asn_isp" },
          {
            name: "Search History IP",
            key: "/dashboard/stats_search_history_ip",
          },
          {
            name: "Top 50 active DNS",
            key: "/dashboard/stats_Top_50_active_dns",
          },
        ],
      },
      {
        name: "Logs",
        key: "/dashboard/logs",
        icon: <AppstoreOutlined />,
        subItems: [
          { name: "Credits", key: "/dashboard/logs_credits" },
          { name: "Streams", key: "/dashboard/logs_streams" },
          { name: "Activity", key: "/dashboard/logs_activity" },
          { name: "Pannel Error", key: "/dashboard/logs_pannel_error" },
          { name: "Client Request", key: "/dashboard/logs_client_request" },
          { name: "Login Logs", key: "/dashboard/logs_login_logs" },
        ],
      },
      {
        name: "Tools",
        key: "/dashboard/tools",
        icon: <AppstoreOutlined />,
        subItems: [
          { name: "Tools Menu", key: "/dashboard/tools_tools_menu" },
          {
            name: "ISP Whitelist/Block List",
            key: "/dashboard/tools_isp_whitelist_block_list",
          },
          {
            name: "ASN Whitelist/Block List",
            key: "/dashboard/tools_asn_whitelist_block_list",
          },
          {
            name: "Block User Agent",
            key: "/dashboard/tools_block_user_agent",
          },
          { name: "Block IP / CIDR", key: "/dashboard/tools_block_ip_cidr" },
          { name: "RTMP ips", key: "/dashboard/tools_rtmp_ips" },
          { name: "Movie Dplicated", key: "/dashboard/tools_movie_dplicated" },
          {
            name: "Serie Duplicated",
            key: "/dashboard/tools_serie_duplicated",
          },
          { name: "Channel Order", key: "/dashboard/tools_channel_order" },
        ],
      },
      {
        name: "Announcement",
        key: "/dashboard/announcement",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Settings",
        key: "/dashboard/settings",
        icon: <AppstoreOutlined />,
      },
      {
        name: "FAQ",
        key: "/dashboard/faq",
        icon: <AppstoreOutlined />,
      },
      {
        name: "ChangeLog",
        key: "/dashboard/change_log",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Payment",
        key: "/dashboard/payment",
        icon: <AppstoreOutlined />,
      },
      {
        name: "Server Manager",
        key: "/dashboard/server_managers",
        icon: <AppstoreOutlined />,
        subItems: [
          { name: "Servers", key: "/dashboard/server_managers_servers" },
          { name: "Backup", key: "/dashboard/server_managers_backup" },
          {
            name: "Database Cons",
            key: "/dashboard/server_managers_database_cons",
          },
          {
            name: "Server Stats",
            key: "/dashboard/server_managers_server_stats",
          },
          {
            name: "Manage Proxy's",
            key: "/dashboard/server_managers_manage_proxys",
          },
        ],
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
