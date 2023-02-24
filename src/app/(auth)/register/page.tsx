import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { TbArrowLeftBar } from "react-icons/tb";

const Register = () => {
  return (
    <div className="containers">
      <Link href="/">
        <div className="group mt-12 flex cursor-pointer items-center space-x-4  hover:text-blue-500 hover:underline">
          <div className=" duration-700 group-hover:scale-x-150 ">
            <TbArrowLeftBar size={25} />
          </div>
          <p>Home</p>
        </div>
      </Link>

      <div className="mx-auto flex h-[80vh] max-w-[400px] items-center justify-center ">
        <div className="space-y-6 text-center">
          <p>Logo Here</p>

          <form action="">
            <label htmlFor="name">
              <input
                className="mb-6 w-full rounded-t-sm border px-2 py-2 text-sm"
                type="text"
                placeholder="Name"
              />
            </label>
            <label htmlFor="email">
              <input
                className="mb-6 w-full rounded-t-sm border px-2 py-2 text-sm"
                type="text"
                placeholder="Email"
              />
            </label>
            <label htmlFor="password">
              <input
                className="mb-6 w-full rounded-t-sm border px-2 py-2 text-sm"
                type="password"
                placeholder="Password"
              />
            </label>
            <label htmlFor="confirmPassword">
              <input
                className="mb-6 w-full rounded-t-sm border px-2 py-2 text-sm"
                type="password"
                placeholder="Confirm Password"
              />
            </label>
            <input
              type="submit"
              value="Login"
              className="w-full rounded-sm bg-blue-400 py-2 text-white "
            />
          </form>
          <div className="flex w-full cursor-pointer items-center justify-center space-x-2 bg-orange-200 py-2">
            <FcGoogle />
            <span>Google</span>
          </div>

          <div>
            <p>If you have already an account</p>
            <Link
              className="mt-2 block text-blue-500 hover:underline"
              href="login"
            >
              Login your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
