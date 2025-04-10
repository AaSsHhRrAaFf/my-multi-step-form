

"use client";
import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Summary from "./Summary";

// Zod schema for validation
const schema = z
  .object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email format"),
    phoneNumber: z.string().min(10, "Phone Number must be at least 10 digits"),
    streetAddress: z.string().min(1, "Street Address is required"),
    city: z.string().min(1, "City is required"),
    zipCode: z.string().regex(/^\d{5,}$/, "Zip Code must be at least 5 digits"),
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Simulated API submission
const submitForm = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  console.log("Form submitted:", data);
  return { success: true };
};

const MultiStepForm = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    mode: "onChange", 
  });

  const [step, setStep] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const totalSteps = 4;

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const mutation = useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      alert("Form submitted successfully!");
    },
    onError: (error) => {
      alert("Error submitting form: " + error.message);
    },
  });

  const nextStep = async () => {
    let fieldsToValidate;
    if (step === 1) fieldsToValidate = ["fullName", "email", "phoneNumber"];
    else if (step === 2)
      fieldsToValidate = ["streetAddress", "city", "zipCode"];
    else if (step === 3)
      fieldsToValidate = ["username", "password", "confirmPassword"];

    const isValid = await methods.trigger(fieldsToValidate);
    if (isValid) setStep((step) => step + 1);
  };

  const prevStep = () => setStep((step) => step - 1);

  const onSubmit = methods.handleSubmit((data) => {
    mutation.mutate(data);
  });

  // Step titles for the progress indicator
  const stepTitles = ["Personal Info", "Address", "Account", "Review"];

  return (
    <div className="relative w-full max-w-2xl mx-auto p-6">
      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      {/* Progress indicator */}
      <div className="mb-8 mt-8">
        <div className="flex justify-between items-center">
          {stepTitles.map((title, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step > index + 1
                    ? "bg-green-500 border-green-500 text-white"
                    : step === index + 1
                    ? "border-purple-600 text-purple-600"
                    : "border-gray-300 text-gray-300"
                } transition-colors duration-200`}
              >
                {step > index + 1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  step >= index + 1
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-400 dark:text-gray-500"
                }`}
              >
                {title}
              </span>
            </div>
          ))}
        </div>
        <div className="relative flex mt-2">
          {[...Array(totalSteps - 1)].map((_, index) => (
            <div key={index} className="flex-1 mx-2">
              <div
                className={`h-1 rounded-full transition-colors duration-200 ${
                  step > index + 1
                    ? "bg-green-500"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Form content */}
      <div className="transition-all duration-300 ease-in-out">
        <FormProvider {...methods}>
          {step === 1 && <Step1 nextStep={nextStep} />}
          {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
          {step === 4 && (
            <Summary
              prevStep={prevStep}
              onSubmit={onSubmit}
              isSubmitting={mutation.isLoading}
            />
          )}
        </FormProvider>
      </div>
    </div>
  );
};

export default MultiStepForm;
