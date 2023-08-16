"use client";

import Search from "@/components/Search";
import Table from "@/components/Table";
import {
  useAdminGetAllTicketsQuery,
  useAssistanceOpenTicketQuery,
  useSingleUserOpenTicketQuery,
} from "@/redux/features/tickets/ticketApi";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const OpenTickets = () => {
  const [errors, setError] = useState("");
  const roll = useSelector((state: RootState) => state.auth.user?.roll);

  const {
    data: customerOpenTickets,
    isLoading,
    error,
  } = useSingleUserOpenTicketQuery<any>(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const {
    data: adminOpenTickets,
    isLoading: _aIsLoading,
    error: _aError,
  } = useAdminGetAllTicketsQuery<any>(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const {
    data: assistanceOpenTicketQuery,
    isLoading: _assistanceLoading,
    error: _assistanceError,
  } = useAssistanceOpenTicketQuery<any>(undefined, {
    refetchOnMountOrArgChange: true,
  });

  console.log(assistanceOpenTicketQuery);

  if (error || _aError) {
    toast.error(error?.data?.message || _aError?.data?.message);
  }

  return (
    <>
      <div>
        <Search level="    All Open Tickets _______" />
        {isLoading ? (
          <p>Loading..........</p>
        ) : roll === "admin" ? (
          <>
            <Table data={adminOpenTickets} />
            <p className="text-red-500 font-semibold mt-2">
              {adminOpenTickets?.length === 0 && "No Ticket Found"}
            </p>
          </>
        ) : roll === "customer" ? (
          <>
            <Table data={customerOpenTickets} />
            <p className="text-red-500 font-semibold mt-2">
              {customerOpenTickets?.length === 0 && "No Ticket Found"}
            </p>
          </>
        ) : roll === "assistance" ? (
          <>
            <Table data={assistanceOpenTicketQuery} />
            <p className="text-red-500 font-semibold mt-2">
              {assistanceOpenTicketQuery?.length === 0 && "No Ticket Found"}
            </p>
          </>
        ) : null}
        <p className="text-red-500 font-semibold mt-2">{errors}</p>
      </div>
    </>
  );
};

export default OpenTickets;
