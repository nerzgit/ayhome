import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ReactNode } from "react";
import { GoChevronDown } from "react-icons/go";

export interface AyDisclosureItem {
  title: string;
  content: ReactNode;
}

export interface AyDisclosureProps {
  items: AyDisclosureItem[];
  children?: ReactNode;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

export const AyDisclosure = ({
  items = [],
  children = null,
  onClick = () => {},
  onDoubleClick = () => {},
}: AyDisclosureProps) => {
  return (
    <div className="text-black">
      {items.map(({ title, content }: AyDisclosureItem) => (
        <Disclosure as="div" defaultOpen={false}>
          <DisclosureButton
            className="group flex w-full items-center justify-between"
            onClick={onClick}
            onDoubleClick={onDoubleClick}
          >
            <span className="text-sm text-black">{title}</span>
            <GoChevronDown className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-1">{content}</DisclosurePanel>
        </Disclosure>
      ))}
      {children}
    </div>
  );
};
