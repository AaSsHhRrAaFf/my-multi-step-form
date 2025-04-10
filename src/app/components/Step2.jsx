

"use client";

import { useFormContext } from "react-hook-form";

const Step2 = ({ nextStep, prevStep }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-200 transform hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
        Address Details
      </h2>

      <div className="space-y-6">
        <div className="relative">
          <label
            htmlFor="streetAddress"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Street Address
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <input
              type="text"
              id="streetAddress"
              placeholder="123 Main St"
              {...register("streetAddress")}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                errors.streetAddress
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2`}
            />
          </div>
          {errors.streetAddress && (
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
              {errors.streetAddress.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="New York"
              {...register("city")}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.city
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2`}
            />
            {errors.city && (
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
                {errors.city.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              placeholder="10001"
              {...register("zipCode")}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.zipCode
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2`}
            />
            {errors.zipCode && (
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
                {errors.zipCode.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          Back
        </button>
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

export default Step2;
