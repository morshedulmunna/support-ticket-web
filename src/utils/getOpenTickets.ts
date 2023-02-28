import { useState } from "react";
import { Url } from "./basic";

const getOpenTicket = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ticket, setTicket] = useState<any>([]);

  fetch(`${Url}/tickets/open`)
    .then((response) => response.json())
    .then((data) => setTicket(data));

  return ticket;
};

export default getOpenTicket;
