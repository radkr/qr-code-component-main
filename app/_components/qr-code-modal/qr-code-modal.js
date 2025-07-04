import Image from "next/image";

import qrCodeImg from "@/public/image-qr-code.png";
import styles from "./qr-code-modal.module.css";

export default function QRCodeModal() {
  return (
    <div className={styles.modal} data-testid="qr-code-modal-test-id">
      <Image className={styles.qrCode} src={qrCodeImg} alt="QR Code" />
      <div className={styles.description}>
        <h1 className={styles.pitch}>
          Improve your front-end skills by building projects
        </h1>
        <p className={styles.todo}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
