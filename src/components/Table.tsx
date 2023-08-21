import React, { type FC } from "react";
import TableBody from "./TableBody";

interface TableProps {
  data: any[];
}

const Table: FC<TableProps> = ({ data }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-2 py-4">
                      #
                    </th>
                    <th scope="col" className="px-2 py-4">
                      Subject
                    </th>
                    <th scope="col" className="px-2 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-2 py-4">
                      Tittle
                    </th>
                    <th scope="col" className="px-2 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((each) => (
                    <TableBody key={each.tiket_id} each={each} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Table;
