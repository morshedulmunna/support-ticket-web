import { Url } from "./basic";
import { jwtToken } from "./jwtToken";

export const getAllTicket = async () => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${Url}/tickets`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof SyntaxError && error.message.includes("JSON")) {
      console.log("Error: Invalid JSON data");
    } else {
      console.log("Error:", error);
    }
  }
};

export const getUserTicket = async () => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${Url}/tickets/single_user_ticket`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof SyntaxError && error.message.includes("JSON")) {
      console.log("Error: Invalid JSON data");
    } else {
      console.log("Error:", error);
    }
  }
};
