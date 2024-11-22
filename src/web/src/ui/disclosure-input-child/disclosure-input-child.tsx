import { Disclosure, DisclosureButton } from "@headlessui/react";
import { useEffect, useMemo, useRef, useState } from "react";

export interface AyDisclosureInputChildProps {
  title: string;
  onClick?: () => void;
  onChange?: (value: string) => void;
  selected?: boolean;
}

export const AyDisclosureInputChild = ({
  title = "",
  onClick = () => {},
  onChange = () => {},
  selected = false,
}: AyDisclosureInputChildProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputTitle, setInputTitle] = useState<string>(title);

  const [isShowInput, setIsShowInput] = useState<boolean>(false);

  const updateInputTitle = (newValue: string) => {
    setInputTitle(newValue);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const editMode = () => {
    setIsShowInput(true);
  };

  const viewMode = () => {
    setIsShowInput(false);
    if (inputTitle.length < 1) {
      setInputTitle("Empty title");
    }
  };

  const doubleClickHandler = () => {
    isShowInput ? viewMode() : editMode();
  };

  const keydownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // This is space. Space key event deleted by Disclousure Button, so make custom.
    if (event.key === " ") {
      setInputTitle((prev) => prev + " ");
    }
    if (event.key === "Enter") {
      viewMode();
      onChange(inputTitle);
    }
  };

  const blurHandler = () => {
    viewMode();
  };

  useEffect(() => {
    if (isShowInput) {
      focusInput();
    }
  }, [isShowInput]);

  const selectStyle = useMemo(
    () => (selected ? "bg-grey-110" : ""),
    [selected]
  );

  return (
    <div className="text-black">
      <Disclosure as="div" defaultOpen={false}>
        <DisclosureButton
          className={`px-[10px] relative group flex w-full items-center justify-between rounded-md cursor-pointer ${selectStyle}`}
          onClick={onClick}
          onDoubleClick={doubleClickHandler}
        >
          {isShowInput ? (
            <input
              ref={inputRef}
              type="text"
              value={inputTitle}
              className="p-0 m-0 text-black text-sm border-none bg-transparent w-full focus:border-transparent focus:ring-0"
              onKeyDown={keydownHandler}
              onBlur={blurHandler}
              onChange={(e) => updateInputTitle(e.target.value)}
            />
          ) : (
            <span className="text-sm text-black text-left break-all">{inputTitle}</span>
          )}
        </DisclosureButton>
      </Disclosure>
    </div>
  );
};
