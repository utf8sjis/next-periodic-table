import clsx from "clsx";

import { getElementDataBySymbol } from "@/utils/elements_data";
import type { ElementData } from "@/constants/elements_data";
import styles from "./styles.module.css";
import gridRow from "@/styles/grid_row.module.css";
import gridColumn from "@/styles/grid_column.module.css";
import textColor from "@/styles/text_color.module.css";
import bgColor from "@/styles/bg_color.module.css";
import borderColor from "@/styles/border_color.module.css";
import fontFamily from "@/styles/font_family.module.css";

interface ElementBoxProps {
  element: ElementData;
}

function getGridClasses(element: ElementData): string[] {
  let rowOffset = 0;
  let colOffset = 0;

  switch (element.categoryId) {
    case "la":
      rowOffset = 2;
      colOffset = element.number - getElementDataBySymbol("La").number;
      break;
    case "ac":
      rowOffset = 2;
      colOffset = element.number - getElementDataBySymbol("Ac").number;
      break;
  }

  return [
    gridRow[`start${element.period + rowOffset}`],
    gridColumn[`start${element.group + colOffset}`],
  ];
}

export default function ElementBox({ element }: ElementBoxProps) {
  const classes = clsx(
    styles.base,
    ...getGridClasses(element),
    textColor[element.categoryId === "h" ? "h-content" : "content"],
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
