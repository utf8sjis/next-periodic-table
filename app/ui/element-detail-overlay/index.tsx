"use client";

import clsx from "clsx";
import { useEffect } from "react";
import type { ElementData } from "@/app/lib/elements-data";
import periodicAccent from "@/app/styles/periodic_accent.module.css";
import fontFamily from "@/app/styles/font_family.module.css";
import { ubuntu } from "@/app/lib/fonts";
import MiniPeriodicTable from "./mini-periodic-table";
import styles from "./styles.module.css";

// Bopomofo tone marks: ˊ(U+02CA) ˇ(U+02C7) ˋ(U+02CB) ˙(U+02D9)
const TONE_MARKS = new Set(["ˊ", "ˇ", "ˋ", "˙"]);

function BopomofoDisplay({ bopomofo }: { bopomofo: string }) {
  const tone = TONE_MARKS.has(bopomofo[bopomofo.length - 1]) ? bopomofo[bopomofo.length - 1] : "";
  return (
    <span className={clsx(styles.hanBopomofo, fontFamily.zhTW)}>
      {tone ? (
        <span>
          {bopomofo.slice(0, -2)}
          <span className={styles.hanBopomofoFinal}>
            {bopomofo[bopomofo.length - 2]}
            <span className={styles.hanBopomofoTone}>{tone}</span>
          </span>
        </span>
      ) : (
        bopomofo
      )}
    </span>
  );
}

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
          <div className={styles.hanArea}>
            <div className={clsx(styles.hanItem, fontFamily.zhCN)}>
              <span className={styles.hanPinyin}>{selectedElement.name.zh.cn.pinyin}</span>
              <div className={styles.hanCharRow}>
                <span className={styles.hanChar}>{selectedElement.name.zh.cn.display}</span>
              </div>
              <span className={styles.hanUnicode}>U+{selectedElement.name.zh.cn.unicode}</span>
              <span className={styles.hanLabel}>Mainland China</span>
            </div>
            <div className={styles.hanDivider} />
            <div className={clsx(styles.hanItem, fontFamily.zhTW)}>
              <span className={styles.hanPinyin}>{selectedElement.name.zh.tw.pinyin}</span>
              <div className={styles.hanCharRow}>
                <span className={styles.hanChar}>{selectedElement.name.zh.tw.display}</span>
              </div>
              <BopomofoDisplay bopomofo={selectedElement.name.zh.tw.bopomofo} />
              <span className={styles.hanUnicode}>U+{selectedElement.name.zh.tw.unicode}</span>
              <span className={styles.hanLabel}>Taiwan</span>
            </div>
            <div className={styles.hanDivider} />
            <div className={clsx(styles.hanItem, fontFamily.zhHK)}>
              <div className={styles.hanCharRow}>
                <span className={styles.hanChar}>{selectedElement.name.zh.hk.display}</span>
              </div>
              <span className={styles.hanUnicode}>U+{selectedElement.name.zh.hk.unicode}</span>
              <span className={styles.hanLabel}>Hong Kong</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
