"use client";

import Loading from "@/components/Loading";
import Search from "@/components/Search";
import Table from "@/components/Table";
import { useGetCloseTicketsQuery } from "@/redux/features/tickets/ticketApi";

import { type FC } from "react";
import { toast } from "react-toastify";

interface CloseTicketsProps {}

const CloseTickets: FC<CloseTicketsProps> = ({}) => {
  const { data, isLoading, error } = useGetCloseTicketsQuery<any>(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    <Loading />;
  }

  if (error) {
    toast.error(error?.data?.message);
  }

  return (
    <>
      <Search level="    All Open Tickets _______" />
      {isLoading ? (
        <p>Loading..........</p>
      ) : (
        <>
          <Table data={data} />
          {data?.length === 0 && (
            <p className="text-red-500 font-medium">No Ticket found</p>
          )}
        </>
      )}
    </>
  );
};
export default CloseTickets;
