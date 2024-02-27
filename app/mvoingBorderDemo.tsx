"use client";
import React from "react";
import { Button } from "../app/components/ui/moving-border";

export function MovingBorderDemo({ str }: { str: string }) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="w-full bg-white dark:bg-slate-900 bg-opacity-50 dark:bg-opacity-50 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {str}
      </Button>
    </div>
  );
}
