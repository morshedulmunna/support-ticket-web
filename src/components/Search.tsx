"use client";

import { openCategoryForm } from "@/redux/features/category/categorySlice";
import { searchQuery } from "@/redux/features/search/searchSlice";
import React, { type FC } from "react";
import { BiListPlus } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";

interface SearchProps {
  level: string;
  category?: boolean;

  isOpen?: boolean;
}

const Search: FC<SearchProps> = ({ level, category, isOpen }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="flex justify-between gap-4 sm:items-center flex-col sm:flex-row w-full">
        <p className="font-semibold whitespace-nowrap">{level}</p>
        <div className="flex justify-end space-x-2 w-full lg:w-1/2">
          <div className=" relative ">
            {/* search */}
            <input
              onChange={(e) => dispatch(searchQuery(e.target.value))}
              type="search"
              name="search"
              className="border   py-1 outline-none focus:border-orange-500 rounded-md w-full px-2 pl-8 "
              placeholder="Search..."
            />
            <BsSearch className="absolute top-[9px] left-2" color="gray" />
          </div>
          {category ? (
            <button
              onClick={() => dispatch(openCategoryForm(true))}
              className="bg-orange-500 px-2 flex justify-center items-center text-white font-medium rounded text-xs"
            >
              <BiListPlus color="white" size={20} />
              <span>Create</span>
            </button>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Search;
