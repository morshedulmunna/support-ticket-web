"use client";

import AllTickets from "@/app/components/AllTickets";
import DataCard from "@/app/components/DataCard";
import { Url } from "@/utils/basic";
import { getSingleUser } from "@/utils/getUsers";
import { ProtectedAuth } from "@/utils/ProtectedAuth";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [ticket, setTicket] = useState<any>([]);

  useEffect(() => {
    const fetchIssue = async () => {
      fetch(`${Url}/tickets`)
        .then((response) => response.json())
        .then((data) => setTicket(data));
    };
    fetchIssue();
  }, []);

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getSingleUser(setUser);
  }, []);

  return (
    <>
      <div className="view h-[30vh] ">
        {user?.foundUser?.roll === "admin" && (
          <>
            <p className="mb-4 text-lg font-medium">Dashboard</p>
            <div className="mb-4 flex flex-row flex-wrap items-center gap-x-6 lg:flex-nowrap">
              <DataCard count={ticket.length} label={"Number of Tickets"} />
              <DataCard count={ticket.length} label={"Open Tickets"} />
              <DataCard count={ticket.length} label={"Resolve Tickets"} />
            </div>
          </>
        )}

        <p className="mb-4 font-medium">All Tickets History_______</p>
        <AllTickets ticket={ticket} />
      </div>
    </>
  );
};

export default ProtectedAuth(Dashboard);
