import { useState } from "react";
import { Url } from "./basic";

const getOpenTicket = ({ setTicket }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  async function fetchData() {
    try {
      const response = await fetch(`${Url}/tickets/open`);
      const data = await response.json();
      setTicket(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
};

export default getOpenTicket;
