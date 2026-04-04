import clsx from "clsx";
import type { ElementData } from "@/app/lib/elements-data";
import { CategoryId, elementsData } from "@/app/lib/elements-data";
import { AC_NUMBER, F_BLOCK_SPAN, LA_NUMBER } from "@/app/lib/constants";
import styles from "./styles.module.css";

function getGridRow(el: ElementData): number {
  return el.period;
}

function getGridColumn(el: ElementData): number {
  // guide label offset + group 3 + lanthanide/actinide index
  if (el.categoryId === CategoryId.Lanthanide) return 1 + el.group + el.number - LA_NUMBER;
  if (el.categoryId === CategoryId.Actinide) return 1 + el.group + el.number - AC_NUMBER;
  // guide label offset + group number + f-block span offset
  if (el.group >= 3) return 1 + el.group + F_BLOCK_SPAN;
  // guide label offset + group number
  return 1 + el.group;
}

export default function MiniPeriodicTable({ selectedElement }: { selectedElement: ElementData }) {
  return (
    <div className={styles.miniTable}>
      {/* Period guide label (left column) */}
      <div
        className={styles.guide}
        style={{ gridRowStart: getGridRow(selectedElement), gridColumnStart: 1 }}
      >
        <span className={styles.guideText}>{selectedElement.period}</span>
      </div>
      {/* Group guide label (bottom row) */}
      <div
        className={styles.guide}
        style={{ gridRowStart: 8, gridColumnStart: getGridColumn(selectedElement) }}
      >
        <span className={styles.guideText}>{selectedElement.group}</span>
      </div>
      {/* All element cells */}
      {elementsData.map(el => (
        <div
          key={el.number}
          className={clsx(styles.cell, el.number === selectedElement.number && styles.cellActive)}
          style={{
            gridRowStart: getGridRow(el),
            gridColumnStart: getGridColumn(el),
          }}
        />
      ))}
    </div>
  );
}
