import { elementsData } from "@/constants/elements_data";
import type { ElementData } from "@/constants/elements_data";

export function getElementDataBySymbol(symbol: string): ElementData {
  const element = elementsData.find(element => element.symbol === symbol);
  if (!element) {
    throw new Error(`Element data with symbol ${symbol} not found`);
  }
  return element;
}
