import React from "react";
import { StatCard } from "../components/stats-card";
import { ServerCard } from "../components/server-card";

const SubMainDashboard = ({ stats }) => {
  // Ensure stats is passed as a prop
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      <StatCard
        title="OPEN CONNECTIONS"
        value="1,259"
        subtext="229 VOD / 3,030 LIVE"
        bgClass="bg-blue-500"
      />
      <StatCard title="ONLINE USERS" value="1,220" bgClass="bg-green-500" />
      <StatCard title="IN/OUTPUT" value="4,272/7,205" bgClass="bg-orange-500" />
      <StatCard title="ONLINE STREAMS" value="1,147" bgClass="bg-teal-500" />
      <StatCard
        title="OFFLINE STREAMS / ONDEMAND"
        value="92 / 95"
        bgClass="bg-slate-900"
      />
    </div>
  );
};

export default SubMainDashboard;
// <div className="min-h-screen bg-[#1a1b1e] text-white p-4">
//     {/* Top Stats */}
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
//       <StatCard
//         title="OPEN CONNECTIONS"
//         value="1,259"
//         subtext="229 VOD / 3,030 LIVE"
//         bgClass="bg-blue-500"
//       />
//       <StatCard title="ONLINE USERS" value="1,220" bgClass="bg-green-500" />
//       <StatCard
//         title="IN/OUTPUT"
//         value="4,272/7,205"
//         bgClass="bg-orange-500"
//       />
//       <StatCard title="ONLINE STREAMS" value="1,147" bgClass="bg-teal-500" />
//       <StatCard
//         title="OFFLINE STREAMS / ONDEMAND"
//         value="92 / 95"
//         bgClass="bg-slate-900"
//       />
//     </div>

//     {/* Server Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       {Array.from({ length: 8 }).map((_, i) => (
//         <ServerCard key={i} index={i} isStatic={true} />
//       ))}
//       {stats?.servers?.map((server, i) => (
//         <ServerCard key={i} index={i} server={server} />
//       ))}
//     </div>
//   </div>
