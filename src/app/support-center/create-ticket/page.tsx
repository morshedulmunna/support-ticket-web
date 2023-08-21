"use client";

import Loading from "@/components/Loading";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import { useTicketCreateMutation } from "@/redux/features/tickets/ticketApi";
import { useCallback } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  title: string;

  categoryID: string;
  details: string;
};

const CreateTicket = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [ticketCreate, { isLoading, isSuccess, error: ticketError }] =
    useTicketCreateMutation<any>();

  const { data, error } = useGetAllCategoryQuery<any>(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (data) => {
    const validData = {
      title: data.title,
      categoryID: data.categoryID,
      description: data.details,
    };

    if (validData.categoryID === "") {
      return toast("Please select a Category");
    }

    await ticketCreate(validData);

    toast.success(`Ticket Create Successfully!`);

    reset();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (ticketError) {
    toast.error(ticketError?.data?.message);
  }

  if (error) {
    toast.error(error?.data?.message);
  }

  return (
    <>
      <p className="mb-6 text-lg font-semibold">Create New Ticket</p>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full space-y-2"
          action=""
        >
          <input
            {...register("title", { required: true })}
            className="rounded-md border focus:border-orange-500 outline-none px-2 py-2 text-sm"
            type="text"
            placeholder="Title of the tickets"
          />
          {errors.title && (
            <span className="text-xs text-red-500">Required*</span>
          )}

          <select
            {...register("categoryID")}
            className=" bg-white border py-2 rounded-md focus:outline-none focus:border-orange-500 select-primary w-full"
          >
            <option value="">Select Category</option>
            {data?.map((sub: any) => (
              <option key={sub.categoryID} value={sub.categoryID}>
                {sub.type}
              </option>
            ))}
          </select>
          {errors.categoryID && (
            <span className="text-xs text-red-500">Required*</span>
          )}

          <textarea
            {...register("details", { required: true })}
            className="rounded-md border px-2 py-2 outline-none focus:border-orange-500 text-sm"
            name="details"
            cols={30}
            rows={10}
            placeholder="Problem details"
          ></textarea>
          {errors.details && (
            <span className="text-xs text-red-500">Required*</span>
          )}

          <input
            className="cursor-pointer rounded-md bg-orange-500 px-2 py-2 font-bold text-white duration-300 hover:bg-orange-400"
            type="Submit"
            defaultValue={"Submit Tickets"}
          />
        </form>
      </div>
    </>
  );
};

export default CreateTicket;
