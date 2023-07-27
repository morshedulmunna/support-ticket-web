"use client";

import TicketDetails from "@/components/TicketDetails";
import { useSingleUserOpenTicketQuery } from "@/redux/features/tickets/ticketApi";
import React, { type FC } from "react";

interface SingleOpenTicketProps {}

const SingleOpenTicket: FC<SingleOpenTicketProps> = ({}) => {
  const { data } = useSingleUserOpenTicketQuery();

  console.log(data);

  return (
    <React.Fragment>
      <TicketDetails id={""} />
    </React.Fragment>
  );
};
export default SingleOpenTicket;
