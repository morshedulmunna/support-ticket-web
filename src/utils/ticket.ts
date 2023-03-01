import { Url } from "./basic";
import { jwtToken } from "./jwtToken";

export const getAllTicket = (setTicket: any) => {
  const token = jwtToken();

  async function fetchData() {
    try {
      const response = await fetch(`${Url}/tickets/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setTicket(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
};
