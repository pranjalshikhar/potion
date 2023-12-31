"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Heading = () => {
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
      <Button>
        Enter Potion
        <ArrowRightIcon className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
