import { elementsData } from "@/app/lib/elements-data";
import type { ElementData } from "@/app/lib/elements-data";

export const getElementDataBySymbol = (symbol: string): ElementData | null => {
  return elementsData.find(element => element.symbol === symbol) ?? null;
};

export const getElementDataByNumber = (number: number): ElementData | null => {
  return elementsData.find(element => element.number === number) ?? null;
};
