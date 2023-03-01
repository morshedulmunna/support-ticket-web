"use client";

import { Url } from "@/utils/basic";
import { jwtToken } from "@/utils/jwtToken";
import { createTicket } from "@/utils/sentPost";
import Tostify from "@/utils/Tostify";
import axios from "axios";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  title: string;
  subject: string;
  details: string;
};

const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<Inputs>();

  /**
   * Create tickets any customer
   */
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const validData = {
      title: data.title,
      subject: data.subject,
      description: data.details,
    };

    const token = jwtToken();
    const response = await createTicket(`${Url}/tickets/`, validData, token);
    if (response) {
      toast.success("Ticket Create Successfully ");
    }
    reset();
  };

  return (
    <Tostify>
      <div className="view">
        <p className="mb-6 text-lg">Add new Task</p>
        <div>
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
              defaultValue={"Submit Tickets"}
            />
          </form>
        </div>
      </div>
    </Tostify>
  );
};

export default page;
