"use client";

import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { TbArrowLeftBar } from "react-icons/tb";
import { type SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Url } from "@/utils/basic";
import { z } from "zod";
import { toast } from "react-toastify";
import Tostify from "@/utils/Tostify";
import { useRouter } from "next/navigation";

const Register = () => {
  type Inputs = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  // const FormSchema = z.object({
  //   email: z.string().email(),
  //   password: z.string().min(3).max(20),
  // });

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const getData = {
      email: data.email,
      password: data.password,
    };

    // const validData = FormSchema.safeParse(getData);

    axios
      .post(`${Url}/auth/signup`, getData)
      .then(function (response) {
        if (response) {
          toast.success("Register Successful, Please Login First");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    reset();
  };

  return (
    <Tostify>
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">
                <input
                  {...register("name", { required: true })}
                  className="mb-6 outline-none w-full rounded-t-sm border px-2 py-2 text-sm"
                  type="text"
                  placeholder="Name"
                />
              </label>

              <label htmlFor="email">
                <input
                  {...register("email", { required: true })}
                  className={` w-full rounded-t-sm border px-2 outline-none mb-6 py-2 text-sm ${
                    errors.email && "border border-red-500"
                  } `}
                  type="text"
                  placeholder="Email"
                />
              </label>

              <label htmlFor="password">
                <input
                  {...register("password", { required: true })}
                  className={` w-full rounded-t-sm border px-2 outline-none mb-6 py-2 text-sm ${
                    errors.password && "border border-red-500"
                  } `}
                  type="password"
                  placeholder="Password"
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
    </Tostify>
  );
};

export default Register;
