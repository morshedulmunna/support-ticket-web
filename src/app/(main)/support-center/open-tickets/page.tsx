"use client";
import AllTickets from "@/app/components/AllTickets";
import Loading from "@/app/components/Loading";
import getOpenTicket from "@/utils/getOpenTickets";
import { useEffect, useState } from "react";

const OpenTickets = () => {
  const [ticket, setTicket] = useState<any>([]);

  console.log(ticket);

  useEffect(() => {
    const ticket = getOpenTicket(setTicket);
    setTicket(ticket);
  }, []);

  if (!ticket) {
    return <Loading />;
  }

  return (
    <div className="view">
      <AllTickets ticket={ticket} />
    </div>
  );
};

export default OpenTickets;
