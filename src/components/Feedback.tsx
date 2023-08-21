import FeedbackForm from "./FeedbackForm";
import SupportReply from "./SupportReply";

type Props = {
  status: string;
};

export default function Feedback({ status }: Props) {
  return (
    <div className=" border border-orange-500 rounded-md p-2 h-[60vh] flex justify-between flex-col">
      <div className="w-full overflow-y-scroll  ">
        <h1 className="mb-4 text-lg text-orange-500 sticky  w-full top-0 bg-white font-medium">
          Problem Feedback
        </h1>

        {/* ----- */}
        <SupportReply />
      </div>

      <FeedbackForm status={status} />
    </div>
  );
}
