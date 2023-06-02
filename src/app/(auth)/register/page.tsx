'use client';

import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { TbArrowLeftBar } from 'react-icons/tb';
import { type SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { Url } from '@/utils/basic';
import { z } from 'zod';
import { toast } from 'react-toastify';
import Tostify from '@/utils/Tostify';
import { useRouter } from 'next/navigation';

const Register = () => {
  type Inputs = {
    name: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  // const FormSchema = z.object({
  //   email: z.string(),
  //   password: z.string().min(3).max(20),
  // });

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const getData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    console.log(getData);

    // const validData = FormSchema.safeParse(getData);
    axios
      .post(`${Url}/auth/signup`, getData)
      .then(function (response) {
        if (response) {
          toast.success('Register Successful, Please Login First');
          setTimeout(() => {
            router.push('/login');
          }, 2000);
        }
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message);
        toast.error(error?.response?.data?.message[0]);
      });

    // reset();
  };

  return (
    <Tostify>
      <div className="bg-blue-50  h-screen flex justify-center items-center">
        <div className="w-[20%]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
              Register Your account
            </h2>
          </div>

          {/*  */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            action="#"
            method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-black">
                Your Name
              </label>
              <div className="mt-2">
                <input
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  placeholder="Enter your Name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-2 outline-none sm:text-sm sm:leading-6 bg-white "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-black">
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is Required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email',
                    },
                  })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-2 outline-none sm:text-sm sm:leading-6 bg-white"
                />
                <>
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-sm text-red-500">
                      {errors.email.message as string}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
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
                  className="block text-sm font-medium leading-6 text-black">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is Required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer',
                    },
                  })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 outline-none text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-2 sm:text-sm sm:leading-6 bg-white "
                />
                <>
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-sm text-red-500">
                      {errors.password.message as string}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Register Now
              </button>
            </div>
          </form>

          {/*  */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
          <div className=" mt-2 text-center text-sm text-gray-500">
            <span className="mr-2">if you already register?</span>
            <Link
              href={'/login'}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </Tostify>
  );
};

export default Register;
