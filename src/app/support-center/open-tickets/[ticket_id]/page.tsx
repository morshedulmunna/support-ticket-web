"use client";

import TicketDetails from "@/components/TicketDetails";
import { useTicketDetailsByIdQuery } from "@/redux/features/tickets/ticketApi";
import { useParams } from "next/navigation";

import React, { type FC } from "react";
import { toast } from "react-toastify";
import Loading from "../loading";

interface SingleOpenTicketProps {}

const SingleOpenTicket: FC<SingleOpenTicketProps> = ({}) => {
  const param = useParams();
  const { data, error, isLoading } = useTicketDetailsByIdQuery<any>(
    param.ticket_id as any
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error(error?.data?.message);
  }
  return (
    <React.Fragment>
      <TicketDetails param={param} data={data} />
    </React.Fragment>
  );
};
export default SingleOpenTicket;
