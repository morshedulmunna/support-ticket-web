"use client";

import Loading from "@/components/Loading";
import Search from "@/components/Search";
import Table from "@/components/Table";
import { useGetOpenTicketsQuery } from "@/redux/features/tickets/ticketApi";
import { toast } from "react-toastify";

const OpenTickets = () => {
  const { data, isLoading, error } = useGetOpenTicketsQuery<any>(undefined, {
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
      <div>
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
      </div>
    </>
  );
};

export default OpenTickets;
