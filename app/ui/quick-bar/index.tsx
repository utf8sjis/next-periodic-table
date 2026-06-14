import clsx from "clsx";
import { type DisplayMode } from "@/app/lib/display-mode";
import styles from "./styles.module.css";

interface QuickBarProps {
  displayMode: DisplayMode;
  onDisplayModeChange: (displayMode: DisplayMode) => void;
  options: ReadonlyArray<{ value: DisplayMode; label: string }>;
}

export default function QuickBar({ displayMode, onDisplayModeChange, options }: QuickBarProps) {
  return (
    <div className={styles.quickBar} aria-label="Table display controls">
      <div className={styles.island}>
        <div className={styles.quickTitle}>DISPLAY</div>
        <div className={styles.modeButtons} role="radiogroup" aria-label="Table display mode">
          {options.map(option => (
            <button
              key={option.value}
              className={clsx(
                styles.modeButton,
                option.value === displayMode && styles.modeButtonActive
              )}
              onClick={() => onDisplayModeChange(option.value)}
              role="radio"
              aria-checked={option.value === displayMode}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
