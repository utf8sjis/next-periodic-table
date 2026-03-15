"use client";

import clsx from "clsx";
import { useEffect } from "react";
import type { ElementData } from "@/app/lib/elements-data";
import periodicAccent from "@/app/styles/periodic_accent.module.css";
import { ubuntu } from "@/app/lib/fonts";
import MiniPeriodicTable from "./mini-periodic-table";
import styles from "./styles.module.css";

interface ElementDetailOverlayProps {
  selectedElement: ElementData | null;
  onClose: () => void;
}

export default function ElementDetailOverlay({
  selectedElement,
  onClose,
}: ElementDetailOverlayProps) {
  // Lock body scroll when overlay is open
  useEffect(() => {
    if (selectedElement) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedElement]);

  // Close on ESC key
  useEffect(() => {
    if (!selectedElement) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedElement, onClose]);

  // Don't render the overlay at all if no element is selected
  if (!selectedElement) return null;

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div
        className={clsx(
          styles.overlayContent,
          periodicAccent[selectedElement.categoryId],
          ubuntu.className
        )}
      >
        <button className={styles.closeButton} onClick={onClose} aria-label="Close" />

        <div className={styles.detailGrid}>
          <div className={styles.symbolArea}>
            <span className={styles.atomicNumber}>{selectedElement.number}</span>
            <span className={styles.symbol}>{selectedElement.symbol}</span>
          </div>
          <div className={styles.miniTableArea}>
            <MiniPeriodicTable selectedElement={selectedElement} />
          </div>
          <div className={styles.nameArea}>
            <div className={styles.nameJa}>{selectedElement.name.ja.display}</div>
            <div className={styles.nameEn}>{selectedElement.name.en.display}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
