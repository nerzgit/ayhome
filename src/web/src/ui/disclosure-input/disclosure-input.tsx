import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

export interface AyDisclosureInputProps {
  title: string;
  children?: ReactNode;
  onChange?: (value: string) => void;
  onClick?: () => void;
  selected?: boolean;
  index?: number;
}

export const AyDisclosureInput = ({
  title = "",
  children = null,
  onChange = () => {},
  onClick = () => {},
  selected = false,
  index = 0
}: AyDisclosureInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [inputTitle, setInputTitle] = useState<string>(title);

  const [isShowInput, setIsShowInput] = useState<boolean>(false);

  const updateInputTitle = (newValue: string) => {
    setInputTitle(newValue)
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const editMode = () => {
    setIsShowInput(true);
  };

  const viewMode = () => {
    setIsShowInput(false);
    if(inputTitle.length < 1){
      setInputTitle("Empty title")
    }
  };

  const doubleClickHandler = () => {
    isShowInput ? viewMode() : editMode();
  };

  const keydownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // This is space. Space key event deleted by Disclousure Button, so make custom.
    if(event.key === " "){
      setInputTitle((prev) => prev + " ")
    }
    if (event.key === "Enter") {
      viewMode();
      onChange(inputTitle);
    }
  };

  const blurHandler = () => {
    viewMode()
  }

  useEffect(() => {
    if (isShowInput) {
      focusInput();
    }
  }, [isShowInput]);

  const selectStyle = useMemo(() => (selected && !isShowInput ? "underline" : ""), [selected]);

  // programaticallyにdisclosureをopen/closeするため
  const disclosureButtonId = useMemo(() => makeDisclosureId(index),[index])

  return (
    <div className="text-black">
      <Disclosure as="div" defaultOpen={false}>
        <DisclosureButton
          id={disclosureButtonId}
          className={`relative group flex w-full items-center justify-between rounded-md cursor-pointer ${selectStyle}`}
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
            <span className="text-sm text-black text-left">{inputTitle}</span>
          )}
          <GoChevronDown className="size-5 group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-1">{children}</DisclosurePanel>
      </Disclosure>
    </div>
  );
};

const makeDisclosureId = (index: number) => `disclosure-button-${index}`

export const openDisclosure = (index: number) => {
  const targetElement = document.getElementById(makeDisclosureId(index))
  if(targetElement){
    const isOpen = targetElement.getAttribute('aria-expanded')
    if(isOpen === "false"){
      targetElement?.click()
    }
  }
}