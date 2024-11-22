import { ReactNode, useState } from "react";
import Modal from "./modal";

export interface UseModalProps {
  children?: ReactNode;
}

export const useModal = ({ children = <></> }: UseModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return {
    Modal: <Modal isOpen={isOpen} closeModal={closeModal}>{children}</Modal>,
    openModal,
    closeModal,
  };
};
