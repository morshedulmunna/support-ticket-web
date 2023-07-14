import TicketDetails from "@/components/TicketDetails";
import React, { type FC } from "react";

interface SingleOpenTicketProps {}

const SingleOpenTicket: FC<SingleOpenTicketProps> = ({}) => {
  return (
    <React.Fragment>
      <TicketDetails />
    </React.Fragment>
  );
};
export default SingleOpenTicket;
