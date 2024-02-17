"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl md:text-6xl sm:text-5xl font-bold">
        Your Ideas, Documents & Plans. Unified. Welcome to{" "}
        <span className="underline">Potion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Potion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Potion <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Potion Free <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
