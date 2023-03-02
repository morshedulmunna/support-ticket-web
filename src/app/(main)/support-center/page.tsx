"use client";

import AllTickets from "@/app/components/AllTickets";
import DataCard from "@/app/components/DataCard";
import { getSingleUser } from "@/utils/getUsers";
import { ProtectedAuth } from "@/utils/ProtectedAuth";
import { deleteTicket, getAllTicket, getUserTicket } from "@/utils/ticket";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [deleteResponse, setDeleteResponse] = useState<any>();

  const deleteTicketHandler = (tiket_id: string) => {
    const res = deleteTicket(tiket_id);
    console.log(res);

    setDeleteResponse(res);
    toast.warning(`This Ticket Delete ${tiket_id}`);
  };

  /**
   * Get Get USer Who Now Login
   */
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    getSingleUser(setUser);
  }, []);

  /**
   * Get SIngle User Tickets
   */
  const [ticket, setTicket] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const allTickets = await getUserTicket();
      setTicket(allTickets);
    };
    getData();
  }, []);

  /**
   * Get All Tickets For Admin
   */
  const [allTicket, setAllTicket] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const allTickets = await getAllTicket();
      setAllTicket(allTickets);
    };
    getData();
  }, [deleteResponse]);

  return (
    <>
      <div className="view ">
        {user?.foundUser?.roll === "admin" && (
          <div>
            <p className="mb-4 text-lg font-medium">Dashboard</p>
            <div className="mb-4 flex flex-row flex-wrap items-center gap-x-6 lg:flex-nowrap">
              <DataCard count={allTicket?.length} label={"Number of Tickets"} />
            </div>
          </div>
        )}

        <p className="mb-4 font-medium">All Tickets History_______</p>

        {user?.foundUser?.roll === "admin" ? (
          <AllTickets
            ticket={allTicket}
            deleteTicketHandler={deleteTicketHandler}
          />
        ) : (
          <AllTickets
            ticket={ticket}
            deleteTicketHandler={deleteTicketHandler}
          />
        )}
      </div>
    </>
  );
};

export default ProtectedAuth(Dashboard);
