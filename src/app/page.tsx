"use client"

import SignInForm from "@/components/SignInForm";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import Spinner from "@/components/Spinner";

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    // Handle loading state however you like
    return <Spinner />;
  }

  return (
    <main>
      <SignInForm />
    </main>
  )
}