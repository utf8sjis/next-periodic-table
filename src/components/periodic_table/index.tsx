import ElementBox from "@/components/element_box";
import { elementsData } from "@/constants/elements_data";
import styles from "./styles.module.css";

export default function PeriodicTable() {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        {elementsData.map((element) => (
          <ElementBox key={element.number} element={element} />
        ))}
      </div>
    </div>
  );
}
