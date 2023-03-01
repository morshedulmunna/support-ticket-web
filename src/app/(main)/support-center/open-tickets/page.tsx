"use client";
import AllTickets from "@/app/components/AllTickets";
import Loading from "@/app/components/Loading";
import { getSingleUser } from "@/utils/getUsers";
import { getAllTicket } from "@/utils/ticket";
import ticketFilter from "@/utils/ticketFilter";
import { useEffect, useState } from "react";

const OpenTickets = () => {
  const [openTickets, setOpenTickets] = useState<any>([]);
  const [allTicket, setAllTicket] = useState<any>([]);
  const [ticket, setTicket] = useState<any>([]);
  const [user, setUser] = useState<any>({});

  const openFilterTicket = ticketFilter(ticket, "open");
  const openFilterAllTicket = ticketFilter(allTicket, "open");

  useEffect(() => {
    getSingleUser(setUser);
    getAllTicket(setAllTicket);
    setTicket(user?.foundUser?.ticket);
    setOpenTickets(openFilterTicket);
    setOpenTickets(openFilterAllTicket);
  }, [user?.foundUser?.ticket]);

  if (!ticket) {
    return <Loading />;
  }

  return (
    <div className="view">
      {user?.foundUser?.roll === "admin" ? (
        <AllTickets ticket={openTickets} />
      ) : (
        <AllTickets ticket={openTickets} />
      )}
    </div>
  );
};

export default OpenTickets;
