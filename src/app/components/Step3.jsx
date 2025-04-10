

"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";

const Step3 = ({ nextStep, prevStep }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password", "");
  const passwordStrength = getPasswordStrength(password);

  function getPasswordStrength(password) {
    if (!password) return { score: 0, label: "None" };

    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    return { score, label: labels[score - 1] || "None" };
  }

  function getStrengthColor(score) {
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-blue-500",
      "bg-green-500",
    ];
    return colors[score - 1] || "bg-gray-300";
  }

  return (
    <div className="w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-200 transform hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
        Account Setup
      </h2>

      <div className="space-y-6">
        <div className="relative">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Username
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="username"
              placeholder="johndoe123"
              {...register("username")}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                errors.username
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2`}
            />
          </div>
          {errors.username && (
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
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Password
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="••••••••"
              {...register("password")}
              className={`w-full pl-10 pr-10 py-3 rounded-lg border ${
                errors.password
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2`}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
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
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
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
              {errors.password.message}
            </p>
          )}

          {password && (
            <div className="mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Password strength:
                </span>
                <span
                  className={`text-xs font-medium ${
                    passwordStrength.score >= 4
                      ? "text-green-500"
                      : passwordStrength.score >= 3
                      ? "text-blue-500"
                      : passwordStrength.score >= 2
                      ? "text-yellow-500"
                      : passwordStrength.score >= 1
                      ? "text-orange-500"
                      : "text-red-500"
                  }`}
                >
                  {passwordStrength.label}
                </span>
              </div>
              <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getStrengthColor(
                    passwordStrength.score
                  )} transition-all duration-300`}
                  style={{ width: `${passwordStrength.score * 20}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Confirm Password
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="••••••••"
              {...register("confirmPassword")}
              className={`w-full pl-10 pr-10 py-3 rounded-lg border ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2`}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
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
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.confirmPassword && (
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
              {errors.confirmPassword.message}
            </p>
          )}
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
          Review
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

export default Step3;
