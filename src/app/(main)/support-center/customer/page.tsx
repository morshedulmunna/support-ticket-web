"use client";

import { createNewAdmin, getAllUsers } from "@/utils/getUsers";
import { ProtectedAuth } from "@/utils/ProtectedAuth";
import { getAllSubject } from "@/utils/subject.service";
import React, { useEffect, useState } from "react";

type Props = {};

const Customer = (props: Props) => {
  const [adminMakeResponse, setAdminMakeResponse] = useState<any>();

  // Fetching All User. Admin can only fetch the user data
  const [user, setUser] = useState<any>([]);
  useEffect(() => {
    getAllUsers(setUser);
  }, [adminMakeResponse]);

  // Create Admin

  const makeAdminHandler = (id: string, type: string) => {
    const validObject = {
      roll: "admin",
      type: type,
    };
    const response = createNewAdmin(id, validObject);
    console.log(response);
    setAdminMakeResponse(response);
  };

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
            <TBody
              key={singleUser.id}
              singleUser={singleUser}
              makeAdminHandler={makeAdminHandler}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProtectedAuth(Customer);

const TBody = ({ singleUser, makeAdminHandler }: any) => {
  const { id, name, email, roll } = singleUser;

  const [selectedOption, setSelectedOption] = useState<any>("");
  const [subject, setSubject] = useState<any>([]);
  useEffect(() => {
    getAllSubject(setSubject);
  }, []);

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
                    <select
                      className=" bg-white border py-2 rounded-md focus:outline-none select-primary w-full max-w-xs"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      {subject?.map((sub: any) => (
                        <option key={sub.id}>{sub.types}</option>
                      ))}
                    </select>
                    <a
                      href="#"
                      onClick={() => makeAdminHandler(id, selectedOption)}
                      className="btn btn-sm text-white capitalize"
                    >
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
