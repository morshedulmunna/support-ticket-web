import { formattedDate } from "@/utils/formatedDate";
import Tostify from "@/utils/Tostify";

const TicketInfo = ({ ticket, markToResolveHandler }: any) => {
  const { tiket_id, createDate, subject, status } = ticket;

  const Date = formattedDate(createDate);

  return (
    <Tostify>
      <div className="mb-12 w-full  lg:w-[30%]">
        <div className="flex  items-center justify-center space-x-2 ">
          {status === "open" ? (
            <button
              className="btn btn-sm border-none hover:bg-blue-400 bg-blue-500 py-2 font-medium text-white cursor-pointer px-2"
              onClick={() => markToResolveHandler()}
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

export default TicketInfo;
