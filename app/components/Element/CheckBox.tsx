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
        // className="h-4 w-4 rounded border-gray-300 text-primary cursor-pointer  "
        className=" h-4 w-4 rounded appearance-none border-[1px] border-[#00000099] cursor-pointer
          checked:border-[1px] checked:border-[#0084FF] checked:bg-[#0084FF] checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjIwIDYgOSAxNyA0IDEyIj48L3BvbHlsaW5lPjwvc3ZnPg==')]
          group-hover:border-[#0084FF] group-hover:bg-[#D5E8FF80] group-hover:border-[3px] group-hover:checked:bg-[#0084FF] group-hover:checked:border-[1px]
          focus:outline-none focus:ring-0 focus:ring-offset-0
          transition-colors duration-200 "
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
