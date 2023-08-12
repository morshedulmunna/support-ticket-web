"use client";

import Search from "@/components/Search";
import Table from "@/components/Table";
import {
  useAdminGetAllTicketsQuery,
  useSingleUserOpenTicketQuery,
} from "@/redux/features/tickets/ticketApi";
import { useEffect, useState } from "react";

const OpenTickets = () => {
  const [errors, setError] = useState("");

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

  useEffect(() => {
    if (adminOpenTickets?.length === 0 || customerOpenTickets?.length === 0) {
      setError("No Ticket Found.....");
    }
  }, []);

  return (
    <>
      <div>
        <Search level="    All Open Tickets _______" />
        {isLoading ? (
          <p>Loading..........</p>
        ) : (
          <Table data={adminOpenTickets || customerOpenTickets} />
        )}
        <p className="text-red-500 font-semibold mt-2">{errors}</p>
      </div>
    </>
  );
};

export default OpenTickets;
