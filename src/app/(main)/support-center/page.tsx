import React from "react";
import AllTickets from "~/app/components/AllTickets";
import DataCard from "~/app/components/DataCard";

const Dashboard = () => {
  return (
    <>
      <div className="view h-[30vh] ">
        <p>Dashboard</p>

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
