import clsx from "clsx";

import { getElementDataBySymbol } from "@/app/lib/utils";
import type { ElementData } from "@/app/lib/elements-data";
import { CategoryId } from "@/app/lib/elements-data";
import styles from "./styles.module.css";
import gridRow from "@/app/styles/grid_row.module.css";
import gridColumn from "@/app/styles/grid_column.module.css";
import textColor from "@/app/styles/text_color.module.css";
import bgColor from "@/app/styles/bg_color.module.css";
import borderColor from "@/app/styles/border_color.module.css";
import fontFamily from "@/app/styles/font_family.module.css";

interface ElementCellProps {
  element: ElementData;
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

export default function ElementCell({ element }: ElementCellProps) {
  const classes = clsx(
    styles.base,
    ...getGridClasses(element),
    textColor[element.categoryId === CategoryId.Hydrogen ? "h-content" : "content"],
    bgColor[element.categoryId],
    borderColor[element.categoryId],
    fontFamily.zhTW
  );

  return (
    <div className={classes}>
      <div className={styles.display}>{element.name.zh.tw.display}</div>
    </div>
  );
}
