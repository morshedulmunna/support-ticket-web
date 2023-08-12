"use client";

import { useCategoryCrateMutation } from "@/redux/features/category/categoryApi";
import { useEffect, useState } from "react";
import { Dots } from "react-activity";
import { toast } from "react-toastify";

type Props = {
  refetch: () => void;
};

export default function CreateCategoryForm({ refetch }: Props) {
  const [categoryType, setCategoryType] = useState<string>("");
  const [categoryCrate, { error, isLoading, isSuccess }] =
    useCategoryCrateMutation();

  let content;

  const handleCreateType = async (e: any) => {
    e.preventDefault();
    await categoryCrate({ type: categoryType.toLowerCase() });
    setCategoryType("");
    refetch();
  };

  useEffect(() => {
    if (error) {
      toast.error("Something Wrong!");
      console.log(error);
    }

    if (isLoading) {
      content = <Dots />;
    }

    if (isSuccess) {
      toast.success(` ${categoryType} Create Successfully! `);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="mt-4">
        <form action="">
          <div className="mb-4">
            <label htmlFor="category" className="font-[400]">
              Category
            </label>
            <input
              onChange={(e) => setCategoryType(e.target.value)}
              type="text"
              id="category"
              value={categoryType}
              className="border w-full py-2 mt-1 rounded px-1 outline-none text-sm"
              placeholder="Type category name"
            />
          </div>

          {/* Select user List */}
          <div className="">
            {/* <div className="w-full">
              <Selected />
            </div> */}

            <button
              onClick={handleCreateType}
              className="mt-4 flex bg-orange-500 px-4 py-1 rounded text-white font-serif hover:bg-orange-500/80 duration-150 ease-linear"
              type="submit"
            >
              {isLoading ? content : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
