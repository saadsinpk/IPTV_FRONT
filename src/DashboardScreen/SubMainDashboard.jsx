import React from "react";
import { ServerCard } from "../components/server-card";
import { StatCard } from "../components/stats-card";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowAltCircleUp } from "react-icons/fa";
import {
  Users,
  ChartNoAxesCombined,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { IoIosPeople } from "react-icons/io";

const SubMainDashboard = () => {
  const dummyStats = {
    openConnections: 1259,
    onlineUsers: 1220,
    bandwidth: {
      in: 4272,
      out: 7205,
    },
    onlineStreams: 1147,
    offlineStreams: {
      current: 92,
      total: 95,
    },
    servers: Array.from({ length: 8 }).map((_, i) => ({
      name: `Server ${i + 1}`,
      status: i % 2 === 0 ? "Online" : "Offline",
      connections: Math.floor(Math.random() * 200),
      users: Math.floor(Math.random() * 100),
      inputBw: Math.floor(Math.random() * 500),
      outputBw: Math.floor(Math.random() * 1000),
      uptime: "25d 17h",
      streams: Math.floor(Math.random() * 20),
      freeCache: "90.95",
      totalDisk: `${Math.floor(Math.random() * 500)}GB`,
      cpuUsage: Math.floor(Math.random() * 100),
      memUsage: Math.floor(Math.random() * 100),
    })),
  };

  return (
    <div className="min-h-screen bg-[#42596b] text-white p-4">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 w-[98%]">
        <StatCard
          title="OPEN CONNECTIONS"
          value1="1,259"
          value2="1,259"
          className="bg-blue-500"
          icon={IoIosPeople}
          iconClass="h-35 w-35"
        />
        <StatCard
          title="ONLINE USERS"
          value1="1,220"
          value2="1,220"
          className="bg-green-500"
          icon={BsGraphUpArrow}
          iconClass="h-20 w-35"
        />
        <StatCard
          title="IN/OUTPUT"
          value1="4,272/7,205"
          value2="4,272/7,205"
          className="bg-orange-500"
          icon={ChevronRight}
          iconClass="h-35 w-35"
        />
        <StatCard
          title="ONLINE STREAMS"
          value1="1,147"
          value2="1,147"
          className="bg-teal-500"
          icon={ChevronRight}
          iconClass="h-35 w-35"
        />
        <StatCard
          title="OFFLINE STREAMS / ONDEMAND"
          value1="92 / 95"
          value2="92 / 95"
          className="bg-slate-900"
          icon={FaArrowAltCircleUp}
          iconClass="h-35 w-25"
        />
      </div>

      {/* Server Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[98%]">
        {dummyStats.servers.map((server, i) => (
          <ServerCard key={i} index={i} isStatic={true} />
        ))}
      </div>
    </div>
  );
};

export default SubMainDashboard;
