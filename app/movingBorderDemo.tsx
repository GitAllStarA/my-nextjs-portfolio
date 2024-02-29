"use client";
import React from "react";
import { Button } from "../app/components/ui/moving-border";

export function MovingBorderDemo({ str }: { str: string | React.ReactNode }) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="w-full border-neutral-200 bg-white bg-opacity-50 text-black dark:border-slate-800 dark:bg-slate-900 dark:bg-opacity-50 dark:text-white"
      >
        {str}
      </Button>
    </div>
  );
}
