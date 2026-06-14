"use client";

import { parseAsStringLiteral, useQueryState } from "nuqs";
import clsx from "clsx";
import PeriodicTable from "@/app/ui/periodic-table";
import ElementCardOverlay from "@/app/ui/element-card-overlay";
import QuickBar from "../quick-bar";
import { getElementDataBySymbol } from "@/app/lib/utils";
import {
  defaultDisplayMode,
  displayModeValues,
  displayModeOptions,
  type DisplayMode,
} from "@/app/lib/display-mode";
import type { ElementData } from "@/app/lib/elements-data";
import { elementSymbols } from "@/app/lib/elements";
import styles from "./styles.module.css";

export default function PeriodicTableView() {
  // Manage query state
  const [elementSymbol, setElementSymbol] = useQueryState(
    "element",
    parseAsStringLiteral(elementSymbols)
  );
  const [displayMode, setDisplayMode] = useQueryState(
    "display_mode",
    parseAsStringLiteral(displayModeValues).withDefault(defaultDisplayMode)
  );

  // Define handlers
  const handleElementClick = (symbol: string) => setElementSymbol(symbol);
  const handleClose = () => setElementSymbol(null);
  const handleDisplayModeChange = (newDisplayMode: DisplayMode) => {
    setDisplayMode(newDisplayMode);
  };

  // Get selected element data
  let selectedElement: ElementData | null = null;
  if (elementSymbol) {
    selectedElement = getElementDataBySymbol(elementSymbol);
  }

  return (
    <div>
      {/* Content layer: toolbar and table, made inert while an overlay is open */}
      <main className={clsx(selectedElement && styles.inertMain)}>
        <QuickBar
          displayMode={displayMode}
          onDisplayModeChange={handleDisplayModeChange}
          options={displayModeOptions}
        />
        <div className={styles.tableWrapper}>
          <PeriodicTable onElementClick={handleElementClick} displayMode={displayMode} />
        </div>
      </main>

      {/* Overlay layer: modal */}
      <ElementCardOverlay
        selectedElement={selectedElement}
        onClose={handleClose}
        onNavigate={handleElementClick}
      />
    </div>
  );
}
