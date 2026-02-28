"use client";

import { useEffect } from "react";
import type { ElementData } from "@/app/lib/elements-data";
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

  if (!selectedElement) return null;

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.header}>
          <div className={styles.symbol}>{selectedElement.symbol}</div>
          <div className={styles.number}>{selectedElement.number}</div>
        </div>

        <div className={styles.details}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Name</h2>
            <div className={styles.nameGroup}>
              <div className={styles.nameItem}>
                <span className={styles.nameLabel}>日本語:</span>
                <span className={styles.nameValue}>
                  {selectedElement.name.ja.display} ({selectedElement.name.ja.yomigana})
                </span>
              </div>
              <div className={styles.nameItem}>
                <span className={styles.nameLabel}>English:</span>
                <span className={styles.nameValue}>{selectedElement.name.en.display}</span>
              </div>
              <div className={styles.nameItem}>
                <span className={styles.nameLabel}>繁體中文:</span>
                <span className={styles.nameValue}>
                  {selectedElement.name.zh.tw.display} ({selectedElement.name.zh.tw.pinyin})
                </span>
              </div>
              <div className={styles.nameItem}>
                <span className={styles.nameLabel}>简体中文:</span>
                <span className={styles.nameValue}>
                  {selectedElement.name.zh.cn.display} ({selectedElement.name.zh.cn.pinyin})
                </span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Properties</h2>
            <div className={styles.propertyGroup}>
              <div className={styles.propertyItem}>
                <span className={styles.propertyLabel}>Atomic Weight:</span>
                <span className={styles.propertyValue}>{selectedElement.atomicWeight}</span>
              </div>
              <div className={styles.propertyItem}>
                <span className={styles.propertyLabel}>Period:</span>
                <span className={styles.propertyValue}>{selectedElement.period}</span>
              </div>
              <div className={styles.propertyItem}>
                <span className={styles.propertyLabel}>Group:</span>
                <span className={styles.propertyValue}>{selectedElement.group}</span>
              </div>
              <div className={styles.propertyItem}>
                <span className={styles.propertyLabel}>Radioactive:</span>
                <span className={styles.propertyValue}>
                  {selectedElement.isRadioactive ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Category</h2>
            <div className={styles.categoryList}>
              {selectedElement.categoryList.map((category, index) => (
                <span key={index} className={styles.categoryTag}>
                  {category}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
