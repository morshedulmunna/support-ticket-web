import React from "react";
import AllTickets from "~/app/components/AllTickets";
import DataCard from "~/app/components/DataCard";

const Dashboard = () => {
  return (
    <>
      <div className="view">
        <p>Dashboard</p>

        <div className="mb-12 flex flex-row flex-wrap items-center gap-x-6 lg:flex-nowrap">
          <DataCard />
          <DataCard />
          <DataCard />
        </div>
        <AllTickets />
      </div>
    </>
  );
};

export default Dashboard;
