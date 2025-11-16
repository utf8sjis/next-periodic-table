import { elementsData } from "@/app/lib/elements-data";
import type { ElementData } from "@/app/lib/elements-data";

export function getElementDataBySymbol(symbol: string): ElementData {
  const element = elementsData.find(element => element.symbol === symbol);
  if (!element) {
    throw new Error(`Element data with symbol ${symbol} not found`);
  }
  return element;
}
