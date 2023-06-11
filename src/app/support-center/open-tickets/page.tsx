'use client';

import { useState } from 'react';
import Loading from '@/components/Loading';
import { useSingleUserTicketQuery } from '@/redux/api/apiSlice';

const OpenTickets = () => {
  const { data, isSuccess, isLoading, error, isError } =
    useSingleUserTicketQuery();

  const [errors, setError] = useState('');

  if (isLoading) {
    <Loading />;
  }

  if (isError) {
    setError(error?.data.message);
  }

  if (data?.length === 0) {
    setError('No Ticket Found');
  }

  return (
    <div className="">
      <p className="">All Open Tickets _______</p>
      {errors}

      {data?.map((each) => (
        <li>{each.title}</li>
      ))}
    </div>
  );
};

export default OpenTickets;
