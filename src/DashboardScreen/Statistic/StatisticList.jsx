import React from "react";
import { StatCard } from "@/components/stats-card";
import TopTenTable from "@/components/top-ten-table";
const StatisticList = () => {
  const topResellersToday = [
    { reseller: "tinoris5", total: 12 },
    { reseller: "Oguz26", total: 8 },
  ];

  const topChannelsNow = [
    { channel: "Channel 1", total: 50 },
    { channel: "Channel 2", total: 40 },
  ];

  const topResellersMonth = [
    { reseller: "tinoris5", total: 29 },
    { reseller: "Oguz26", total: 24 },
  ];

  const topPackagesToday = [
    { package: "TRON PAKET 12 AY", total: 5 },
    { package: "OGUZ FULL BOUQUETS", total: 4 },
  ];

  const topPackagesMonth = [
    { package: "TRON PAKET 12 AY", total: 29 },
    { package: "OGUZ FULL BOUQUETS", total: 26 },
  ];

  return (
    <div className="min-h-screen bg-[#42596b] text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 w-[98%]">
        <StatCard
          title="Created Today Trials"
          value1="1,147"
          className="bg-[#348fe2]"
          iconClass="h-35 w-35"
        />
        <StatCard
          title="Create Today (Normal)"
          value1="1,147"
          className="bg-[#49b6d6]"
          iconClass="h-35 w-35"
        />
        <StatCard
          title="Created This Month (Trial)"
          value1="1,147"
          className="bg-[#f59c1a]"
          iconClass="h-35 w-35"
        />
        <StatCard
          title="Created This Month (Normal)"
          value1="1,147"
          className="bg-[#ff5b57]"
          iconClass="h-35 w-35"
        />
        <StatCard
          title="Extended Today"
          value1="1,147"
          className="bg-[#348fe2]"
          iconClass="h-35 w-35"
        />
        <StatCard
          title="Extended This Month"
          value1="1,147"
          className="bg-[#49b6d6]"
          iconClass="h-35 w-35"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 w-[98%]">
        <TopTenTable
          title="Top 10 Resellers Today"
          headers={["Reseller", "Total"]}
          data={topResellersToday}
        />
        <TopTenTable
          title="Top 10 Channels Now"
          headers={["Channel", "Total"]}
          data={topChannelsNow}
        />
        <TopTenTable
          title="Top 10 Resellers Month"
          headers={["Reseller", "Total"]}
          data={topResellersMonth}
        />
        <TopTenTable
          title="Top 10 Packages Today"
          headers={["Package", "Total"]}
          data={topPackagesToday}
        />
        <TopTenTable
          title="Top 10 Packages Month"
          headers={["Package", "Total"]}
          data={topPackagesMonth}
        />
      </div>
    </div>
  );
};

export default StatisticList;
