"use client";

import axios from "axios";
import { Url } from "./basic";
import { jwtToken } from "./jwtToken";

const token = jwtToken();
// Get Single User
export const getSingleUser = (setUser: any) => {
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

// Make Customer to Admin
export const UpdateSingleTicket = async (id: string, validObject: any) => {
  axios
    .patch(`${Url}/users/${id}`, validObject, {
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
