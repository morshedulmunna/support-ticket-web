import { Url } from "@/utils/basic";
import { jwtToken } from "@/utils/jwtToken";
import { createFeedback } from "@/utils/sentPost";
import Tostify from "@/utils/Tostify";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {};

type Inputs = {
  feedback: string;
};

const token = jwtToken();

const SubmitFeedback = ({ ticket }: any) => {
  const { tiket_id, createDate, subject, status } = ticket;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const validData = {
      feedback: data.feedback,
    };
    reset();
    const res = await createFeedback(
      `${Url}/feedback/${tiket_id}`,
      validData,
      token
    );
    if (res) {
      toast.success("Feedback Submit Successfully");
    }
  };

  return (
    <Tostify>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("feedback", { required: true })}
          className="rounded-md outline-none focus:border-blue-200 w-full border px-2 py-2 text-sm"
          name="feedback"
          cols={30}
          rows={10}
          placeholder="type your feedback......."
        ></textarea>
        {errors.feedback && (
          <span className="text-xs text-red-500">Required*</span>
        )}

        {status === "open" ? (
          <button className="mt-2 mb-6 w-full cursor-pointer rounded bg-blue-500 py-2 font-medium text-white duration-300 hover:bg-blue-400">
            Send Feedback
          </button>
        ) : (
          <button className="btn btn-sm w-full" disabled>
            Send Feedback
          </button>
        )}
      </form>
    </Tostify>
  );
};

export default SubmitFeedback;
