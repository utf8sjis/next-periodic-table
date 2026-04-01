"use client";

import styles from "./styles.module.css";

interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return <button className={styles.closeButton} onClick={onClick} aria-label="Close" />;
}
