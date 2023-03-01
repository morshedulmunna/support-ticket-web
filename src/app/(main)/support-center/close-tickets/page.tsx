"use client";

import AllTickets from "@/app/components/AllTickets";
import Loading from "@/app/components/Loading";
import { getSingleUser } from "@/utils/getUsers";
import { getAllTicket } from "@/utils/ticket";
import ticketFilter from "@/utils/ticketFilter";
import React, { useEffect, useState } from "react";

const CloseTickets = () => {
  const [closeTickets, setCloseTickets] = useState<any>([]);
  const [allTicket, setAllTicket] = useState<any>([]);
  const [ticket, setTicket] = useState<any>([]);
  const [user, setUser] = useState<any>({});

  const closeFilterTicket = ticketFilter(ticket, "open");
  const closeFilterAllTicket = ticketFilter(allTicket, "close");

  useEffect(() => {
    getSingleUser(setUser);
    getAllTicket(setAllTicket);
    setTicket(user?.foundUser?.ticket);
    setCloseTickets(closeFilterTicket);
    setCloseTickets(closeFilterAllTicket);
  }, [user?.foundUser?.ticket]);

  return (
    <div className="view">
      {user?.foundUser?.roll === "admin" ? (
        <AllTickets ticket={closeTickets} />
      ) : (
        <AllTickets ticket={closeTickets} />
      )}
    </div>
  );
};

export default CloseTickets;
