"use client";

import CategoryList from "@/components/CategoryList";
import CreateCategoryForm from "@/components/CreateCategoryForm";
import Search from "@/components/Search";
import { useState } from "react";

type Props = {};

export default function Category({}: Props) {
  let isLoading = false;
  let errors = "No Category Found";

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <div>
        <Search level="List of Category _______" category />
        {!isOpen ? (
          <>
            {isLoading ? <p>Loading..........</p> : <CategoryList />}
            <p className="text-red-500 font-semibold mt-2">{errors}</p>
          </>
        ) : (
          <CreateCategoryForm />
        )}
      </div>
    </>
  );
}
