"use client";

import { useState } from "react";
import { GenericElements } from "@/types";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  label: GenericElements;
}

export default function Checkbox({
  checked: externalChecked,
  onChange: externalOnChange,
  className = "",
  label,
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(false);

  const checked = externalChecked ?? internalChecked;

  const handleChange = () => {
    const newValue = !checked;
    if (externalOnChange) {
      externalOnChange(newValue);
    } else {
      setInternalChecked(newValue);
    }
  };

  return (
    <label className={` group flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer "
      />
      <span
        className={`text-[16px] select-none font-medium text-[#00000099] 
          group-hover:text-[#E6641D] cursor-pointer 
         `}
      >
        {label}
      </span>
    </label>
  );
}
