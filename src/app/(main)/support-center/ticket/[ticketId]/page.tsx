import React from "react";
import Feedback from "@/app/components/Feedback";
import SubmitFeedback from "@/app/components/SubmitFeedback";
import { Url } from "@/utils/basic";
import { formattedDate } from "@/utils/formatedDate";
import { CgCloseR } from "react-icons/cg";
import TicketUpdate from "@/app/components/TicketUpdate";

type PageProps = {
  params: {
    ticketId: string;
  };
};

// Get Single Ticket Data
const getSingleTicket = async (id: string) => {
  const res = await fetch(`${Url}/tickets/${id}`);
  const ticket = await res.json();
  return ticket;
};

const Tickets = async ({ params: { ticketId } }: PageProps) => {
  const ticket = await getSingleTicket(ticketId);

  console.log(ticket);

  return (
    <div className="view">
      <div className="flex flex-col-reverse gap-x-10 lg:flex-row ">
        <div className=" h-[85vh]  w-full overflow-y-auto pr-4 lg:w-[70%]">
          <div className="mb-6 flex justify-between">
            <div>
              <h2 className=" text-[25px] text-blue-500 ">Ticket Details</h2>
              <p className="text-xm text-gray-400">Ticket Id: : #{ticketId}</p>
            </div>

            {/* Modal Part */}
            <div>
              {/* Modal Button */}
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
              >
                Updated Ticket
              </label>

              {/* Modal body */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="bg-blue-500 cursor-pointer hover:bg-blue-400 duration-300 text-white absolute right-2 top-2 bg-b"
                  >
                    <CgCloseR size={25} />
                  </label>

                  {/* Modal Form */}
                  <div className="mt-4 p-6">
                    <TicketUpdate />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="mb-4 text-[20px] "> {ticket.title}</h4>
          <p className="text-sm">{ticket.description}</p>

          {/* Feedback */}
          <div className="mt-12 ">
            <p className="text-[20px] text-blue-500">Feedback</p>
            <Feedback />
            <Feedback />
          </div>
          {/* Submit feedback form */}
          <SubmitFeedback />
        </div>

        <TicketInfo ticket={ticket} />
      </div>
    </div>
  );
};

export default Tickets;

const TicketInfo = ({ ticket }: any) => {
  console.log(ticket);

  const { tiket_id, creaateDate, subject, status } = ticket;

  const Date = formattedDate(creaateDate);

  return (
    <>
      <div className="mb-12 w-full  lg:w-[30%]">
        <div className="flex cursor-pointer items-center justify-center space-x-2 rounded bg-blue-500 py-2 font-medium text-white ">
          <button>Mark to Resolved</button>
        </div>

        <div className="mt-12 ">
          <p className="text-md mb-1 font-medium text-blue-500">Ticket ID</p>
          <p className="text-sm text-gray-500"> #{tiket_id} </p>
        </div>
        <div className="mt-12 ">
          <p className="text-md mb-1 font-medium text-blue-500">Created Date</p>
          <p className="text-sm text-gray-500"> {Date} </p>
        </div>
        <div className="mt-12 ">
          <p className="text-md mb-1 font-medium text-blue-500">Status</p>
          <p className="text-sm text-gray-500"> {status} </p>
        </div>
        <div className="mt-12 ">
          <p className="text-md mb-1 font-medium text-blue-500">Subject</p>
          <p className="text-sm text-gray-500"> {subject} </p>
        </div>
        <div className="mt-12 ">
          <p className="text-md mb-1 font-medium text-blue-500">Raised by</p>
          <p className="text-sm text-gray-500"> Morshedul Munna</p>
        </div>
      </div>
    </>
  );
};
