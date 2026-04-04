import clsx from "clsx";

import { ubuntu } from "@/app/lib/fonts";
import type { GuideCell } from "@/app/lib/guide-data";
import styles from "./styles.module.css";

interface GuideCellProps {
  cell: GuideCell;
}

export default function GuideCell({ cell }: GuideCellProps) {
  const { type, display, style } = cell;

  const classes = clsx(
    styles.base,
    ubuntu.className,
    type === "period" ? styles.period : styles.group
  );

  return (
    <div className={classes} style={{ gridRowStart: style.row, gridColumnStart: style.column }}>
      {display}
    </div>
  );
}
