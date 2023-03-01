"use client";

import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  subject: string;
  details: string;
};

type Props = {};

const TicketUpdate = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const validData = {
      title: data.title,
      subject: data.subject,
      description: data.details,
    };

    console.log(validData);

    reset();
  };

  return (
    <div>
      {" "}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full space-y-2"
        action=""
      >
        <input
          {...register("title", { required: true })}
          className="rounded-md border px-2 py-2 text-sm"
          type="text"
          placeholder="Title of the tickets"
        />
        {errors.title && (
          <span className="text-xs text-red-500">Required*</span>
        )}

        <input
          {...register("subject", { required: true })}
          className="rounded-md border px-2 py-2 text-sm"
          type="text"
          placeholder="Subject"
        />
        {errors.subject && (
          <span className="text-xs text-red-500">Required*</span>
        )}

        <textarea
          {...register("details", { required: true })}
          className="rounded-md border px-2 py-2 text-sm"
          name="details"
          cols={30}
          rows={10}
          placeholder="Problem details"
        ></textarea>
        {errors.details && (
          <span className="text-xs text-red-500">Required*</span>
        )}

        <input
          className="cursor-pointer rounded-md bg-blue-500 px-2 py-2 font-bold text-white duration-300 hover:bg-blue-400"
          type="Submit"
          defaultValue={"Update Tickets"}
        />
      </form>
    </div>
  );
};

export default TicketUpdate;
