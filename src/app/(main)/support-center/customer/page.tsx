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

  const makeAdminHandler = async (id: string, type: string) => {
    const validObject = {
      roll: "admin",
      subject: type,
    };
    const response = await createNewAdmin(id, validObject);
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
                      {subjects?.map((sub: any) => (
                        <option key={sub.id}>{sub.type}</option>
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

const subjects = [
  {
    id: 0,
    type: "tech",
  },
  {
    id: 1,
    type: "code",
  },
  {
    id: 2,
    type: "dev",
  },
];
