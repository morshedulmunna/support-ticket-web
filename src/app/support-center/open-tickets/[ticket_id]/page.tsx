"use client";

import TicketDetails from "@/components/TicketDetails";
import { useTicketDetailsByIdQuery } from "@/redux/features/tickets/ticketApi";
import { useParams } from "next/navigation";

import React, { type FC } from "react";
import Loading from "../loading";

interface SingleOpenTicketProps {}

const SingleOpenTicket: FC<SingleOpenTicketProps> = ({}) => {
  const param = useParams();
  const { data, isError, isLoading } = useTicketDetailsByIdQuery(
    param.ticket_id as any
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <TicketDetails data={data} />
    </React.Fragment>
  );
};
export default SingleOpenTicket;
