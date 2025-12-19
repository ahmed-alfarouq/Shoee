import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

import { BiX } from "react-icons/bi";

import type { ModalProps } from "./Modal.types";

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  className = "",
  closeOnOverlayClick = true,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.modal_overlay}
      onClick={closeOnOverlayClick ? onClose : undefined}
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div className="container">
        <div
          className={`${styles.modal_content} ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {title && <h2 id="modal-title">{title}</h2>}
          <button
            aria-label="Close modal"
            className={styles.modal_close}
            onClick={onClose}
          >
            <BiX />
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
