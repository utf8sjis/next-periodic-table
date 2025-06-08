import ElementCell from "@/components/element_cell";
import { elementsData } from "@/constants/elements_data";
import styles from "./styles.module.css";

export default function PeriodicTable() {
  return (
    <div className={styles.base}>
      {elementsData.map(element => (
        <ElementCell key={element.number} element={element} />
      ))}
    </div>
  );
}
