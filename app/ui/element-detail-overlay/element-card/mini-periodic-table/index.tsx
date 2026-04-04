import clsx from "clsx";
import type { ElementData } from "@/app/lib/elements-data";
import { CategoryId, elementsData } from "@/app/lib/elements-data";
import { AC_NUMBER, F_BLOCK_SPAN, LA_NUMBER } from "@/app/lib/constants";
import styles from "./styles.module.css";

function getElementGridRow(el: ElementData): number {
  return el.period;
}

function getElementGridColumn(el: ElementData): number {
  // 1 (guide label) + 2 (groups 1-2) + 1 (start offset) + lanthanide/actinide index
  if (el.categoryId === CategoryId.Lanthanide) return 4 + el.number - LA_NUMBER;
  if (el.categoryId === CategoryId.Actinide) return 4 + el.number - AC_NUMBER;
  // 1 (guide label) + group number + f-block span shift
  if (el.group >= 3) return 1 + F_BLOCK_SPAN + el.group;
  // 1 (guide label) + group number
  return 1 + el.group;
}

export default function MiniPeriodicTable({ selectedElement }: { selectedElement: ElementData }) {
  return (
    <div className={styles.miniTable}>
      {/* Period guide label (left column) */}
      <div
        className={styles.guide}
        style={{ gridRowStart: getElementGridRow(selectedElement), gridColumnStart: 1 }}
      >
        <span className={styles.guideText}>{selectedElement.period}</span>
      </div>
      {/* Group guide label (bottom row) */}
      <div
        className={styles.guide}
        style={{ gridRowStart: 8, gridColumnStart: getElementGridColumn(selectedElement) }}
      >
        <span className={styles.guideText}>{selectedElement.group}</span>
      </div>
      {/* All element cells */}
      {elementsData.map(el => (
        <div
          key={el.number}
          className={clsx(styles.cell, el.number === selectedElement.number && styles.cellActive)}
          style={{
            gridRowStart: getElementGridRow(el),
            gridColumnStart: getElementGridColumn(el),
          }}
        />
      ))}
    </div>
  );
}
