import React from "react";
import { ServerCard } from "../components/server-card";
import { StatCard } from "../components/stats-card";

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
    <div className="min-h-screen bg-[#1a1b1e] text-white p-4">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <StatCard
          title="OPEN CONNECTIONS"
          value="1,259"
          subtext="229 VOD / 3,030 LIVE"
          bgClass="bg-blue-500"
        />
        <StatCard title="ONLINE USERS" value="1,220" bgClass="bg-green-500" />
        <StatCard
          title="IN/OUTPUT"
          value="4,272/7,205"
          bgClass="bg-orange-500"
        />
        <StatCard title="ONLINE STREAMS" value="1,147" bgClass="bg-teal-500" />
        <StatCard
          title="OFFLINE STREAMS / ONDEMAND"
          value="92 / 95"
          bgClass="bg-slate-900"
        />
      </div>

      {/* Server Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dummyStats.servers.map((server, i) => (
          <ServerCard key={i} index={i} isStatic={true} />
        ))}
      </div>
    </div>
  );
};

export default SubMainDashboard;
