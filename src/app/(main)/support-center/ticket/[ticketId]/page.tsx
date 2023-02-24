import Feedback from "@/app/components/Feedback";
import SubmitFeedback from "@/app/components/SubmitFeedback";
import React from "react";

const Tickets = () => {
  return (
    <div className="view">
      <div className="flex flex-col-reverse gap-x-10 lg:flex-row ">
        <div className=" h-[85vh]  w-full overflow-y-auto pr-4 lg:w-[70%]">
          <h2 className="mb-6 text-[25px] text-blue-500 ">Ticket Details</h2>
          <h4 className="mb-4 text-[20px] ">Needs help for payment system</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis natus velit magnam neque molestiae nulla facilis
            possimus placeat, eligendi corrupti consequuntur, nobis delectus
            cupiditate id corporis vel! Saepe, fugiat totam.
          </p>

          {/* Feedback */}
          <div className="mt-12 ">
            <p className="text-[20px] text-blue-500">Feedback</p>
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
          </div>
          {/* Submit feedback form */}
          <SubmitFeedback />
        </div>

        <TicketInfo />
      </div>
    </div>
  );
};

export default Tickets;

const TicketInfo = () => {
  return (
    <>
      <div className="mb-12 w-full  lg:w-[30%]">
        <div className="flex cursor-pointer items-center justify-center space-x-2 rounded bg-blue-500 py-2 font-medium text-white ">
          <button>Mark to Resolved</button>
        </div>

        <div className="mt-12 ">
          <p className="text-md mb-1 font-medium text-blue-500">Ticket ID</p>
          <p className="text-sm text-gray-500"> #TK43DGDSD </p>
        </div>
        <div className="mt-12 ">
          <p className="text-md mb-1 font-medium text-blue-500">Date & Time</p>
          <p className="text-sm text-gray-500"> 2 days ago</p>
        </div>
        <div className="mt-12 ">
          <p className="text-md mb-1 font-medium text-blue-500">Subject</p>
          <p className="text-sm text-gray-500"> software/internet </p>
        </div>
        <div className="mt-12 ">
          <p className="text-md mb-1 font-medium text-blue-500">Raised by</p>
          <p className="text-sm text-gray-500"> Morshedul Munna</p>
        </div>
      </div>
    </>
  );
};
