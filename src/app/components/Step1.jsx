

"use client";

import { useFormContext } from "react-hook-form";

const Step1 = ({ nextStep }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-200 transform hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
        Personal Information
      </h2>

      <div className="space-y-6">
        <div className="relative">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            {...register("fullName")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.fullName
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500"
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2`}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="your.email@example.com"
            {...register("email")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500"
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="(123) 456-7890"
              {...register("phoneNumber")}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                errors.phoneNumber
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2`}
            />
          </div>
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={nextStep}
          className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Step1;
