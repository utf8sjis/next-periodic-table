import PeriodicTable from "@/app/ui/periodic-table";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PeriodicTable />
      </main>
    </div>
  );
}
