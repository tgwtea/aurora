"use client"

import { cn, Radio, RadioGroup } from "@heroui/react";

export default function RadioSelect({ buttons, current, update, classNames }) {
  return (
    <RadioGroup value={current} onValueChange={update} classNames={classNames ?? {}}>
      { buttons.map((g) => {
        return (
          <Radio key={g.id} value={g.id} aria-label={g.label} classNames={{
            base: cn("inline-flex max-w-md w-full m-0 bg-gray-200 hover:bg-gray-300 rounded-lg gap-2 p-4 border-2 border-transparent data-[selected=true]:border-primary data-[selected=true]:bg-blue-200")
          }}>
            <span className="text-xs flex items-center gap-3 dark:text-black">{g.icon}{g.label}</span>
          </Radio>
        );
      }) }
    </RadioGroup>
  );
}