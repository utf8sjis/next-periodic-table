"use client";

import clsx from "clsx";
import type { ElementData } from "@/app/lib/elements-data";
import { getElementDataByNumber } from "@/app/lib/utils";
import styles from "./styles.module.css";

interface ElementNavigationButtonsProps {
  selectedElement: ElementData;
  onNavigate: (symbol: string) => void;
}

const getNavigationElements = (
  selectedElement: ElementData
): { prev: ElementData | null; next: ElementData | null } => {
  const prev = getElementDataByNumber(selectedElement.number - 1);
  const next = getElementDataByNumber(selectedElement.number + 1);

  return { prev, next };
};

export default function ElementNavigationButtons({
  selectedElement,
  onNavigate,
}: ElementNavigationButtonsProps) {
  const { prev, next } = getNavigationElements(selectedElement);

  return (
    <div className={styles.navigationContainer}>
      <button
        className={styles.navButton}
        onClick={() => prev && onNavigate(prev.symbol)}
        disabled={!prev}
        aria-label="Previous element"
      >
        <span>&lt;</span>
        <span className={clsx(!prev && styles.navSymbolPlaceholder)}>{prev?.symbol ?? ""}</span>
      </button>

      <button
        className={styles.navButton}
        onClick={() => next && onNavigate(next.symbol)}
        disabled={!next}
        aria-label="Next element"
      >
        <span className={clsx(!next && styles.navSymbolPlaceholder)}>{next?.symbol ?? ""}</span>
        <span>&gt;</span>
      </button>
    </div>
  );
}
