import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";

const PriceSwitcher = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex justify-between items-center w-full max-w-2xl px-4 py-4 border border-gray-200 rounded-2xl">
      <div className="flex flex-col md:flex-row md:gap-3">
        <p className="font-semibold text-base truncate">Display total price</p>
        <span className="w-[0.5px] bg-slate-300"></span>
        <p className="text-base font-thin">Include all fees, before taxes</p>
      </div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-black" : "bg-gray-400"
        } relative inline-flex h-9 w-12 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-4" : "translate-x-1"
          } inline-flex justify-center items-center h-7 w-7 transform rounded-full bg-white transition`}
        >
          <CheckIcon
            className={`h-4 w-4 ${enabled ? "text-black" : "text-transparent"}`}
          />
        </span>
      </Switch>
    </div>
  );
};

export default PriceSwitcher;
