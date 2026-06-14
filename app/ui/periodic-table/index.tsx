import ElementCell from "@/app/ui/periodic-table/element-cell";
import GuideCell from "@/app/ui/periodic-table/guide-cell";
import { elementsData } from "@/app/lib/elements-data";
import { periodGuideCells, groupGuideCells } from "@/app/lib/guide-data";
import type { DisplayMode } from "@/app/lib/display-mode";
import styles from "./styles.module.css";

interface PeriodicTableProps {
  onElementClick: (symbol: string) => void;
  displayMode: DisplayMode;
}

export default function PeriodicTable({ onElementClick, displayMode }: PeriodicTableProps) {
  return (
    <div className={styles.base}>
      {periodGuideCells.map(cell => (
        <GuideCell key={`${cell.type}-${cell.display}`} cell={cell} />
      ))}
      {groupGuideCells.map(cell => (
        <GuideCell key={`${cell.type}-${cell.display}`} cell={cell} />
      ))}
      {elementsData.map(element => (
        <ElementCell
          key={element.number}
          element={element}
          onElementClick={onElementClick}
          displayMode={displayMode}
        />
      ))}
    </div>
  );
}
