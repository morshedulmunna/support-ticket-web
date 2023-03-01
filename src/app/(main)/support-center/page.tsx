"use client";

import AllTickets from "@/app/components/AllTickets";
import DataCard from "@/app/components/DataCard";
import { getSingleUser } from "@/utils/getUsers";
import { ProtectedAuth } from "@/utils/ProtectedAuth";
import { getAllTicket, getUserTicket } from "@/utils/ticket";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [ticket, setTicket] = useState<any>([]);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getSingleUser(setUser);
  }, []);

  const [allTicket, setAllTicket] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const allTickets = await getAllTicket();
      setAllTicket(allTickets);
    };
    getData();
  }, []);

  return (
    <>
      <div className="view ">
        {user?.foundUser?.roll === "admin" && (
          <>
            <p className="mb-4 text-lg font-medium">Dashboard</p>
            <div className="mb-4 flex flex-row flex-wrap items-center gap-x-6 lg:flex-nowrap">
              <DataCard count={allTicket?.length} label={"Number of Tickets"} />
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
