"use client";

import { useUserRollCategoryUpdateMutation } from "@/redux/features/user/userApi";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  selectedUser: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: {
    categoryID: string;
    type: string;
  }[];
};

export default function ChangeCustomerRoll({
  data,
  selectedUser,
  setIsOpen,
}: Props) {
  const [selectedRoll, setSelectedRoll] = useState<string>("assistant");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [userRollCategoryUpdate, { data: updateUser, error, isLoading }] =
    useUserRollCategoryUpdateMutation();

  const handleAssistantSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const obj = {
      id: selectedUser,
      roll: selectedRoll,
      assign_to: selectedCategory,
    };

    if (obj.assign_to === "" || obj.roll === "") {
      window.alert("Select Roll and Category");
    }
    await userRollCategoryUpdate(obj);

    setIsOpen(false);
  };

  return (
    <>
      <div className="w-1/2 mx-auto bg-white p-6 rounded shadow">
        <h1 className="pb-2 font-semibold text-lg">
          Change Roll & Assign Category
        </h1>

        <form action="">
          <label htmlFor="roll" className="text-base  font-medium">
            User Roll
          </label>
          <input
            disabled
            className=" bg-gray-200 capitalize w-full rounded outline-none py-2 px-2 border"
            type="text"
            readOnly
            value={"Assistant"}
          />

          {/* Assistant Assign Type */}
          <label htmlFor="roll" className="text-base  font-medium">
            Select Assistant Category
          </label>
          <select
            name="roll"
            id="roll"
            className=" capitalize w-full rounded outline-none py-2 px-2 border"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {data?.map((each) => (
              <option
                className="capitalize"
                key={each.categoryID}
                value={each.categoryID}
              >
                {each.type}
              </option>
            ))}
          </select>
          {/* <p className="text-red-500 mt-2 text-base">{errors}</p> */}

          <button
            onClick={handleAssistantSubmit}
            type="submit"
            className="w-full bg-orange-500 py-2 mt-4 rounded text-white font-medium text-base"
          >
            Create Assistant
          </button>
        </form>
      </div>
    </>
  );
}
