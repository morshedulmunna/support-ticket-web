"use client";

import TicketDetails from "@/components/TicketDetails";
import { useTicketDetailsByIdQuery } from "@/redux/features/tickets/ticketApi";
import { useParams } from "next/navigation";

import Loading from "@/components/Loading";
import { useGetSearchByTicketsMutation } from "@/redux/features/search/searchApi";
import { RootState } from "@/redux/store";
import React, { type FC } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface SingleOpenTicketProps {}

const SingleOpenTicket: FC<SingleOpenTicketProps> = ({}) => {
  const param = useParams();
  const { data, error, isLoading } = useTicketDetailsByIdQuery<any>(
    param.ticket_id as any
  );

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  const [getSearchByTickets, { data: searchData }] =
    useGetSearchByTicketsMutation();

  // console.log(searchData);

  // getSearchByTickets(searchQuery);

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
