import { Url } from "./basic";
import { jwtToken } from "./jwtToken";
const token = jwtToken();
export const getAllSubject = (setAllUser: any) => {
  async function fetchData() {
    try {
      const response = await fetch(`${Url}/subject`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setAllUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
};
