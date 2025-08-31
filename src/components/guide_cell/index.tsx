import clsx from "clsx";

import styles from "./styles.module.css";
import gridRow from "@/styles/grid_row.module.css";
import gridColumn from "@/styles/grid_column.module.css";
import { Cell } from "@/types/cell";

interface GuideCellProps {
  cell: Cell;
}

export default function GuideCell({ cell: { display, style } }: GuideCellProps) {
  const classes = clsx(
    styles.base,
    gridRow[`start${style.row}`],
    gridColumn[`start${style.column}`]
  );

  return <div className={classes}>{display}</div>;
}
