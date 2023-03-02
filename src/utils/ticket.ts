import axios from "axios";
import { Url } from "./basic";
import { jwtToken } from "./jwtToken";

const token = jwtToken();

export const getAllTicket = async () => {
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

export const getSingleTicket = async (id: string) => {
  try {
    const response = await fetch(`${Url}/tickets/${id}`, {
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
export const UpdateSingleTicket = async (id: string, validObject: any) => {
  axios
    .patch(`${Url}/tickets/${id}`, validObject, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((result) => {
      return result;
    })
    .catch(async (err) => {
      return err;
    });
};
