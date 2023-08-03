"use client";

import Search from "@/components/Search";
import Table from "@/components/Table";
import { useSingleUserCloseTicketQuery } from "@/redux/features/tickets/ticketApi";
import { RootState } from "@/redux/store";
import React, { useEffect, useState, type FC } from "react";
import { useSelector } from "react-redux";

interface CloseTicketsProps {}

const CloseTickets: FC<CloseTicketsProps> = ({}) => {
  const [errors, setError] = useState("");
  const [ticketData, setTicketData] = useState<any>([]);

  const { data: customerTicket, isLoading } = useSingleUserCloseTicketQuery(
    undefined,
    { refetchOnFocus: true }
  );

  const roll = useSelector((state: RootState) => state.auth.user?.roll);

  useEffect(() => {
    if (ticketData?.length === 0) {
      setError("No Ticket Found.....");
    }

    switch (roll) {
      case "customer":
        setTicketData(customerTicket);
      default:
        setTicketData([]);
    }
  }, []);

  return (
    <React.Fragment>
      <div>
        <Search level="    All Close Tickets _______" />
        {isLoading ? <p>Loading..........</p> : <Table data={ticketData} />}
        <p className="text-red-500 font-semibold mt-2">{errors}</p>
      </div>
    </React.Fragment>
  );
};
export default CloseTickets;
