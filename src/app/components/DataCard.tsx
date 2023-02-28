import React from "react";
import { GrDocumentDownload } from "react-icons/gr";
type Props = {
  label: string;
  count: number;
};

const DataCard = ({ label, count }: Props) => {
  return (
    <>
      <div className="mt-4 flex w-full items-center justify-center gap-x-5 rounded bg-blue-50 bg-opacity-10 p-6 px-12 shadow">
        <GrDocumentDownload size={30} />
        <div className=" ">
          <h3 className="text-lg font-medium">{count}</h3>
          <p className="whitespace-nowrap md:text-sm">{label}</p>
        </div>
      </div>
    </>
  );
};

export default DataCard;
