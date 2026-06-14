// Display mode types
export const displayModeValues = ["zh-cn", "zh-tw", "zh-hk", "ja", "en", "number"] as const;
export type DisplayMode = (typeof displayModeValues)[number];

// Default display mode
export const defaultDisplayMode: DisplayMode = "zh-tw";

// Display mode options for UI controls
export const displayModeOptions: ReadonlyArray<{ value: DisplayMode; label: string }> = [
  { value: "zh-cn", label: "大陸簡体" },
  { value: "zh-tw", label: "台湾正体" },
  { value: "zh-hk", label: "香港繁体" },
  { value: "ja", label: "日本語" },
  { value: "en", label: "英語" },
  { value: "number", label: "原子番号" },
];
