'use client';

import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Table from '@/components/Table';
import { useSingleUserOpenTicketQuery } from '@/redux/features/tickets/ticketApi';
import Search from '@/components/Search';

const OpenTickets = () => {
  const { data, isSuccess, isLoading, error, isError } =
    useSingleUserOpenTicketQuery(undefined, { refetchOnFocus: true });

  const [errors, setError] = useState('');

  if (error) {
    setError(error?.data.message);
  }

  useEffect(() => {
    if (data?.length === 0) {
      setError('No Ticket Found.....');
    }
  }, []);

  return (
    <div className=" mt-5">
      <Search level="    All Open Tickets _______" />
      {isLoading ? <p>Loading..........</p> : <Table data={data} />}
      <p className="text-red-500 font-semibold mt-2">{errors}</p>
    </div>
  );
};

export default OpenTickets;
