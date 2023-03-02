import { usePathname } from "next/navigation";
import React from "react";
import TableBody from "./TableBody";

const TableHeader = ({ ticket, deleteTicketHandler }: any) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`lg:overflow-x-none mb-[12] ${
          pathname === "/support-center" ? "h-[65vh]" : "h-[85vh]"
        }  overflow-x-auto overflow-y-auto`}
      >
        <table className="table-compact  table w-full">
          <thead className="sticky top-0">
            <tr>
              <th className=" text-sm font-medium capitalize">Ticket ID</th>
              <th className=" text-sm font-medium capitalize">Title</th>
              <th className=" text-sm font-medium capitalize">Date</th>
              <th className=" text-sm font-medium capitalize">Subject</th>
              <th className=" text-sm font-medium capitalize">Status</th>
              <th className=" text-sm font-medium capitalize">Details</th>
              <th className=" text-sm font-medium capitalize"></th>
            </tr>
          </thead>
          <tbody>
            {ticket?.map((item: any) => (
              <TableBody
                item={item}
                key={item.tiket_id}
                deleteTicketHandler={deleteTicketHandler}
              />
            ))}
          </tbody>
        </table>

        {ticket.length === 0 && (
          <p className="mt-4 text-red-500">No Tickets Found.......</p>
        )}
      </div>
    </>
  );
};

export default TableHeader;
