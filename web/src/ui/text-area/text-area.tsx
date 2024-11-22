"use client";

import { useMemo, useState } from "react";
import "./text-area.css";

export interface TextAreaProps {
  label?: string;
  onChange?: (newValue: string) => void;
}

export const TextArea = ({
  label = "",
  onChange = () => {},
}: TextAreaProps) => {
  const [value, setValue] = useState("");

  const [isFocus, setIsFocus] = useState(false);

  const focus = () => setIsFocus(true);

  const blur = () => setIsFocus(false);

  const change = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };

  const labelClassName = useMemo(
    () => (isFocus || value.length ? "animation-focus" : ""),
    [isFocus, value]
  );

  return (
    <div
      className={`text-area-tag w-full border border-1 border-grey-110 rounded-lg relative bg-white-100`}
    >
      <p
        className={`z-0 text-black-400 label ${labelClassName} h-full leading-[52px]`}
      >
        {label}
      </p>
      <textarea
        className={`z-10 border-0 py-[0] mt-[26px] min-h-[80px] bg-transparent w-full text-md font-thin text-black order-transparent focus:border-transparent focus:ring-0`}
        onChange={(e) => change(e.target.value)}
        onBlur={() => blur()}
        onFocus={() => focus()}
        value={value}
        autoComplete="off"
      />
    </div>
  );
};
