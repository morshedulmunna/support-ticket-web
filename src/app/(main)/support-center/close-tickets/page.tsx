"use client";

import AllTickets from "@/app/components/AllTickets";
import { getSingleUser } from "@/utils/getUsers";
import { deleteTicket, getAllTicket, getUserTicket } from "@/utils/ticket";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CloseTickets = () => {
  const [ticket, setTicket] = useState<any>([]);
  const [user, setUser] = useState<any>({});

  const [deleteResponse, setDeleteResponse] = useState<any>();

  const deleteTicketHandler = (tiket_id: string) => {
    const res = deleteTicket(tiket_id);
    setDeleteResponse(res);
    toast.warning(`This Ticket Delete ${tiket_id}`);
  };

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
  }, [deleteResponse]);

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
  }, [deleteResponse]);

  return (
    <div className="view">
      <p className="mb-4 font-medium">All Resolved Tickets _______</p>

      {user?.foundUser?.roll === "admin" ? (
        <AllTickets
          ticket={allCloseTicket}
          deleteTicketHandler={deleteTicketHandler}
        />
      ) : (
        <AllTickets ticket={ticket} />
      )}
    </div>
  );
};

export default CloseTickets;
