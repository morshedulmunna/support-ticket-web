"use client";

import AllTickets from "@/app/components/AllTickets";
import Loading from "@/app/components/Loading";
import { getSingleUser } from "@/utils/getUsers";
import React, { useEffect, useState } from "react";

const CloseTickets = () => {
  const [closeTickets, setCloseTickets] = useState<any>([]);
  const [ticket, setTicket] = useState<any>([]);
  const [user, setUser] = useState<any>({});

  const openItems = ticket?.filter(
    (item: { status: string }) => item.status === "close"
  );

  useEffect(() => {
    getSingleUser(setUser);
    setTicket(user?.foundUser?.ticket);
    setCloseTickets(openItems);
  }, [user?.foundUser?.ticket]);

  return (
    <div className="view">
      <AllTickets ticket={closeTickets} />
    </div>
  );
};

export default CloseTickets;
