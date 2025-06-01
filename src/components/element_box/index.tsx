import { getElementDataBySymbol } from "@/utils/elements_data";
import { periodicTableColors } from "@/constants/colors";
import { periodicTableTextColors } from "@/constants/colors";
import { fontFamily } from "@/constants/font_family";
import type { ElementData } from "@/constants/elements_data";
import styles from "./styles.module.css";

interface ElementBoxProps {
  element: ElementData;
}

function getGridVariables(element: ElementData): React.CSSProperties {
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

  return {
    "--row": `${element.period + rowOffset}`,
    "--col": `${element.group + colOffset}`,
  } as React.CSSProperties;
}

function getColorVariables(element: ElementData): React.CSSProperties {
  return {
    "--color": periodicTableColors[element.categoryId],
  } as React.CSSProperties;
}

function getTextColorVariables(element: ElementData): React.CSSProperties {
  return {
    "--text-color":
      element.categoryId === "h" ? periodicTableTextColors.h : periodicTableTextColors.others,
  } as React.CSSProperties;
}

function getFontFamilyVariables(locale: keyof typeof fontFamily): React.CSSProperties {
  return {
    "--font-family": fontFamily[locale].join(", "),
  } as React.CSSProperties;
}

export default function ElementBox({ element }: ElementBoxProps) {
  const cssVariables = {
    ...getGridVariables(element),
    ...getColorVariables(element),
    ...getTextColorVariables(element),
    ...getFontFamilyVariables("zh-tw"),
  };

  return (
    <div className={styles.base} style={cssVariables}>
      <div className={styles.display}>{element.name.zh.tw.display}</div>
    </div>
  );
}
