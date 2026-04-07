"use client"; // Error boundaries must be Client Components

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Please sign in before you can create notes!</h2>
      <button
        onClick={
          // Attempt to recover by re-fetching and re-rendering the segment
          () => redirect("/")
        }
      >
        Go to homepage
      </button>
    </div>
  );
}
