import React from "react";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";

const Feedback = () => {
  return (
    <>
      <div className="mt-6 flex   items-center justify-between space-x-12 border-b-[1px]  border-gray-100 pb-1 text-sm">
        <div className="flex items-center space-x-1   ">
          <FaUsers size={16} className="text-gray-4s00" />
          <span>Abdul Mamun</span>
        </div>
        <div className="flex items-center space-x-1 text-[12px] text-gray-500">
          <AiOutlineFieldTime size={16} />
          <span>52 mis ago</span>
        </div>
      </div>

      <p className="mt-2 mb-8 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        eaque, culpa iste sunt beatae sit vel vitae deserunt quaerat eligendi?
      </p>

      {/* ==================== */}
    </>
  );
};

export default Feedback;
