import { useTicketUpdateByIDMutation } from "@/redux/features/tickets/ticketApi";
import { RootState } from "@/redux/store";
import { formatDate } from "@/utils";
import { useSelector } from "react-redux";
import Feedback from "./Feedback";

type Props = {
  param: any;
  data: {
    createDate: string;
    description: string;
    feedback: any[];
    status: string;
    subject: string;
    tiket_id: string;
    title: string;
    updatedDate: string;
    userId: string;
  };
};

export default function TicketDetails({
  data: { title, createDate, description, status, subject, tiket_id },
  param,
}: Props) {
  const [ticketUpdateByID, {}] = useTicketUpdateByIDMutation();
  const user = useSelector((state: RootState) => state.auth);

  return (
    <div className="">
      {/*  */}
      <div className="grid grid-cols-12  gap-1 mb-12 ">
        <div className="col-span-9 p-2 rounded  ">
          <p className="text-xl font-medium">{title}</p>
          <span className="text-xs italic text-gray-300">
            Ticket Id: {tiket_id}
          </span>
          <p className="text-sm py-2">{description}</p>
        </div>
        <div className="col-span-3 mt-4 rounded ">
          {user.user?.roll !== "customer" ? (
            <button
              disabled={status === "close"}
              onClick={() => ticketUpdateByID(param?.ticket_id)}
              className={`w-full py-1 text-white rounded duration-150 ease-linear ${
                status === "close"
                  ? "bg-gray-400"
                  : "bg-orange-500  hover:bg-orange-400"
              } `}
            >
              Resolve
            </button>
          ) : null}

          <div className="p-2 text-orange-500/80">
            <p className="capitalize">
              <span className="font-medium">Status : </span>
              <span className="text-base">{status}</span>
            </p>
            <p className="capitalize">
              <span className="font-medium">Subject : </span>
              <span className="text-base">{subject}</span>
            </p>
            <p className="capitalize">
              <span className="text-base">{formatDate(createDate)}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Item */}
      <Feedback status={status} tiket_id={tiket_id} />
    </div>
  );
}
