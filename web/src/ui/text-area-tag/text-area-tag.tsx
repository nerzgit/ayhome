"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { MdCancel } from "react-icons/md";
import { equals, reject } from "../../../node_modules/@types/ramda";
import "./text-area-tag.css";

export interface TextAreaTagProps {
  label?: string;
  onChange?: (tags: string[]) => void;
  options?: string[];
}

export const TextAreaTag = ({
  label = "",
  onChange = () => {},
  options = [],
}: TextAreaTagProps) => {
  const [value, setValue] = useState("");

  const [tags, setTags] = useState<string[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isFocus, setIsFocus] = useState(false);

  const getRejectedTags = (inputTag: string) =>
    reject((tag: string) => equals(tag)(inputTag))(tags);

  const removeTag = (inputTag: string) => setTags(getRejectedTags(inputTag));

  const addTag = (inputTag: string) => setTags((prev) => [...prev, inputTag]);

  const focus = () => setIsFocus(true);

  const blur = () => setIsFocus(false);

  const nearOptions = useMemo(
    () =>
      value.length
        ? options.filter(
            (option) =>
              option.includes(value) &&
              !tags.some((tag: string) => equals(tag)(option))
          )
        : [],
    [value, tags]
  );

  const isExistTags = useMemo(() => tags.length > 0, [tags]);

  const isExistNearOptions = useMemo(
    () => nearOptions.length > 0,
    [nearOptions]
  );

  const currentOption = useMemo(
    () => (isExistNearOptions ? nearOptions[currentIndex] : ""),
    [nearOptions, currentIndex]
  );

  const currentOptionClass = useCallback(
    (option: string) =>
      equals(currentOption)(option) ? "bg-grey-100" : "bg-white-100",
    [currentOption]
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [value]);

  const keydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    } else if (event.key === "ArrowDown") {
      if (nearOptions.length - 1 > currentIndex) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
    if (event.key === "Enter") {
      if (currentOption.length) {
        addTag(currentOption);
      }
    }
  };

  const change = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    onChange(tags);
  }, [tags]);

  const labelClassName = useMemo(
    () => (isFocus || value.length || tags.length ? "animation-focus" : ""),
    [isFocus, value]
  );

  interface TagBlockProps {
    label: string;
  }

  const TagBlock = ({ label = "" }: TagBlockProps) => {
    return (
      <p
        onClick={() => removeTag(label)}
        className="px-[10px] py-[5px] rounded-md flex gap-[8px] items-center bg-grey-100 cursor-pointer"
      >
        <span>{label}</span>
        <MdCancel size={20} />
      </p>
    );
  };

  return (
    <div className="text-area-tag w-full border border-1 border-grey-110 rounded-lg min-h-[52px] relative bg-white-100">
      {isExistTags && (
        <div className="flex gap-[10px] py-[2px] px-[10px] mt-[26px] flex-wrap">
          {tags.map((tag: string) => (
            <TagBlock label={tag} />
          ))}
        </div>
      )}
      <p
        className={`z-0 text-black-400 label ${labelClassName} h-full leading-[52px]`}
      >
        {label}
      </p>
      <input
        type="text"
        className={`z-10 border-0 bg-transparent h-full w-full text-md font-thin text-black order-transparent focus:border-transparent focus:ring-0 ${tags.length > 0 ? "" : "pt-[26px]"}`}
        onKeyDown={keydown}
        onChange={(e) => change(e.target.value)}
        onBlur={() => blur()}
        onFocus={() => focus()}
        value={value}
        autoComplete="off"
      />
      {isExistNearOptions && (
        <div className="near-options bg-white-100 rounded-md z-20 border border-1 border-grey- overflow-y-auto m-[10px]">
          {nearOptions.map((option: string, i) => (
            <p
              key={i}
              onClick={() => addTag(option)}
              className={`py-[6px] px-[10px] w-full text-black cursor-pointer ${currentOptionClass(option)}`}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
