"use client";

import { Url } from "@/utils/basic";
import { jwtToken } from "@/utils/jwtToken";
import { createTicket } from "@/utils/sentPost";
import { getAllSubject } from "@/utils/subject.service";
import Tostify from "@/utils/Tostify";
import axios from "axios";
import React, { useEffect, useState } from "react";
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedOption, setSelectedOption] = useState<any>("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [subject, setSubject] = useState<any>([]);

  const subjectKey = subject.find((sub: { types: any; id: any }) => {
    if (sub.types === selectedOption) {
      return sub.id;
    }
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getAllSubject(setSubject);
  }, []);
  /**
   * Create tickets any customer
   */
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const validData = {
      title: data.title,
      subjectId: subjectKey?.id,
      description: data.details,
    };

    if (validData.subjectId === undefined) {
      return toast.error("Select Category");
    }

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

            <select
              className=" bg-white border py-2 rounded-md focus:outline-none select-primary w-full"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option>Select Category</option>
              {subject?.map((sub: any) => (
                <option key={sub.id}>{sub.types}</option>
              ))}
            </select>
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
