"use client";
import AllTickets from "@/app/components/AllTickets";
import Loading from "@/app/components/Loading";
import getOpenTicket from "@/utils/getOpenTickets";
import { getSingleUser } from "@/utils/getUsers";
import { useEffect, useState } from "react";

const OpenTickets = () => {
  const [openTickets, setOpenTickets] = useState<any>([]);
  const [ticket, setTicket] = useState<any>([]);
  const [user, setUser] = useState<any>({});

  const openItems = ticket?.filter(
    (item: { status: string }) => item.status === "open"
  );

  useEffect(() => {
    getSingleUser(setUser);
    setTicket(user?.foundUser?.ticket);
    setOpenTickets(openItems);
  }, [user?.foundUser?.ticket]);

  if (!ticket) {
    return <Loading />;
  }

  return (
    <div className="view">
      <AllTickets ticket={openTickets} />
    </div>
  );
};

export default OpenTickets;
