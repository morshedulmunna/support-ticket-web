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
        {roll == "admin" ? (
          <td>
            <button className="btn btn-xs  capitalize" disabled>
              {roll}
            </button>
          </td>
        ) : (
          <td>
            <button className="btn btn-xs capitalize">
              <a href="#my-modal-2">{roll}</a>
            </button>

            <div>
              <div className="modal" id="my-modal-2">
                <div className="modal-box">
                  <div className="modal-action flex justify-center items-center">
                    <select className=" bg-white border py-2 rounded-md focus:outline-none select-primary w-full max-w-xs">
                      <option disabled selected>
                        Select Admin Department
                      </option>
                      <option>Game of Thrones</option>
                      <option>Lost</option>
                      <option>Breaking Bad</option>
                      <option>Walking Dead</option>
                    </select>
                    <a href="#" className="btn btn-sm text-white capitalize">
                      Make Admin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </td>
        )}
      </tr>
    </>
  );
};
