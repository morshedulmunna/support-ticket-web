"use client";

import React, { useEffect, useState } from "react";
import Feedback from "@/app/components/Feedback";
import SubmitFeedback from "@/app/components/SubmitFeedback";
import { formattedDate } from "@/utils/formatedDate";
import { CgCloseR } from "react-icons/cg";
import TicketUpdate from "@/app/components/TicketUpdate";
import { getSingleTicket, UpdateSingleTicket } from "@/utils/ticket";
import Tostify from "@/utils/Tostify";
import { toast } from "react-toastify";

type PageProps = {
  params: {
    ticketId: string;
  };
};

// Get Single Ticket Data

const Tickets = ({ params: { ticketId } }: PageProps) => {
  const [ticket, setTicket] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const tickets = await getSingleTicket(ticketId);
      setTicket(tickets);
    };
    getData();
  }, [ticketId]);

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

              {ticket.status === "open" ? (
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
                >
                  Updated Ticket
                </label>
              ) : (
                <button className="btn btn-sm" disabled>
                  Update Ticket
                </button>
              )}

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
                    <TicketUpdate ticket={ticket} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="mb-4 text-[20px] "> {ticket?.title}</h4>
          <p className="text-sm">{ticket?.description}</p>

          {/* Feedback */}
          <div className="mt-12 ">
            <p className="text-[20px] text-blue-500">Feedback</p>
            <Feedback />
            <Feedback />
          </div>
          {/* Submit feedback form */}
          <SubmitFeedback ticket={ticket} />
        </div>

        <TicketInfo ticket={ticket} />
      </div>
    </div>
  );
};

export default Tickets;

const TicketInfo = ({ ticket }: any) => {
  const { tiket_id, createDate, subject, status } = ticket;

  const Date = formattedDate(createDate);

  return (
    <Tostify>
      <div className="mb-12 w-full  lg:w-[30%]">
        <div className="flex  items-center justify-center space-x-2 ">
          {status === "open" ? (
            <button
              className="btn btn-sm border-none hover:bg-blue-400 bg-blue-500 py-2 font-medium text-white cursor-pointer px-2"
              onClick={() => {
                const validObject = {
                  status: "close",
                };
                UpdateSingleTicket(tiket_id, validObject);
                toast.success("Tickets Resolved");
              }}
            >
              Mark to Resolved
            </button>
          ) : (
            <button className="btn btn-sm" disabled>
              Mark to Resolved
            </button>
          )}
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
      </div>
    </Tostify>
  );
};
