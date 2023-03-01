"use client";

import { getAllUsers } from "@/utils/getUsers";
import { ProtectedAuth } from "@/utils/ProtectedAuth";
import React, { useEffect, useState } from "react";

type Props = {};

const Customer = (props: Props) => {
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    getAllUsers(setUser);
  }, []);

  return (
    <div className="view">
      <table className="table-compact  table w-full">
        <thead className="sticky top-0">
          <tr>
            <th className=" text-sm font-medium capitalize">Customer ID</th>
            <th className=" text-sm font-medium capitalize">Email</th>
            <th className=" text-sm font-medium capitalize">Name</th>
            <th className=" text-sm font-medium capitalize">Roll</th>
          </tr>
        </thead>
        <tbody>
          {user.map((singleUser: { id: any }) => (
            <TBody key={singleUser.id} singleUser={singleUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProtectedAuth(Customer);

const TBody = ({ singleUser }: any) => {
  const { id, name, email, roll } = singleUser;
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{email}</td>
        <td>{name}</td>
        <td>{roll}</td>
      </tr>
    </>
  );
};
