import { Suspense } from "react";
import { redirect } from "next/navigation";
import PeriodicTableView from "@/app/ui/periodic-table-view";
import { getElementDataBySymbol } from "@/app/lib/utils";
import styles from "./page.module.css";

type SearchParams = {
  element?: string | string[];
};

export default async function Home({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const resolvedSearchParams = await searchParams;
  const rawElement = resolvedSearchParams?.element;
  const elementSymbol = Array.isArray(rawElement) ? rawElement[0] : rawElement;

  if (elementSymbol && !getElementDataBySymbol(elementSymbol)) {
    redirect("/");
  }

  return (
    <div className={styles.page}>
      {/* TODO: Create skeleton UI component */}
      <Suspense fallback={<div>Loading...</div>}>
        <PeriodicTableView />
      </Suspense>
    </div>
  );
}
