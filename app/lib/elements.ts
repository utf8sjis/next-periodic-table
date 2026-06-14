import { elementsData } from "./elements-data";
import { getElementDataBySymbol } from "@/app/lib/utils";

// For query state validation
export const elementSymbols = elementsData.map(el => el.symbol);

// For periodic table layout calculations
export const laNumber = getElementDataBySymbol("La")!.number;
export const acNumber = getElementDataBySymbol("Ac")!.number;
export const fBlockSpan = 14;
