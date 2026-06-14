"use client";

import clsx from "clsx";
import { useEffect } from "react";
import type { ElementData } from "@/app/lib/elements-data";
import periodicAccent from "@/app/styles/periodic_accent.module.css";
import { ubuntu } from "@/app/lib/fonts";
import CloseButton from "./close-button";
import ElementCard from "./element-card";
import ElementNavigationButtons from "./element-navigation-buttons";
import styles from "./styles.module.css";

interface ElementCardOverlayProps {
  selectedElement: ElementData | null;
  onClose: () => void;
  onNavigate: (symbol: string) => void;
}

export default function ElementCardOverlay({
  selectedElement,
  onNavigate,
  onClose,
}: ElementCardOverlayProps) {
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
    <div className={styles.overlay} onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div
        className={clsx(
          styles.overlayContent,
          periodicAccent[selectedElement.categoryId],
          ubuntu.className
        )}
      >
        <CloseButton onClick={onClose} />
        <ElementCard selectedElement={selectedElement} />
        <ElementNavigationButtons selectedElement={selectedElement} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
