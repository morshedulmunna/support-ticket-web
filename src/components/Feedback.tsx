import FeedbackForm from "./FeedbackForm";
import SupportReply from "./SupportReply";
import UserReply from "./UserReply";

type Props = {};

export default function Feedback({}: Props) {
  return (
    <div className=" border border-orange-500 rounded-md p-2 h-[60vh] flex justify-between flex-col">
      <div className="w-full overflow-y-scroll  ">
        <h1 className="mb-4 text-lg text-orange-500 sticky  w-full top-0 font-medium">
          Problem Feedback
        </h1>

        {/* ----- */}
        <UserReply />
        <SupportReply />
      </div>

      <FeedbackForm />
    </div>
  );
}
