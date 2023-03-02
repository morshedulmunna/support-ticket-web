"use client";
import AllTickets from "@/app/components/AllTickets";
import Loading from "@/app/components/Loading";
import { getSingleUser } from "@/utils/getUsers";
import { getAllTicket, getUserTicket } from "@/utils/ticket";
import ticketFilter from "@/utils/ticketFilter";
import { useEffect, useState } from "react";

const OpenTickets = () => {
  const [ticket, setTicket] = useState<any>([]);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getSingleUser(setUser);
  }, []);

  /**
   * Get Users Open Tickets
   */
  useEffect(() => {
    const getData = async () => {
      const data = await getUserTicket();
      const OpenTicket = data?.filter((tk: any) => tk.status === "open");
      setTicket(OpenTicket);
    };
    getData();
  }, []);

  /**
   * Get ALl Open Tickets Admin can See All
   */
  const [allTicket, setAllTicket] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const allTickets = await getAllTicket();
      const OpenTicket = allTickets?.filter((tk: any) => tk.status === "open");
      setAllTicket(OpenTicket);
    };
    getData();
  }, []);

  // If not get ticket show login state
  if (!ticket) {
    return <Loading />;
  }

  return (
    <div className="view">
      <p className="mb-4 font-medium">All Open Tickets _______</p>
      {user?.foundUser?.roll === "admin" ? (
        <AllTickets ticket={allTicket} />
      ) : (
        <AllTickets ticket={ticket} />
      )}
    </div>
  );
};

export default OpenTickets;
