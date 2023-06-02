'use client';

import { getSingleUser } from '@/utils/getUsers';
import { jwtToken } from '@/utils/jwtToken';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Logo from './Logo';

const Header = () => {
  const token = jwtToken();
  const router = useRouter();
  const [user, setUser] = useState<any>({});
  const [toggle, setToggle] = useState<Boolean>(false);

  useEffect(() => {
    getSingleUser(setUser);
  }, []);

  return (
    <div className="bg-white shadow-sm   sticky top-0 ">
      <div className=" containers mx-auto relative  duration-300 ease-in-out flex items-center justify-between">
        <ul className=" flex  items-center  justify-start space-x-6   py-4">
          <li className="duration-300 mr-2 hover:text-orange-500">
            <Link href={'/'}>
              <Logo />
            </Link>
          </li>
        </ul>
        <div className="flex  justify-end items-center ">
          <div className="hidden lg:block">
            <ul className="flex items-center">
              {['home', 'features', 'blog', 'support'].map((each) => (
                <li
                  key={each}
                  className="text-black font-medium hover:text-orange-500  duration-200 ease-linear py-2 px-6 rounded-md capitalize">
                  <Link href={`/#${each}`} scroll={false}>
                    {each}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile */}
          {toggle && (
            <ul className="absolute  rounded-md top-[73px] w-1/2 bg-white shadow text-center pb-6 pt-2">
              {['home', 'features', 'blog', 'support'].map((each) => (
                <li
                  key={each}
                  className="text-black font-medium hover:text-orange-500  duration-200 ease-linear py-2 px-6 rounded-md capitalize">
                  <Link href={`/#${each}`} scroll={false}>
                    {each}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {token ? (
            <>
              <Link
                href={'/support-center'}
                className="text-black font-semibold hover:text-orange-500 duration-200 ease-linear cursor-pointer px-4">
                Dashboard
              </Link>
              <div className="ml-6 relative group">
                <p className="bg-orange-500 px-4 py-1 rounded-md text-white cursor-pointer">
                  Settings
                </p>

                <div className="  h-20 absolute top-0 w-full hidden group-hover:block">
                  <div className="top-12 bg-white  mt-12 ">
                    <span>Profile</span>
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center">
                <p className=" whitespace-nowrap pr-6 font-semibold text-orange-500 ">
                  {user?.foundUser?.name}
                </p>
                <Link
                  className="rounded bg-orange-500 px-6 py-2 font-medium text-white  duration-300 hover:bg-orange-400  "
                  href={'/login'}
                  onClick={() => {
                    localStorage.removeItem('accessToken');
                    toast.info('See you soon');
                    router.push('/login');
                  }}>
                  Logout
                </Link>
              </div> */}
            </>
          ) : (
            <Link
              className="rounded bg-orange-500 px-6 py-2 font-medium text-white whitespace-nowrap text-xs duration-300 hover:bg-orange-400  "
              href={'/login'}>
              Get Stated
            </Link>
          )}

          <button onClick={() => setToggle(!toggle)} className="lg:hidden ml-6">
            <FaBars color="black" size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
