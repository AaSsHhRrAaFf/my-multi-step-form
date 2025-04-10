

"use client";

import { useFormContext } from "react-hook-form";

const Summary = ({ prevStep, onSubmit, isSubmitting }) => {
  const { getValues } = useFormContext();
  const formData = getValues();

  return (
    <div className="w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-200 transform hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
        Review Your Information
      </h2>

      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Full Name</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {formData.fullName}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {formData.email}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Phone Number</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {formData.phoneNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
            Address Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="md:col-span-2">
              <p className="text-gray-500 dark:text-gray-400">Street Address</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {formData.streetAddress}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">City</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {formData.city}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Zip Code</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {formData.zipCode}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
            Account Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Username</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {formData.username}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Password</p>
              <p className="font-medium text-gray-900 dark:text-white">
                ••••••••
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={prevStep}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200 order-2 sm:order-1"
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
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95 order-1 sm:order-2 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              Submit
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Summary;
