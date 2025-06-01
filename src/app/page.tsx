import PeriodicTable from "@/components/periodic_table";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Periodic Table v2</h1>
        <PeriodicTable />
      </main>
    </div>
  );
}
