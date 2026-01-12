import clsx from "clsx";

import { ubuntu } from "@/app/lib/fonts";
import type { GuideCell } from "@/app/lib/guide-data";
import styles from "./styles.module.css";
import gridRow from "@/app/styles/grid_row.module.css";
import gridColumn from "@/app/styles/grid_column.module.css";

interface GuideCellProps {
  cell: GuideCell;
}

export default function GuideCell({ cell }: GuideCellProps) {
  const { type, display, style } = cell;

  const classes = clsx(
    styles.base,
    ubuntu.className,
    type === "period" ? styles.period : styles.group,
    gridRow[`start${style.row}`],
    gridColumn[`start${style.column}`]
  );

  return <div className={classes}>{display}</div>;
}
