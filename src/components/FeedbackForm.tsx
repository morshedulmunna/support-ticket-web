"use client";
import { useFeedBackPostMutation } from "@/redux/features/feedback/feedbackApi";
import { useState } from "react";
import Loading from "./Loading";
type Props = {
  status: string;
  tiket_id: string;
};

export default function FeedbackForm({ status, tiket_id }: Props) {
  const [feedback, setFeedback] = useState("");
  const [feedBackPost, { error, data, isLoading }] = useFeedBackPostMutation();

  const handleFeedbackForm = async (e: any) => {
    e.preventDefault();

    //TODO=> do now pass id and feedback

    await feedBackPost({
      tiket_id,
      body: {
        feedback,
      },
    });
    setFeedback("");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form action="">
      <textarea
        disabled={status === "close"}
        value={feedback}
        name="feedback"
        onChange={(e) => setFeedback(e.target.value)}
        cols={30}
        rows={8}
        className="border resize-none rounded outline-none text-sm p-2 w-full"
        placeholder="Reply here...."
      ></textarea>
      <div className="flex justify-end items-center">
        <button
          disabled={status === "close"}
          onClick={handleFeedbackForm}
          className={`py-1 px-12 text-white rounded duration-150 ease-linear ${
            status === "close"
              ? "bg-gray-400"
              : "bg-orange-500  hover:bg-orange-400"
          } `}
        >
          Message
        </button>
      </div>
    </form>
  );
}
