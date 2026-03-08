import clsx from "clsx";

import { getElementDataBySymbol } from "@/app/lib/utils";
import type { ElementData } from "@/app/lib/elements-data";
import { CategoryId } from "@/app/lib/elements-data";
import styles from "./styles.module.css";
import periodicAccent from "@/app/styles/periodic_accent.module.css";
import gridRow from "@/app/styles/grid_row.module.css";
import gridColumn from "@/app/styles/grid_column.module.css";
import fontFamily from "@/app/styles/font_family.module.css";

interface ElementCellProps {
  element: ElementData;
  onElementClick: (symbol: string) => void;
}

function getGridClasses(element: ElementData): string[] {
  let rowOffset = 1;
  let colOffset = 1;

  switch (element.categoryId) {
    case CategoryId.Lanthanide:
      rowOffset = 3;
      colOffset = element.number - getElementDataBySymbol("La").number + 1;
      break;
    case CategoryId.Actinide:
      rowOffset = 3;
      colOffset = element.number - getElementDataBySymbol("Ac").number + 1;
      break;
  }

  return [
    gridRow[`start${element.period + rowOffset}`],
    gridColumn[`start${element.group + colOffset}`],
  ];
}

export default function ElementCell({ element, onElementClick }: ElementCellProps) {
  const classes = clsx(
    styles.base,
    ...getGridClasses(element),
    periodicAccent[element.categoryId],
    fontFamily.zhTW
  );

  const handleClick = () => {
    onElementClick(element.symbol);
  };

  return (
    <button className={classes} onClick={handleClick} aria-label={element.name.ja.display}>
      <div className={styles.display}>{element.name.zh.tw.display}</div>
    </button>
  );
}
