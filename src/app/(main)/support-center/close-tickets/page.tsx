"use client";

import AllTickets from "@/app/components/AllTickets";
import { Url } from "@/utils/basic";
import React, { useEffect, useState } from "react";

const CloseTickets = () => {
  const [ticket, setTicket] = useState<any>([]);

  useEffect(() => {
    const fetchIssue = async () => {
      fetch(`${Url}/tickets/close`)
        .then((response) => response.json())
        .then((data) => setTicket(data));
    };
    fetchIssue();
  }, []);

  return (
    <div className="view">
      <AllTickets ticket={ticket} />
    </div>
  );
};

export default CloseTickets;
