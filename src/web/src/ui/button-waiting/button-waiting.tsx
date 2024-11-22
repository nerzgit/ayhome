"use client";

import { equals } from "ramda";
import { HTMLAttributes, useEffect, useMemo, useRef, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export interface ButtonWaitingProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  pressSeconds: number;
  size?: "sm" | "md";
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonWaiting = (props: ButtonWaitingProps) => {
  const {
    label,
    pressSeconds = 10,
    size,
    disabled = false,
    onClick = () => {},
    ...restProps
  } = props;

  const [timer, setTimer] = useState<number>(0);
  const [isDown, setIsDown] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const percentage = useMemo(() => (timer / pressSeconds) * 100, [timer, pressSeconds]);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer(0);
  };

  const includeTimerPerSeconds = () => {
    const id = setInterval(() => {
      setTimer((prev) => {
        const next = prev + 1
        if (next > pressSeconds) {
          clearTimer();
          onClick(); // Call onClick when timer reaches pressSeconds
          setIsDown(false)
          return prev; // Keep the timer at pressSeconds to avoid going over
        }
        return next;
      });
    }, 1000);
    intervalRef.current = id
  };

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

  const mouseDownHandler = () => {
    if (!disabled) {
      setIsDown(true);
      includeTimerPerSeconds();
    }
  };

  const mouseUpHandler = () => {
    setIsDown(false);
    clearTimer();
  };

  useEffect(() => {
    return () => {
      clearTimer(); // Clear timer on component unmount
    };
  }, []);

  return (
    <button
      {...restProps}
      className={`w-full rounded-full ${sizeStyle} ${disabledStyle}`}
      disabled={disabled}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onTouchStart={mouseDownHandler}
      onTouchEnd={mouseUpHandler}
    >
      {isDown ? 
        <div className="m-auto flex items-center justify-center">
          <p className={`${sizeStyle}`}>{pressSeconds}秒間長押し</p>
          <div className="w-[20px] h-[20px]">
            <CircularProgressbar value={percentage} /> 
          </div>
        </div>
      : label}
    </button>
  );
};
