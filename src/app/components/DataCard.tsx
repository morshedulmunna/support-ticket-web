import React from "react";
import { GrDocumentDownload } from "react-icons/gr";
type Props = {};

const DataCard = (props: Props) => {
  return (
    <>
      <div className="mt-4 flex w-full items-center justify-center gap-x-5 rounded bg-blue-50 p-6 px-12 shadow">
        <GrDocumentDownload size={30} />
        <div className=" ">
          <h3 className="text-lg font-medium">200</h3>
          <p className="whitespace-nowrap md:text-sm">All tickets</p>
        </div>
      </div>
    </>
  );
};

export default DataCard;
