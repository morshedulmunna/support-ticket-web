"use client";

import Loading from "@/components/Loading";
import Logo from "@/components/Logo";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import { LoginUser } from "@/types/custome-type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const dispatch = useDispatch();
  const [userLogin, { data, isSuccess, isLoading, isError, error }] =
    useUserLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = (data: LoginUser) => {
    userLogin(data);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    router.push("support-center");
  }

  return (
    <React.Fragment>
      <div className="bg-white px-6 md:px-2 h-screen -mt-20 flex justify-center items-center">
        <div className="w-96">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6">
            <div className="w-full mx-auto  flex justify-center items-center">
              <Logo />
            </div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          {/*  */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-2 outline-none sm:text-sm sm:leading-6 bg-white text-black"
                />
                <>
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-sm text-red-500">
                      {errors.email.message as string}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-sm text-red-500">
                      {errors.email.message as string}
                    </span>
                  )}
                </>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 outline-none text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-2 sm:text-sm sm:leading-6 bg-white"
                />
                <>
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-sm text-red-500">
                      {errors.password.message as string}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-sm text-red-500">
                      {errors.password.message as string}
                    </span>
                  )}
                </>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>

          <div className=" mt-2 text-center text-sm text-gray-500">
            <span className="mr-2">if you not register?</span>
            <Link
              href={"/register"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
