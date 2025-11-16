import clsx from "clsx";

import styles from "./styles.module.css";
import gridRow from "@/app/styles/grid_row.module.css";
import gridColumn from "@/app/styles/grid_column.module.css";
import type { GuideCell } from "@/app/lib/guide-data";

interface GuideCellProps {
  cell: GuideCell;
}

export default function GuideCell({ cell: { display, style } }: GuideCellProps) {
  const classes = clsx(
    styles.base,
    gridRow[`start${style.row}`],
    gridColumn[`start${style.column}`]
  );

  return <div className={classes}>{display}</div>;
}
