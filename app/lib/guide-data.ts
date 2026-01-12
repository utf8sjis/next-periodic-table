export type GuideCell = {
  type: "period" | "group";
  display: string;
  style: {
    row: number;
    column: number;
  };
};

export const periodGuideCells: GuideCell[] = [
  { type: "period", display: "1", style: { row: 2, column: 1 } },
  { type: "period", display: "2", style: { row: 3, column: 1 } },
  { type: "period", display: "3", style: { row: 4, column: 1 } },
  { type: "period", display: "4", style: { row: 5, column: 1 } },
  { type: "period", display: "5", style: { row: 6, column: 1 } },
  { type: "period", display: "6", style: { row: 7, column: 1 } },
  { type: "period", display: "7", style: { row: 8, column: 1 } },
];

export const groupGuideCells: GuideCell[] = [
  { type: "group", display: "1", style: { row: 1, column: 2 } },
  { type: "group", display: "2", style: { row: 2, column: 3 } },
  { type: "group", display: "3", style: { row: 4, column: 4 } },
  { type: "group", display: "4", style: { row: 4, column: 5 } },
  { type: "group", display: "5", style: { row: 4, column: 6 } },
  { type: "group", display: "6", style: { row: 4, column: 7 } },
  { type: "group", display: "7", style: { row: 4, column: 8 } },
  { type: "group", display: "8", style: { row: 4, column: 9 } },
  { type: "group", display: "9", style: { row: 4, column: 10 } },
  { type: "group", display: "10", style: { row: 4, column: 11 } },
  { type: "group", display: "11", style: { row: 4, column: 12 } },
  { type: "group", display: "12", style: { row: 4, column: 13 } },
  { type: "group", display: "13", style: { row: 2, column: 14 } },
  { type: "group", display: "14", style: { row: 2, column: 15 } },
  { type: "group", display: "15", style: { row: 2, column: 16 } },
  { type: "group", display: "16", style: { row: 2, column: 17 } },
  { type: "group", display: "17", style: { row: 2, column: 18 } },
  { type: "group", display: "18", style: { row: 1, column: 19 } },
];
