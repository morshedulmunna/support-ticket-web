"use client";

import Search from "@/components/Search";
import Table from "@/components/Table";
import { useSingleUserOpenTicketQuery } from "@/redux/features/tickets/ticketApi";
import { useEffect, useState } from "react";

const OpenTickets = () => {
  const { data, isSuccess, isLoading, error, isError } =
    useSingleUserOpenTicketQuery(undefined, { refetchOnFocus: true });

  const [errors, setError] = useState("");

  if (error) {
    setError(error?.data.message);
  }

  useEffect(() => {
    if (data?.length === 0) {
      setError("No Ticket Found.....");
    }
  }, []);

  return (
    <>
      <Search level="    All Open Tickets _______" />
      {isLoading ? <p>Loading..........</p> : <Table data={data} />}
      <p className="text-red-500 font-semibold mt-2">{errors}</p>
    </>
  );
};

export default OpenTickets;
