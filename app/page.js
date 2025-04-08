import Image from "next/image";

import qrCodeImg from "../public/image-qr-code.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <dialog className={styles.dialog} open>
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
    </dialog>
  );
}
