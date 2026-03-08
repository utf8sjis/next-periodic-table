import clsx from "clsx";
import type { ElementData } from "@/app/lib/elements-data";
import { CategoryId, elementsData } from "@/app/lib/elements-data";
import styles from "./styles.module.css";

/**
 * Returns the 1-based grid column index (within the 32-column long-form layout)
 * for a given element. The f-block (lanthanides/actinides) is placed inline
 * starting at column 3.
 */
function getElementGridColumn(el: ElementData): number {
  if (el.categoryId === CategoryId.Lanthanide) return el.number - 57 + 3;
  if (el.categoryId === CategoryId.Actinide) return el.number - 89 + 3;
  if (el.group >= 3) return el.group + 14;
  return el.group;
}

/** Mini periodic table in long-form (32-col) layout with f-block inline */
export default function MiniPeriodicTable({ selectedElement }: { selectedElement: ElementData }) {
  const activeColStart = getElementGridColumn(selectedElement);

  return (
    <div className={styles.miniTable}>
      {/* Period guide label (left column) */}
      <div
        className={styles.miniGuideLabel}
        style={{ gridRowStart: selectedElement.period, gridColumnStart: 1 }}
      >
        {selectedElement.period}
      </div>
      {/* Group guide label (bottom row) */}
      <div
        className={styles.miniGuideLabel}
        style={{ gridRowStart: 8, gridColumnStart: activeColStart + 1 }}
      >
        {selectedElement.group}
      </div>
      {/* All element cells */}
      {elementsData.map(el => (
        <div
          key={el.number}
          className={clsx(
            styles.miniCell,
            el.number === selectedElement.number && styles.miniCellActive
          )}
          style={{ gridRowStart: el.period, gridColumnStart: getElementGridColumn(el) + 1 }}
        />
      ))}
    </div>
  );
}
