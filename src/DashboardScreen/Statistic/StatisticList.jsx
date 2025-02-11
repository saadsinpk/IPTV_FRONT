import React from "react";
import { StatCard } from "@/components/stats-card";
import { ChevronRight } from "lucide-react";
const StatisticList = () => {
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
    </div>
  );
};

export default StatisticList;
