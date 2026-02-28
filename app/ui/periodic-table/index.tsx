import ElementCell from "@/app/ui/element-cell";
import GuideCell from "@/app/ui/guide-cell";
import { elementsData } from "@/app/lib/elements-data";
import { periodGuideCells, groupGuideCells } from "@/app/lib/guide-data";
import styles from "./styles.module.css";

interface PeriodicTableProps {
  onElementClick: (symbol: string) => void;
}

export default function PeriodicTable({ onElementClick }: PeriodicTableProps) {
  return (
    <div className={styles.base}>
      {periodGuideCells.map(cell => (
        <GuideCell key={`${cell.type}-${cell.display}`} cell={cell} />
      ))}
      {groupGuideCells.map(cell => (
        <GuideCell key={`${cell.type}-${cell.display}`} cell={cell} />
      ))}
      {elementsData.map(element => (
        <ElementCell key={element.number} element={element} onElementClick={onElementClick} />
      ))}
    </div>
  );
}
