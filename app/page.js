"use client";

import { useState } from "react";

import Modal from "./_components/modal/modal";
import QRCodeModal from "./_components/qr-code-modal/qr-code-modal";

export default function Home() {
  const [isQrCodeModalOpen, setIsQrCodeModalOpen] = useState(false);

  function handleClick() {
    setIsQrCodeModalOpen(true);
  }

  function handleQrCodeModalClose() {
    setIsQrCodeModalOpen(false);
  }

  return (
    <>
      <div id="modal-root" />
      <main onClick={handleClick} style={{ width: "100vw", height: "100vh" }}>
        <Modal open={isQrCodeModalOpen} onClose={handleQrCodeModalClose}>
          <QRCodeModal />
        </Modal>
      </main>
    </>
  );
}
