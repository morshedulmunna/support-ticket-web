'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { logOut } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import Loading from './Loading';

const Navbar = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const dispatch = useDispatch();
  const router = useRouter();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`sticky top-0 left-0 w-full transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="bg-white shadow-sm z-30">
        <div className=" containers mx-auto relative  duration-300 ease-in-out flex items-center justify-between">
          <div className=" flex  items-center  justify-start space-x-6   py-4">
            <div className="duration-300 mr-2 hover:text-orange-500">
              <Link href={'/'}>
                <Logo />
              </Link>
            </div>
          </div>
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

                  <div className=" z-40 h-20 absolute top-0 w-full hidden group-hover:block items-start">
                    <div className="top-12 bg-white  mt-12 flex flex-col shadow p-2 py-4 space-y-3 ">
                      <button>Profile</button>
                      <button
                        onClick={() => {
                          dispatch(logOut());
                          router.push('/login');
                        }}
                        className=" bg-red-500 py-1 rounded-md font-semibold text-white">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link
                className="rounded bg-orange-500 px-6 py-2 font-medium text-white whitespace-nowrap text-sm duration-300 hover:bg-orange-400  "
                href={'/login'}>
                Sign in
              </Link>
            )}

            <button
              onClick={() => setToggle(!toggle)}
              className="lg:hidden ml-6">
              <FaBars color="black" size={25} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
