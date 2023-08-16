"use client";

import Search from "@/components/Search";
import Table from "@/components/Table";
import { useSingleUserCloseTicketQuery } from "@/redux/features/tickets/ticketApi";
import { RootState } from "@/redux/store";
import React, { useState, type FC } from "react";
import { useSelector } from "react-redux";

interface CloseTicketsProps {}

const CloseTickets: FC<CloseTicketsProps> = ({}) => {
  const [errors, setError] = useState("");
  const roll = useSelector((state: RootState) => state.auth.user?.roll);

  const {
    data: customerTicket,
    isLoading,
    error,
  } = useSingleUserCloseTicketQuery<any>(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <React.Fragment>
      <div>
        <Search level="    All Close Tickets _______" />
        {isLoading ? (
          <p>Loading..........</p>
        ) : roll === "admin" ? (
          <>
            {/* <Table data={adminOpenTickets} />
            <p className="text-red-500 font-semibold mt-2">
              {adminOpenTickets.length === 0 && "No Ticket Found"}
            </p> */}
          </>
        ) : roll === "customer" ? (
          <>
            <Table data={customerTicket} />
            <p className="text-red-500 font-semibold mt-2">
              {customerTicket.length === 0 && "No Ticket Found"}
            </p>
          </>
        ) : roll === "assistance" ? (
          <>
            {/* <Table data={adminOpenTickets} />
          <p className="text-red-500 font-semibold mt-2">
            {adminOpenTickets.length === 0 && "No Ticket Found"}
          </p> */}
          </>
        ) : null}
        <p className="text-red-500 font-semibold mt-2">{errors}</p>
      </div>
    </React.Fragment>
  );
};
export default CloseTickets;
