'use client';

import React, { useState, type FC } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchProps {
  level: string;
}

const Search: FC<SearchProps> = ({ level }) => {
  const [search, setSearch] = useState<string>('');
  console.log(search);

  return (
    <React.Fragment>
      <div className="flex justify-between gap-4 sm:items-center flex-col sm:flex-row w-full">
        <p className="font-semibold whitespace-nowrap">{level}</p>
        <div className="w-full lg:w-1/2 relative ">
          {/* search */}
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name="search"
            className="border   py-1 outline-none focus:border-orange-500 rounded-md w-full px-2 pl-8 "
            placeholder="Search..."
          />
          <BsSearch className="absolute top-[9px] left-2" color="gray" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Search;
