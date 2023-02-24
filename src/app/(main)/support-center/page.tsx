import AllTickets from "@/app/components/AllTickets";
import DataCard from "@/app/components/DataCard";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="view h-[30vh] ">
        <p className="mb-4 text-lg font-medium">Dashboard</p>
        <div className="mb-4 flex flex-row flex-wrap items-center gap-x-6 lg:flex-nowrap">
          <DataCard />
          <DataCard />
          <DataCard />
        </div>
        <p className="mb-4 font-medium">All Support Tickets_______</p>
        <AllTickets />
      </div>
    </>
  );
};

export default Dashboard;
