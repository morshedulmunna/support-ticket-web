'use client';

import TableHeader from './TableHeader';

const AllTickets = ({ ticket, deleteTicketHandler }: any) => {
  return (
    <>
      <TableHeader ticket={ticket} deleteTicketHandler={deleteTicketHandler} />
    </>
  );
};

export default AllTickets;
