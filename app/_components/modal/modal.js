"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import style from "./modal.module.css";

export default function Modal({ open, onClose, children }) {
  const [isMounted, setIsMounted] = useState(false);
  const dialogRef = useRef();

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      const modal = dialogRef.current;

      if (open) {
        modal.showModal();
      }

      return () => {
        modal.close();
      };
    }
  }, [isMounted, open]);

  return isMounted
    ? createPortal(
        <dialog className={style.modal} ref={dialogRef} onClose={onClose}>
          {open ? children : null}
        </dialog>,
        document.getElementById("modal-root")
      )
    : null;
}
