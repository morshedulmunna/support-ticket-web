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

  /**
   * Get USer Close Tickets
   */
  useEffect(() => {
    const getData = async () => {
      const data = await getUserTicket();
      const closeTicket = data?.filter((tk: any) => tk.status === "close");
      setTicket(closeTicket);
    };
    getData();
  }, []);

  /**
   * Get All USer Close Tickets
   */
  const [allCloseTicket, setAllCloseTicket] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const allTickets = await getAllTicket();
      const closeTicket = allTickets?.filter(
        (tk: any) => tk.status === "close"
      );
      setAllCloseTicket(closeTicket);
    };
    getData();
  }, []);

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
