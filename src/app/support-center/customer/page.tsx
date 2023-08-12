"use client";

import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";
import { useGettingUserQuery } from "@/redux/features/user/userApi";
import { useEffect } from "react";

type Props = {};

export default function Customer({}: Props) {
  let errors = "";

  const { data, isLoading, error } = useGettingUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (data?.length === 0) {
      errors = "No Customer Found";
    }
  }, []);

  return (
    <div>
      <Search level="List of Customer _______" />
      {isLoading ? (
        <p>Loading..........</p>
      ) : (
        <CategoryList user={data} customer />
      )}
      <p className="text-red-500 font-semibold mt-2">{errors}</p>
    </div>
  );
}
