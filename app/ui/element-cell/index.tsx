import clsx from "clsx";

import type { ElementData } from "@/app/lib/elements-data";
import { CategoryId } from "@/app/lib/elements-data";
import { AC_NUMBER, LA_NUMBER } from "@/app/lib/constants";
import styles from "./styles.module.css";
import periodicAccent from "@/app/styles/periodic_accent.module.css";
import fontFamily from "@/app/styles/font_family.module.css";

interface ElementCellProps {
  element: ElementData;
  onElementClick: (symbol: string) => void;
}

function getGridRow(el: ElementData): number {
  if (el.categoryId === CategoryId.Lanthanide || el.categoryId === CategoryId.Actinide) {
    // guide label offset (1) + f-block offset (2) + period number
    return 3 + el.period;
  }
  // guide label offset + period number
  return 1 + el.period;
}

function getGridColumn(el: ElementData): number {
  // guide label offset + group 3 + lanthanide/actinide index
  if (el.categoryId === CategoryId.Lanthanide) return 1 + el.group + el.number - LA_NUMBER;
  if (el.categoryId === CategoryId.Actinide) return 1 + el.group + el.number - AC_NUMBER;
  // guide label offset + group number
  return 1 + el.group;
}

export default function ElementCell({ element, onElementClick }: ElementCellProps) {
  const classes = clsx(styles.base, periodicAccent[element.categoryId], fontFamily.zhTW);

  const handleClick = () => {
    onElementClick(element.symbol);
  };

  return (
    <button
      className={classes}
      style={{ gridRowStart: getGridRow(element), gridColumnStart: getGridColumn(element) }}
      onClick={handleClick}
      aria-label={element.name.ja.display}
    >
      <div className={styles.display}>{element.name.zh.tw.display}</div>
    </button>
  );
}
