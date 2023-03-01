"use client";

import { Url } from "./basic";
import { jwtToken } from "./jwtToken";

// Get Single User
export const getSingleUser = (setUser: any) => {
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

// Get All Users
export const getAllUsers = (setAllUser: any) => {
  const token = jwtToken();

  async function fetchData() {
    try {
      const response = await fetch(`${Url}/users/all`, {
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
