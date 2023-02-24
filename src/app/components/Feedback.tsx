import React from "react";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";

const Feedback = () => {
  return (
    <>
      <div className="mt-2 flex  items-center space-x-12 text-sm">
        <div className="flex items-center space-x-1">
          <FaUsers />
          <span>Munna</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <AiOutlineFieldTime />
          <span>52 mis ago</span>
        </div>
      </div>

      <p className="mt-2 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        eaque, culpa iste sunt beatae sit vel vitae deserunt quaerat eligendi?
      </p>

      {/* ==================== */}
      <form action="">
        <textarea
          className="mt-4 w-full rounded-md border"
          name=""
          id=""
          cols="30"
          rows="6"
        ></textarea>
        <input
          type="submit"
          value="Submit Feedback"
          className="mt-2 w-full cursor-pointer rounded bg-blue-200 py-2 duration-300 hover:bg-blue-300"
        />
      </form>
    </>
  );
};

export default Feedback;
