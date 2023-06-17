'use client';

import Search from '@/components/Search';
import Table from '@/components/Table';
import { useSingleUserCloseTicketQuery } from '@/redux/features/tickets/ticketApi';
import React, { useEffect, type FC, useState } from 'react';

interface CloseTicketsProps {}

const CloseTickets: FC<CloseTicketsProps> = ({}) => {
  const { data, isSuccess, isLoading, error, isError } =
    useSingleUserCloseTicketQuery(undefined, { refetchOnFocus: true });

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
    <React.Fragment>
      <div className=" mt-5">
        <Search level="    All Open Tickets _______" />
        {isLoading ? <p>Loading..........</p> : <Table data={data} />}
        {/* <p className="text-red-500 font-semibold mt-2">{errors}</p> */}
      </div>
    </React.Fragment>
  );
};
export default CloseTickets;
