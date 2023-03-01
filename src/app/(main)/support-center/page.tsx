"use client";

import AllTickets from "@/app/components/AllTickets";
import DataCard from "@/app/components/DataCard";
import { getSingleUser } from "@/utils/getUsers";
import { ProtectedAuth } from "@/utils/ProtectedAuth";
import { getAllTicket } from "@/utils/ticket";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [ticket, setTicket] = useState<any>([]);
  const [allTicket, setAllTicket] = useState<any>([]);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getSingleUser(setUser);
    getAllTicket(setAllTicket);
  }, []);

  useEffect(() => {
    setTicket(user?.foundUser?.ticket);
  }, [user?.foundUser?.ticket]);

  return (
    <>
      <div className="view h-[30vh] ">
        {user?.foundUser?.roll === "admin" && (
          <>
            <p className="mb-4 text-lg font-medium">Dashboard</p>
            <div className="mb-4 flex flex-row flex-wrap items-center gap-x-6 lg:flex-nowrap">
              <DataCard count={ticket?.length} label={"Number of Tickets"} />
              <DataCard count={ticket?.length} label={"Open Tickets"} />
              <DataCard count={ticket?.length} label={"Resolve Tickets"} />
            </div>
          </>
        )}

        <p className="mb-4 font-medium">All Tickets History_______</p>
        {user?.foundUser?.roll === "admin" ? (
          <AllTickets ticket={allTicket} />
        ) : (
          <AllTickets ticket={ticket} />
        )}
      </div>
    </>
  );
};

export default ProtectedAuth(Dashboard);
