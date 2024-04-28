import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ul className={styles.chatList}>
      <li className={styles.item}></li>
      <li className={styles.item}></li>
      <li className={styles.item}></li>
      <li className={styles.item}></li>
    </ul>
  );
}
