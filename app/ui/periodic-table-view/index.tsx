"use client";

import { useSearchParams, useRouter } from "next/navigation";
import clsx from "clsx";
import PeriodicTable from "@/app/ui/periodic-table";
import ElementDetailOverlay from "@/app/ui/element-detail-overlay";
import { getElementDataBySymbol } from "@/app/lib/utils";
import type { ElementData } from "@/app/lib/elements-data";
import styles from "./styles.module.css";

export default function PeriodicTableView() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const elementSymbol = searchParams.get("element");

  // Get selected element data
  let selectedElement: ElementData | null = null;
  if (elementSymbol) {
    try {
      selectedElement = getElementDataBySymbol(elementSymbol);
    } catch (error) {
      // Invalid element symbol, ignore
      console.warn(error);
    }
  }

  // Handle element click
  const handleElementClick = (symbol: string) => {
    router.push(`?element=${symbol}`);
  };

  // Handle overlay close
  const handleClose = () => {
    router.push("/");
  };

  return (
    <div>
      <main className={clsx(styles.main, selectedElement && styles.blurred)}>
        <PeriodicTable onElementClick={handleElementClick} />
      </main>
      <ElementDetailOverlay selectedElement={selectedElement} onClose={handleClose} />
    </div>
  );
}
