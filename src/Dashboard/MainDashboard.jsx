import React, { useState, useMemo } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  BarChartOutlined,
  SettingOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { MdOutlineLogout } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { LiaSignalSolid } from "react-icons/lia";
import { FaCube } from "react-icons/fa6";
import { BsFilm } from "react-icons/bs";
import { MdWindow } from "react-icons/md";
import { FaServer, FaUserFriends } from "react-icons/fa";
import { Routes, useNavigate, Route, useLocation } from "react-router-dom";
import SubMainDashboard from "../DashboardScreen/SubMainDashboard";
import TopBar from "../components/ui/TopBar"; // Import the TopBar component
import { IoMdMail } from "react-icons/io";
import StatisticList from "../DashboardScreen/Statistic/StatisticList";
import CurrentPage from "../DashboardScreen/Connections/Current";
import CurrentConnectionISP from "../DashboardScreen/Connections/CurrentConnectionISP";
import History from "../DashboardScreen/Connections/History";
import Helpdesk from "../DashboardScreen/Helpdesk";
import UsersReseller from "../DashboardScreen/UsersReseller";

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
        icon: <FiLogIn />,
      },
      {
        name: "Users / Reseller",
        key: "/dashboard/users_reseller",
        icon: <BsFillPeopleFill />,
      },
      {
        name: "Streams",
        key: "/dashboard/streams",
        icon: <FaCirclePlay />,
      },
      {
        name: "Movies",
        key: "/dashboard/movies",
        icon: <VideoCameraOutlined />,
      },
      {
        name: "Series",
        key: "/dashboard/series",
        icon: <BsFilm />,
      },
      {
        name: "Audiobook",
        key: "/dashboard/audiobook",
        icon: <VideoCameraOutlined />,
      },
      {
        name: "Bouquets",
        key: "/dashboard/bouquets",
        icon: <BsFilm />,
      },
      {
        name: "Providers",
        key: "/dashboard/providers",
        icon: <BsFilm />,
      },
      {
        name: "Transcode Profiles",
        key: "/dashboard/transcode_profiles",
        icon: <BsFilm />,
      },
      {
        name: "Created Channel",
        key: "/dashboard/created_channel",
        icon: <BsFilm />,
      },
      {
        name: "Radio",
        key: "/dashboard/radio",
        icon: <FaCirclePlay />,
      },
      {
        name: "Folder Watch",
        key: "/dashboard/folder_watch",
        icon: <FaCirclePlay />,
      },
      {
        name: "EPG",
        key: "/dashboard/epg",
        icon: <FaCirclePlay />,
      },
      {
        name: "Archive",
        key: "/dashboard/archive",
        icon: <FaCirclePlay />,
      },
      {
        name: "Lines",
        key: "/dashboard/lines",
        icon: <FiLogIn />,
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
        icon: <FaCube />,
      },
      {
        name: "Stats",
        key: "/dashboard/stats",
        icon: <FiLogIn />,
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
        icon: <FaServer />,
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
        icon: <LiaSignalSolid />,
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
        icon: <SettingOutlined />,
      },
      {
        name: "Settings",
        key: "/dashboard/settings",
        icon: <SettingOutlined />,
      },
      {
        name: "FAQ",
        key: "/dashboard/faq",
        icon: <SettingOutlined />,
      },
      {
        name: "ChangeLog",
        key: "/dashboard/change_log",
        icon: <SettingOutlined />,
      },
      {
        name: "Payment",
        key: "/dashboard/payment",
        icon: <SettingOutlined />,
      },
      {
        name: "Server Manager",
        key: "/dashboard/server_managers",
        icon: <LiaSignalSolid />,
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
        icon: <MdOutlineLogout />,
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
          width={collapsed ? 60 : 220}
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
            style={{
              fontSize: "13px",
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
                      fontSize: "13px",
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
              <Route
                path="connections_current_connection_isp"
                element={<CurrentConnectionISP />}
              />
              <Route path="connections_history" element={<History />} />
              <Route path="helpdesk" element={<Helpdesk />} />
              <Route path="users_reseller" element={<UsersReseller />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Sidebar;
