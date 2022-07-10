import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';

import { EmptyLayout } from '../../components/layouts';

RegisterPage.Layout = EmptyLayout;

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email address')
    .trim('Please enter valid characters')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('Please enter your password')
    .trim('Please enter valid characters'),
  // .min(6)
  // .max(8)
  // .matches(/(.*[a-z].*)/, 'Password must contain at least one LOWER CASE letter')
  // .matches(/(.*[A-Z].*)/, 'Password must contain at least one UPPER CASE letter')
  // .matches(/(.*\d.*)/, 'Password must contain at least one DIGIT')
  // .matches(/(.*\W.*)/, 'Password must contain at least one SYMBOL'),
});

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-6/12 m-8 p-8">
        <div className="flex flex-col gap-2 relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="email"
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            {...register('email')}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          <span className="text-red-600">{errors.email?.message}</span>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            // type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            {...register('password')}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          <span className="text-red-600">{errors.password?.message}</span>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign In
        </button>
        <button
          className="ml-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => router.push('/user/register')}
        >
          Register
        </button>
      </form>
    </div>
  );
}
