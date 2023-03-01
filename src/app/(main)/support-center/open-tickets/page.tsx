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

  useEffect(() => {
    const getData = async () => {
      const data = await getUserTicket();
      const OpenTicket = data?.filter((tk: any) => tk.status === "open");
      setTicket(OpenTicket);
    };
    getData();
  }, []);

  const [allTicket, setAllTicket] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const allTickets = await getAllTicket();
      const OpenTicket = allTickets?.filter((tk: any) => tk.status === "open");
      setAllTicket(OpenTicket);
    };
    getData();
  }, []);

  if (!ticket) {
    return <Loading />;
  }

  return (
    <div className="view">
      {user?.foundUser?.roll === "admin" ? (
        <AllTickets ticket={allTicket} />
      ) : (
        <AllTickets ticket={ticket} />
      )}
    </div>
  );
};

export default OpenTickets;
