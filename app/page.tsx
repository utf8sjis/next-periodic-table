import { Suspense } from "react";
import PeriodicTableView from "@/app/ui/periodic-table-view";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* TODO: Create skeleton UI component */}
      <Suspense fallback={<div>Loading...</div>}>
        <PeriodicTableView />
      </Suspense>
    </div>
  );
}
