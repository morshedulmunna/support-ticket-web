import { useGetFeedbackQuery } from "@/redux/features/feedback/feedbackApi";
import { toast } from "react-toastify";
import FeedbackForm from "./FeedbackForm";
import SupportReply from "./SupportReply";

type Props = {
  status: string;
  tiket_id: string;
};

export default function Feedback({ status, tiket_id }: Props) {
  const { data, error, isLoading } = useGetFeedbackQuery<any>(tiket_id, {
    pollingInterval: 50,
  });

  if (error) {
    toast.error(error?.data?.message);
  }

  return (
    <div className=" border border-orange-500 rounded-md p-2 h-[60vh] flex justify-between flex-col">
      <div className="w-full overflow-y-scroll  ">
        <h1 className="mb-4 text-lg text-orange-500 sticky  w-full top-0 bg-white font-medium">
          Problem Feedback
        </h1>

        {/* ----- */}
        <SupportReply data={data} />
      </div>

      <FeedbackForm status={status} tiket_id={tiket_id} />
    </div>
  );
}
