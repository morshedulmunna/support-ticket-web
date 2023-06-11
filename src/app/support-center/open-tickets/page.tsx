'use client';

import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Table from '@/components/Table';
import { useSingleUserTicketQuery } from '@/redux/features/tickets/ticketApi';

const OpenTickets = () => {
  const { data, isSuccess, isLoading, error, isError } =
    useSingleUserTicketQuery(undefined, { refetchOnFocus: true });

  const [errors, setError] = useState('');

  if (isLoading) {
    <Loading />;
  }

  if (isError) {
    setError(error?.data.message);
  }

  useEffect(() => {
    if (data?.length === 0) {
      setError('No Ticket Found.....');
    }
  }, []);

  return (
    <div className=" mt-5">
      <div className="flex justify-between gap-4 sm:items-center flex-col sm:flex-row">
        <p className="font-semibold whitespace-nowrap">
          All Open Tickets _______
        </p>
        <input
          type="search"
          className="border py-1 outline-none focus:border-orange-500 rounded-md w-full lg:w-1/2 px-3 pl-12 "
          placeholder="Search..."
        />
      </div>
      <Table data={data} />
      <p className="text-red-500 font-semibold mt-2">{errors}</p>
    </div>
  );
};

export default OpenTickets;
