

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MultiStepForm from "./components/MultiStepForm";
import { useState } from "react";

export default function Home() {
 
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
        <MultiStepForm />
      </div>
    </QueryClientProvider>
  );
}
