import React from "react";
import { FaUsers } from "react-icons/fa";
import Feedback from "~/app/components/Feedback";

const Tickets = () => {
  return (
    <div className="view">
      <div className="flex flex-col-reverse gap-x-6 lg:flex-row">
        <div className=" w-full lg:w-[70%]">
          <h2 className="mb-6 text-[25px] ">Ticket Details</h2>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis natus velit magnam neque molestiae nulla facilis
            possimus placeat, eligendi corrupti consequuntur, nobis delectus
            cupiditate id corporis vel! Saepe, fugiat totam.
          </p>

          {/* Feedback */}
          <div className="mt-12">
            <p className="text-[20px]">Feedback</p>
            <Feedback />
          </div>
        </div>
        <div className="mb-12 w-full  lg:w-[30%]">
          <div className="flex items-center justify-center space-x-2 ">
            <input type="checkbox" id="check" />
            <label htmlFor="check"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
