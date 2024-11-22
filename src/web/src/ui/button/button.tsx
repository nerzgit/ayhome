"use client";

import { equals } from "ramda";
import { HTMLAttributes, useMemo } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "sm" | "md";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const {
    label,
    size,
    disabled = false,
    onClick = () => {},
    ...restProps
  } = props;

  const sizeStyle = useMemo(
    () => (equals(size)("sm") ? "text-sm p-1" : "p-3"),
    [size]
  );

  const disabledStyle = useMemo(
    () =>
      disabled
        ? "bg-grey-110 text-black-300"
        : "cursor-pointer bg-blue text-white-100",
    [disabled]
  );

  const clickHandler = () => {
    disabled ? false : onClick();
  };

  return (
    <button
      {...restProps}
      className={`w-full rounded-full ${sizeStyle} ${disabledStyle}`}
      disabled={disabled}
      onClick={clickHandler}
    >
      {label}
    </button>
  );
};
