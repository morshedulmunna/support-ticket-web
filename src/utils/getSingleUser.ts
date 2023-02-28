import axios from "axios";
import { useState } from "react";
import { Url } from "./basic";
import { jwtToken } from "./jwtToken";

const getSingleUser = (setUser: any) => {
  const token = jwtToken();

  async function fetchData() {
    try {
      const response = await fetch(`${Url}/users/single`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
};

export default getSingleUser;
