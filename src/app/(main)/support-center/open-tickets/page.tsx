"use client";
import AllTickets from "@/app/components/AllTickets";
import Loading from "@/app/components/Loading";
import getOpenTicket from "@/utils/getOpenTickets";

const OpenTickets = () => {
  const ticket = getOpenTicket();

  if (!ticket) {
    return <Loading />;
  }

  return (
    <div className="view">
      <AllTickets ticket={ticket} />
    </div>
  );
};

export default OpenTickets;
