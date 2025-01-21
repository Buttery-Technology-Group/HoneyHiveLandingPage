import { useCallback, useEffect, useRef } from "react";

export const useModal = () => {
  const modalRef = useRef<HTMLElement | null>(null);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);

  const modal = (element: HTMLElement | null) => {
    if (element) modalRef.current = element;
  };

  const button = (button: HTMLButtonElement | null) => {
    if (button) openButtonRef.current = button;
  };

  const toggleModal = useCallback(() => {
    if (modalRef.current) modalRef.current.classList.toggle("active");
  }, []);

  const handleClickOutside = useCallback(
    (event: Event) => {
      if (event.target === modalRef.current) toggleModal();
    },
    [toggleModal]
  );

  const addModalEvents = useCallback(() => {
    if (modalRef.current) modalRef.current.addEventListener("click", handleClickOutside);
    if (openButtonRef.current) openButtonRef.current.addEventListener("click", toggleModal);
  }, [toggleModal, handleClickOutside]);

  const removeModalEvents = useCallback(() => {
    if (modalRef.current) modalRef.current.removeEventListener("click", handleClickOutside);
    if (openButtonRef.current) openButtonRef.current.removeEventListener("click", toggleModal);
  }, [toggleModal, handleClickOutside]);

  useEffect(() => {
    addModalEvents();

    return () => removeModalEvents();
  }, [addModalEvents, removeModalEvents]);

  return { modal, button };
};

export default useModal;
