"use client";

import React, { useMemo } from "react";
import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

export default function DateField({
  label = "Journey Date",
  value,
  onChange,
  placeholder = "Pick a date",
  rightText,
  onRightClick,
  accent = "text-[#079D49]",
}) {
  const display = useMemo(() => {
    if (!value) return placeholder;
    try {
      return format(value, "dd MMM, yyyy");
    } catch {
      return placeholder;
    }
  }, [value, placeholder]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="relative flex h-[66px] w-full items-center rounded-2xl border border-[#dcdcdc] bg-white px-5 text-left"
        >
          <span className={`absolute left-5 top-2 text-[12px] font-semibold ${accent}`}>
            {label}
          </span>

          <span className={"mt-4 text-[18px] font-semibold " + (value ? "text-[#111]" : "text-[#9aa3af]")}>
            {display}
          </span>

          {rightText ? (
            <span
              className="absolute right-5 top-2 text-[12px] font-semibold text-[#f88922]"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onRightClick?.();
              }}
              role="button"
              tabIndex={0}
            >
              {rightText}
            </span>
          ) : null}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content sideOffset={10} className="z-[100] rounded-2xl border bg-white p-3 shadow-xl">
          <DayPicker mode="single" selected={value} onSelect={(d) => onChange?.(d)} />
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
