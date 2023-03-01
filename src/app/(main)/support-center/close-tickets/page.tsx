"use client";

import AllTickets from "@/app/components/AllTickets";
import { getSingleUser } from "@/utils/getUsers";
import { getAllTicket, getUserTicket } from "@/utils/ticket";

import React, { useEffect, useState } from "react";

const CloseTickets = () => {
  const [ticket, setTicket] = useState<any>([]);

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getSingleUser(setUser);
  }, []);

  useState(async () => {
    const data = await getUserTicket();
    const OpenTicket = data?.filter((tk: any) => tk.status === "close");
    setTicket(OpenTicket);
  });

  const [allCloseTicket, setAllCloseTicket] = useState<any>([]);

  useState(async () => {
    const allTickets = await getAllTicket();
    const closeTicket = allTickets?.filter((tk: any) => tk.status === "close");
    setAllCloseTicket(closeTicket);
  });

  return (
    <div className="view">
      {user?.foundUser?.roll === "admin" ? (
        <AllTickets ticket={allCloseTicket} />
      ) : (
        <AllTickets ticket={ticket} />
      )}
    </div>
  );
};

export default CloseTickets;
