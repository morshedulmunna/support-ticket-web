"use client";

import Search from "@/components/Search";
import Table from "@/components/Table";
import {
  useAdminGetAllTicketsQuery,
  useSingleUserOpenTicketQuery,
} from "@/redux/features/tickets/ticketApi";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OpenTickets = () => {
  const [errors, setError] = useState("");
  const [ticketData, setTicketData] = useState<any>([]);

  const {
    data: customerOpenTickets,
    isLoading,
    error,
  } = useSingleUserOpenTicketQuery(undefined, {
    refetchOnFocus: true,
  });
  const {
    data: adminOpenTickets,
    isLoading: _aIsLoading,
    error: _aError,
  } = useAdminGetAllTicketsQuery(undefined, {
    refetchOnFocus: true,
  });

  if (error || _aError) {
    setError("Something Wrong");
  }

  const roll = useSelector((state: RootState) => state.auth.user?.roll);

  useEffect(() => {
    if (roll === "admin") {
      setTicketData(adminOpenTickets);
    } else if (roll === "customer") {
      setTicketData(customerOpenTickets);
    } else {
      setError("No Ticket Found.....");
    }
  }, []);

  return (
    <>
      <Search level="    All Open Tickets _______" />
      {isLoading || _aIsLoading ? (
        <p>Loading..........</p>
      ) : (
        <Table data={ticketData} />
      )}
      <p className="text-red-500 font-semibold mt-2">{errors}</p>
    </>
  );
};

export default OpenTickets;
