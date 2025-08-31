import ElementCell from "@/components/element_cell";
import GuideCell from "@/components/guide_cell";
import { elementsData } from "@/constants/elements_data";
import { periodGuideCells, groupGuideCells } from "@/constants/guide_data";
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
