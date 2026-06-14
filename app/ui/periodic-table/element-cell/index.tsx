import clsx from "clsx";

import { ubuntu } from "@/app/lib/fonts";
import type { ElementData } from "@/app/lib/elements-data";
import { CategoryId } from "@/app/lib/elements-data";
import { acNumber, laNumber } from "@/app/lib/elements";
import { type DisplayMode } from "@/app/lib/display-mode";
import styles from "./styles.module.css";
import periodicAccent from "@/app/styles/periodic_accent.module.css";
import fontFamily from "@/app/styles/font_family.module.css";

interface ElementCellProps {
  element: ElementData;
  onElementClick: (symbol: string) => void;
  displayMode: DisplayMode;
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
  if (el.categoryId === CategoryId.Lanthanide) return 1 + el.group + el.number - laNumber;
  if (el.categoryId === CategoryId.Actinide) return 1 + el.group + el.number - acNumber;
  // guide label offset + group number
  return 1 + el.group;
}

function getDisplayData(
  element: ElementData,
  displayMode: DisplayMode
): { className: string; text: string } {
  switch (displayMode) {
    case "zh-cn":
      return {
        className: clsx(styles.displayZh, fontFamily.zhCN),
        text: element.name.zh.cn.display,
      };
    case "zh-hk":
      return {
        className: clsx(styles.displayZh, fontFamily.zhHK),
        text: element.name.zh.hk.display,
      };
    case "ja":
      return { className: styles.displayJa, text: element.name.ja.display };
    case "en":
      return { className: clsx(styles.displayEn, ubuntu.className), text: element.name.en.display };
    case "number":
      return {
        className: clsx(styles.displayNumber, ubuntu.className),
        text: String(element.number),
      };
    case "zh-tw":
    default:
      return {
        className: clsx(styles.displayZh, fontFamily.zhTW),
        text: element.name.zh.tw.display,
      };
  }
}

export default function ElementCell({ element, onElementClick, displayMode }: ElementCellProps) {
  const classes = clsx(styles.base, periodicAccent[element.categoryId]);
  const { className: displayClassName, text: displayText } = getDisplayData(element, displayMode);

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
      <div className={displayClassName}>{displayText}</div>
    </button>
  );
}
