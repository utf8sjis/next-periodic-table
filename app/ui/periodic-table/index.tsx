import ElementCell from "@/app/ui/element-cell";
import GuideCell from "@/app/ui/guide-cell";
import { elementsData } from "@/app/lib/elements-data";
import { periodGuideCells, groupGuideCells } from "@/app/lib/guide-data";
import styles from "./styles.module.css";

export default function PeriodicTable() {
  return (
    <div className={styles.base}>
      {periodGuideCells.map(cell => (
        <GuideCell key={cell.key} cell={cell} />
      ))}
      {groupGuideCells.map(cell => (
        <GuideCell key={cell.key} cell={cell} />
      ))}
      {elementsData.map(element => (
        <ElementCell key={element.number} element={element} />
      ))}
    </div>
  );
}
