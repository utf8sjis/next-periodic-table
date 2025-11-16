export type CategoryId =
  | "h"
  | "he"
  | "li"
  | "be"
  | "b"
  | "c"
  | "n"
  | "o"
  | "f"
  | "ca"
  | "zn"
  | "fe"
  | "pt"
  | "la"
  | "ac"
  | "trans";

export type ElementData = Readonly<{
  number: number;
  symbol: string;
  period: number;
  group: number;
  name: {
    ja: {
      display: string;
      yomigana: string;
    };
    en: {
      display: string;
    };
    zh: {
      cn: {
        display: string;
        pinyin: string;
        unicode: string;
      };
      tw: {
        display: string;
        bopomofo: string;
        pinyin: string;
        pronunciationAlternative: string;
        unicode: string;
      };
      hk: {
        display: string;
        unicode: string;
      };
    };
  };
  isRadioactive: boolean;
  atomicWeight: string;
  categoryId: CategoryId;
  categoryList: string[];
}>;

export const elementsData: Readonly<ElementData[]> = [
  {
    number: 1,
    symbol: "H",
    period: 1,
    group: 1,
    name: {
      ja: {
        display: "水素",
        yomigana: "すいそ",
      },
      en: {
        display: "Hydrogen",
      },
      zh: {
        cn: {
          display: "氢",
          pinyin: "qīng",
          unicode: "6C22",
        },
        tw: {
          display: "氫",
          bopomofo: "ㄑㄧㄥ",
          pinyin: "qīng",
          pronunciationAlternative: "輕",
          unicode: "6C2B",
        },
        hk: {
          display: "氫",
          unicode: "6C2B",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "1.008",
    categoryId: "h",
    categoryList: ["典型元素"],
  },
  {
    number: 2,
    symbol: "He",
    period: 1,
    group: 18,
    name: {
      ja: {
        display: "ヘリウム",
        yomigana: "へりうむ",
      },
      en: {
        display: "Helium",
      },
      zh: {
        cn: {
          display: "氦",
          pinyin: "hài",
          unicode: "6C26",
        },
        tw: {
          display: "氦",
          bopomofo: "ㄏㄞˋ",
          pinyin: "hài",
          pronunciationAlternative: "亥",
          unicode: "6C26",
        },
        hk: {
          display: "氦",
          unicode: "6C26",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "4.003",
    categoryId: "he",
    categoryList: ["典型元素", "貴ガス"],
  },
  {
    number: 3,
    symbol: "Li",
    period: 2,
    group: 1,
    name: {
      ja: {
        display: "リチウム",
        yomigana: "りちうむ",
      },
      en: {
        display: "Lithium",
      },
      zh: {
        cn: {
          display: "锂",
          pinyin: "lǐ",
          unicode: "9502",
        },
        tw: {
          display: "鋰",
          bopomofo: "ㄌㄧˇ",
          pinyin: "lǐ",
          pronunciationAlternative: "里",
          unicode: "92F0",
        },
        hk: {
          display: "鋰",
          unicode: "92F0",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "6.941",
    categoryId: "li",
    categoryList: ["典型元素", "アルカリ金属"],
  },
  {
    number: 4,
    symbol: "Be",
    period: 2,
    group: 2,
    name: {
      ja: {
        display: "ベリリウム",
        yomigana: "べりりうむ",
      },
      en: {
        display: "Beryllium",
      },
      zh: {
        cn: {
          display: "铍",
          pinyin: "pí",
          unicode: "94CD",
        },
        tw: {
          display: "鈹",
          bopomofo: "ㄆㄧˊ",
          pinyin: "pí",
          pronunciationAlternative: "皮",
          unicode: "9239",
        },
        hk: {
          display: "鈹",
          unicode: "9239",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "9.012",
    categoryId: "be",
    categoryList: ["典型元素"],
  },
  {
    number: 5,
    symbol: "B",
    period: 2,
    group: 13,
    name: {
      ja: {
        display: "ホウ素",
        yomigana: "ほうそ",
      },
      en: {
        display: "Boron",
      },
      zh: {
        cn: {
          display: "硼",
          pinyin: "péng",
          unicode: "787C",
        },
        tw: {
          display: "硼",
          bopomofo: "ㄆㄥˊ",
          pinyin: "péng",
          pronunciationAlternative: "朋",
          unicode: "787C",
        },
        hk: {
          display: "硼",
          unicode: "787C",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "10.81",
    categoryId: "b",
    categoryList: ["典型元素", "ホウ素族"],
  },
  {
    number: 6,
    symbol: "C",
    period: 2,
    group: 14,
    name: {
      ja: {
        display: "炭素",
        yomigana: "たんそ",
      },
      en: {
        display: "Carbon",
      },
      zh: {
        cn: {
          display: "碳",
          pinyin: "tàn",
          unicode: "78B3",
        },
        tw: {
          display: "碳",
          bopomofo: "ㄊㄢˋ",
          pinyin: "tàn",
          pronunciationAlternative: "炭",
          unicode: "78B3",
        },
        hk: {
          display: "碳",
          unicode: "78B3",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "12.01",
    categoryId: "c",
    categoryList: ["典型元素", "炭素族"],
  },
  {
    number: 7,
    symbol: "N",
    period: 2,
    group: 15,
    name: {
      ja: {
        display: "窒素",
        yomigana: "ちっそ",
      },
      en: {
        display: "Nitrogen",
      },
      zh: {
        cn: {
          display: "氮",
          pinyin: "dàn",
          unicode: "6C2E",
        },
        tw: {
          display: "氮",
          bopomofo: "ㄉㄢˋ",
          pinyin: "dàn",
          pronunciationAlternative: "淡",
          unicode: "6C2E",
        },
        hk: {
          display: "氮",
          unicode: "6C2E",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "14.01",
    categoryId: "n",
    categoryList: ["典型元素", "窒素族"],
  },
  {
    number: 8,
    symbol: "O",
    period: 2,
    group: 16,
    name: {
      ja: {
        display: "酸素",
        yomigana: "さんそ",
      },
      en: {
        display: "Oxygen",
      },
      zh: {
        cn: {
          display: "氧",
          pinyin: "yǎng",
          unicode: "6C27",
        },
        tw: {
          display: "氧",
          bopomofo: "ㄧㄤˇ",
          pinyin: "yǎng",
          pronunciationAlternative: "養",
          unicode: "6C27",
        },
        hk: {
          display: "氧",
          unicode: "6C27",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "16.00",
    categoryId: "o",
    categoryList: ["典型元素", "酸素族"],
  },
  {
    number: 9,
    symbol: "F",
    period: 2,
    group: 17,
    name: {
      ja: {
        display: "フッ素",
        yomigana: "ふっそ",
      },
      en: {
        display: "Fluorine",
      },
      zh: {
        cn: {
          display: "氟",
          pinyin: "fú",
          unicode: "6C1F",
        },
        tw: {
          display: "氟",
          bopomofo: "ㄈㄨˊ",
          pinyin: "fú",
          pronunciationAlternative: "弗",
          unicode: "6C1F",
        },
        hk: {
          display: "氟",
          unicode: "6C1F",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "19.00",
    categoryId: "f",
    categoryList: ["典型元素", "ハロゲン"],
  },
  {
    number: 10,
    symbol: "Ne",
    period: 2,
    group: 18,
    name: {
      ja: {
        display: "ネオン",
        yomigana: "ねおん",
      },
      en: {
        display: "Neon",
      },
      zh: {
        cn: {
          display: "氖",
          pinyin: "nǎi",
          unicode: "6C16",
        },
        tw: {
          display: "氖",
          bopomofo: "ㄋㄞˇ",
          pinyin: "nǎi",
          pronunciationAlternative: "乃",
          unicode: "6C16",
        },
        hk: {
          display: "氖",
          unicode: "6C16",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "20.18",
    categoryId: "he",
    categoryList: ["典型元素", "貴ガス"],
  },
  {
    number: 11,
    symbol: "Na",
    period: 3,
    group: 1,
    name: {
      ja: {
        display: "ナトリウム",
        yomigana: "なとりうむ",
      },
      en: {
        display: "Sodium",
      },
      zh: {
        cn: {
          display: "钠",
          pinyin: "nà",
          unicode: "94A0",
        },
        tw: {
          display: "鈉",
          bopomofo: "ㄋㄚˋ",
          pinyin: "nà",
          pronunciationAlternative: "納",
          unicode: "9209",
        },
        hk: {
          display: "鈉",
          unicode: "9209",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "22.99",
    categoryId: "li",
    categoryList: ["典型元素", "アルカリ金属"],
  },
  {
    number: 12,
    symbol: "Mg",
    period: 3,
    group: 2,
    name: {
      ja: {
        display: "マグネシウム",
        yomigana: "まぐねしうむ",
      },
      en: {
        display: "Magnesium",
      },
      zh: {
        cn: {
          display: "镁",
          pinyin: "měi",
          unicode: "9541",
        },
        tw: {
          display: "鎂",
          bopomofo: "ㄇㄟˇ",
          pinyin: "měi",
          pronunciationAlternative: "美",
          unicode: "9382",
        },
        hk: {
          display: "鎂",
          unicode: "9382",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "24.31",
    categoryId: "be",
    categoryList: ["典型元素"],
  },
  {
    number: 13,
    symbol: "Al",
    period: 3,
    group: 13,
    name: {
      ja: {
        display: "アルミニウム",
        yomigana: "あるみにうむ",
      },
      en: {
        display: "Aluminium",
      },
      zh: {
        cn: {
          display: "铝",
          pinyin: "lǚ",
          unicode: "94DD",
        },
        tw: {
          display: "鋁",
          bopomofo: "ㄌㄩˇ",
          pinyin: "lǚ",
          pronunciationAlternative: "呂",
          unicode: "92C1",
        },
        hk: {
          display: "鋁",
          unicode: "92C1",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "26.98",
    categoryId: "b",
    categoryList: ["典型元素", "ホウ素族"],
  },
  {
    number: 14,
    symbol: "Si",
    period: 3,
    group: 14,
    name: {
      ja: {
        display: "ケイ素",
        yomigana: "けいそ",
      },
      en: {
        display: "Silicon",
      },
      zh: {
        cn: {
          display: "硅",
          pinyin: "guī",
          unicode: "7845",
        },
        tw: {
          display: "矽",
          bopomofo: "ㄒㄧˋ",
          pinyin: "xì",
          pronunciationAlternative: "夕",
          unicode: "77FD",
        },
        hk: {
          display: "矽",
          unicode: "77FD",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "28.09",
    categoryId: "c",
    categoryList: ["典型元素", "炭素族"],
  },
  {
    number: 15,
    symbol: "P",
    period: 3,
    group: 15,
    name: {
      ja: {
        display: "リン",
        yomigana: "りん",
      },
      en: {
        display: "Phosphorus",
      },
      zh: {
        cn: {
          display: "磷",
          pinyin: "lín",
          unicode: "78F7",
        },
        tw: {
          display: "磷",
          bopomofo: "ㄌㄧㄣˊ",
          pinyin: "lín",
          pronunciationAlternative: "鄰",
          unicode: "78F7",
        },
        hk: {
          display: "磷",
          unicode: "78F7",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "30.97",
    categoryId: "n",
    categoryList: ["典型元素", "窒素族"],
  },
  {
    number: 16,
    symbol: "S",
    period: 3,
    group: 16,
    name: {
      ja: {
        display: "硫黄",
        yomigana: "いおう",
      },
      en: {
        display: "Sulfur",
      },
      zh: {
        cn: {
          display: "硫",
          pinyin: "liú",
          unicode: "786B",
        },
        tw: {
          display: "硫",
          bopomofo: "ㄌㄧㄡˊ",
          pinyin: "liú",
          pronunciationAlternative: "流",
          unicode: "786B",
        },
        hk: {
          display: "硫",
          unicode: "786B",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "32.07",
    categoryId: "o",
    categoryList: ["典型元素", "酸素族"],
  },
  {
    number: 17,
    symbol: "Cl",
    period: 3,
    group: 17,
    name: {
      ja: {
        display: "塩素",
        yomigana: "えんそ",
      },
      en: {
        display: "Chlorine",
      },
      zh: {
        cn: {
          display: "氯",
          pinyin: "lǜ",
          unicode: "6C2F",
        },
        tw: {
          display: "氯",
          bopomofo: "ㄌㄩˋ",
          pinyin: "lǜ",
          pronunciationAlternative: "綠",
          unicode: "6C2F",
        },
        hk: {
          display: "氯",
          unicode: "6C2F",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "35.45",
    categoryId: "f",
    categoryList: ["典型元素", "ハロゲン"],
  },
  {
    number: 18,
    symbol: "Ar",
    period: 3,
    group: 18,
    name: {
      ja: {
        display: "アルゴン",
        yomigana: "あるごん",
      },
      en: {
        display: "Argon",
      },
      zh: {
        cn: {
          display: "氩",
          pinyin: "yà",
          unicode: "6C29",
        },
        tw: {
          display: "氬",
          bopomofo: "ㄧㄚˇ",
          pinyin: "yǎ",
          pronunciationAlternative: "亞",
          unicode: "6C2C",
        },
        hk: {
          display: "氬",
          unicode: "6C2C",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "39.95",
    categoryId: "he",
    categoryList: ["典型元素", "貴ガス"],
  },
  {
    number: 19,
    symbol: "K",
    period: 4,
    group: 1,
    name: {
      ja: {
        display: "カリウム",
        yomigana: "かりうむ",
      },
      en: {
        display: "Potassium",
      },
      zh: {
        cn: {
          display: "钾",
          pinyin: "jiǎ",
          unicode: "94BE",
        },
        tw: {
          display: "鉀",
          bopomofo: "ㄐㄧㄚˇ",
          pinyin: "jiǎ",
          pronunciationAlternative: "甲",
          unicode: "9240",
        },
        hk: {
          display: "鉀",
          unicode: "9240",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "39.10",
    categoryId: "li",
    categoryList: ["典型元素", "アルカリ金属"],
  },
  {
    number: 20,
    symbol: "Ca",
    period: 4,
    group: 2,
    name: {
      ja: {
        display: "カルシウム",
        yomigana: "かるしうむ",
      },
      en: {
        display: "Calcium",
      },
      zh: {
        cn: {
          display: "钙",
          pinyin: "gài",
          unicode: "9499",
        },
        tw: {
          display: "鈣",
          bopomofo: "ㄍㄞˋ",
          pinyin: "gài",
          pronunciationAlternative: "丐",
          unicode: "9223",
        },
        hk: {
          display: "鈣",
          unicode: "9223",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "40.08",
    categoryId: "ca",
    categoryList: ["典型元素", "アルカリ土類金属"],
  },
  {
    number: 21,
    symbol: "Sc",
    period: 4,
    group: 3,
    name: {
      ja: {
        display: "スカンジウム",
        yomigana: "すかんじうむ",
      },
      en: {
        display: "Scandium",
      },
      zh: {
        cn: {
          display: "钪",
          pinyin: "kàng",
          unicode: "94AA",
        },
        tw: {
          display: "鈧",
          bopomofo: "ㄎㄤˋ",
          pinyin: "kàng",
          pronunciationAlternative: "亢",
          unicode: "9227",
        },
        hk: {
          display: "鈧",
          unicode: "9227",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "44.96",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 22,
    symbol: "Ti",
    period: 4,
    group: 4,
    name: {
      ja: {
        display: "チタン",
        yomigana: "ちたん",
      },
      en: {
        display: "Titanium",
      },
      zh: {
        cn: {
          display: "钛",
          pinyin: "tài",
          unicode: "949B",
        },
        tw: {
          display: "鈦",
          bopomofo: "ㄊㄞˋ",
          pinyin: "tài",
          pronunciationAlternative: "太",
          unicode: "9226",
        },
        hk: {
          display: "鈦",
          unicode: "9226",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "47.87",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 23,
    symbol: "V",
    period: 4,
    group: 5,
    name: {
      ja: {
        display: "バナジウム",
        yomigana: "ばなじうむ",
      },
      en: {
        display: "Vanadium",
      },
      zh: {
        cn: {
          display: "钒",
          pinyin: "fán",
          unicode: "9492",
        },
        tw: {
          display: "釩",
          bopomofo: "ㄈㄢˊ",
          pinyin: "fán",
          pronunciationAlternative: "凡",
          unicode: "91E9",
        },
        hk: {
          display: "釩",
          unicode: "91E9",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "50.94",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 24,
    symbol: "Cr",
    period: 4,
    group: 6,
    name: {
      ja: {
        display: "クロム",
        yomigana: "くろむ",
      },
      en: {
        display: "Chromium",
      },
      zh: {
        cn: {
          display: "铬",
          pinyin: "gè",
          unicode: "94EC",
        },
        tw: {
          display: "鉻",
          bopomofo: "ㄍㄜˋ",
          pinyin: "gè",
          pronunciationAlternative: "各",
          unicode: "927B",
        },
        hk: {
          display: "鉻",
          unicode: "927B",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "52.00",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 25,
    symbol: "Mn",
    period: 4,
    group: 7,
    name: {
      ja: {
        display: "マンガン",
        yomigana: "まんがん",
      },
      en: {
        display: "Manganese",
      },
      zh: {
        cn: {
          display: "锰",
          pinyin: "měng",
          unicode: "9530",
        },
        tw: {
          display: "錳",
          bopomofo: "ㄇㄥˇ",
          pinyin: "měng",
          pronunciationAlternative: "猛",
          unicode: "9333",
        },
        hk: {
          display: "錳",
          unicode: "9333",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "54.94",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 26,
    symbol: "Fe",
    period: 4,
    group: 8,
    name: {
      ja: {
        display: "鉄",
        yomigana: "てつ",
      },
      en: {
        display: "Iron",
      },
      zh: {
        cn: {
          display: "铁",
          pinyin: "tiě",
          unicode: "94C1",
        },
        tw: {
          display: "鐵",
          bopomofo: "ㄊㄧㄝˇ",
          pinyin: "tiě",
          pronunciationAlternative: "帖",
          unicode: "9435",
        },
        hk: {
          display: "鐵",
          unicode: "9435",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "55.85",
    categoryId: "fe",
    categoryList: ["遷移金属", "鉄族"],
  },
  {
    number: 27,
    symbol: "Co",
    period: 4,
    group: 9,
    name: {
      ja: {
        display: "コバルト",
        yomigana: "こばると",
      },
      en: {
        display: "Cobalt",
      },
      zh: {
        cn: {
          display: "钴",
          pinyin: "gǔ",
          unicode: "94B4",
        },
        tw: {
          display: "鈷",
          bopomofo: "ㄍㄨ",
          pinyin: "gū",
          pronunciationAlternative: "姑",
          unicode: "9237",
        },
        hk: {
          display: "鈷",
          unicode: "9237",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "58.93",
    categoryId: "fe",
    categoryList: ["遷移金属", "鉄族"],
  },
  {
    number: 28,
    symbol: "Ni",
    period: 4,
    group: 10,
    name: {
      ja: {
        display: "ニッケル",
        yomigana: "にっける",
      },
      en: {
        display: "Nickel",
      },
      zh: {
        cn: {
          display: "镍",
          pinyin: "niè",
          unicode: "954D",
        },
        tw: {
          display: "鎳",
          bopomofo: "ㄋㄧㄝˋ",
          pinyin: "niè",
          pronunciationAlternative: "臬",
          unicode: "93B3",
        },
        hk: {
          display: "鎳",
          unicode: "93B3",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "58.69",
    categoryId: "fe",
    categoryList: ["遷移金属", "鉄族"],
  },
  {
    number: 29,
    symbol: "Cu",
    period: 4,
    group: 11,
    name: {
      ja: {
        display: "銅",
        yomigana: "どう",
      },
      en: {
        display: "Copper",
      },
      zh: {
        cn: {
          display: "铜",
          pinyin: "tóng",
          unicode: "94DC",
        },
        tw: {
          display: "銅",
          bopomofo: "ㄊㄨㄥˊ",
          pinyin: "tóng",
          pronunciationAlternative: "同",
          unicode: "9285",
        },
        hk: {
          display: "銅",
          unicode: "9285",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "63.55",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 30,
    symbol: "Zn",
    period: 4,
    group: 12,
    name: {
      ja: {
        display: "亜鉛",
        yomigana: "あえん",
      },
      en: {
        display: "Zinc",
      },
      zh: {
        cn: {
          display: "锌",
          pinyin: "xīn",
          unicode: "950C",
        },
        tw: {
          display: "鋅",
          bopomofo: "ㄒㄧㄣ",
          pinyin: "xīn",
          pronunciationAlternative: "辛",
          unicode: "92C5",
        },
        hk: {
          display: "鋅",
          unicode: "92C5",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "65.38",
    categoryId: "zn",
    categoryList: ["典型元素", "亜鉛族"],
  },
  {
    number: 31,
    symbol: "Ga",
    period: 4,
    group: 13,
    name: {
      ja: {
        display: "ガリウム",
        yomigana: "がりうむ",
      },
      en: {
        display: "Gallium",
      },
      zh: {
        cn: {
          display: "镓",
          pinyin: "jiā",
          unicode: "9553",
        },
        tw: {
          display: "鎵",
          bopomofo: "ㄐㄧㄚ",
          pinyin: "jiā",
          pronunciationAlternative: "家",
          unicode: "93B5",
        },
        hk: {
          display: "鎵",
          unicode: "93B5",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "69.72",
    categoryId: "b",
    categoryList: ["典型元素", "ホウ素族"],
  },
  {
    number: 32,
    symbol: "Ge",
    period: 4,
    group: 14,
    name: {
      ja: {
        display: "ゲルマニウム",
        yomigana: "げるまにうむ",
      },
      en: {
        display: "Germanium",
      },
      zh: {
        cn: {
          display: "锗",
          pinyin: "zhě",
          unicode: "9517",
        },
        tw: {
          display: "鍺",
          bopomofo: "ㄓㄜˇ",
          pinyin: "zhě",
          pronunciationAlternative: "者",
          unicode: "937A",
        },
        hk: {
          display: "鍺",
          unicode: "937A",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "72.63",
    categoryId: "c",
    categoryList: ["典型元素", "炭素族"],
  },
  {
    number: 33,
    symbol: "As",
    period: 4,
    group: 15,
    name: {
      ja: {
        display: "ヒ素",
        yomigana: "ひそ",
      },
      en: {
        display: "Arsenic",
      },
      zh: {
        cn: {
          display: "砷",
          pinyin: "shēn",
          unicode: "7837",
        },
        tw: {
          display: "砷",
          bopomofo: "ㄕㄣ",
          pinyin: "shēn",
          pronunciationAlternative: "申",
          unicode: "7837",
        },
        hk: {
          display: "砷",
          unicode: "7837",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "74.92",
    categoryId: "n",
    categoryList: ["典型元素", "窒素族"],
  },
  {
    number: 34,
    symbol: "Se",
    period: 4,
    group: 16,
    name: {
      ja: {
        display: "セレン",
        yomigana: "せれん",
      },
      en: {
        display: "Selenium",
      },
      zh: {
        cn: {
          display: "硒",
          pinyin: "xī",
          unicode: "7852",
        },
        tw: {
          display: "硒",
          bopomofo: "ㄒㄧ",
          pinyin: "xī",
          pronunciationAlternative: "西",
          unicode: "7852",
        },
        hk: {
          display: "硒",
          unicode: "7852",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "78.97",
    categoryId: "o",
    categoryList: ["典型元素", "酸素族"],
  },
  {
    number: 35,
    symbol: "Br",
    period: 4,
    group: 17,
    name: {
      ja: {
        display: "臭素",
        yomigana: "しゅうそ",
      },
      en: {
        display: "Bromine",
      },
      zh: {
        cn: {
          display: "溴",
          pinyin: "xiù",
          unicode: "6EB4",
        },
        tw: {
          display: "溴",
          bopomofo: "ㄒㄧㄡˋ",
          pinyin: "xiù",
          pronunciationAlternative: "嗅",
          unicode: "6EB4",
        },
        hk: {
          display: "溴",
          unicode: "6EB4",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "79.90",
    categoryId: "f",
    categoryList: ["典型元素", "ハロゲン"],
  },
  {
    number: 36,
    symbol: "Kr",
    period: 4,
    group: 18,
    name: {
      ja: {
        display: "クリプトン",
        yomigana: "くりぷとん",
      },
      en: {
        display: "Krypton",
      },
      zh: {
        cn: {
          display: "氪",
          pinyin: "kè",
          unicode: "6C2A",
        },
        tw: {
          display: "氪",
          bopomofo: "ㄎㄜˋ",
          pinyin: "kè",
          pronunciationAlternative: "克",
          unicode: "6C2A",
        },
        hk: {
          display: "氪",
          unicode: "6C2A",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "83.80",
    categoryId: "he",
    categoryList: ["典型元素", "貴ガス"],
  },
  {
    number: 37,
    symbol: "Rb",
    period: 5,
    group: 1,
    name: {
      ja: {
        display: "ルビジウム",
        yomigana: "るびじうむ",
      },
      en: {
        display: "Rubidium",
      },
      zh: {
        cn: {
          display: "铷",
          pinyin: "rú",
          unicode: "94F7",
        },
        tw: {
          display: "銣",
          bopomofo: "ㄖㄨˊ",
          pinyin: "rú",
          pronunciationAlternative: "如",
          unicode: "92A3",
        },
        hk: {
          display: "銣",
          unicode: "92A3",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "85.47",
    categoryId: "li",
    categoryList: ["典型元素", "アルカリ金属"],
  },
  {
    number: 38,
    symbol: "Sr",
    period: 5,
    group: 2,
    name: {
      ja: {
        display: "ストロンチウム",
        yomigana: "すとろんちうむ",
      },
      en: {
        display: "Strontium",
      },
      zh: {
        cn: {
          display: "锶",
          pinyin: "sī",
          unicode: "9536",
        },
        tw: {
          display: "鍶",
          bopomofo: "ㄙ",
          pinyin: "sī",
          pronunciationAlternative: "思",
          unicode: "9376",
        },
        hk: {
          display: "鍶",
          unicode: "9376",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "87.62",
    categoryId: "ca",
    categoryList: ["典型元素", "アルカリ土類金属"],
  },
  {
    number: 39,
    symbol: "Y",
    period: 5,
    group: 3,
    name: {
      ja: {
        display: "イットリウム",
        yomigana: "いっとりうむ",
      },
      en: {
        display: "Yttorium",
      },
      zh: {
        cn: {
          display: "钇",
          pinyin: "yǐ",
          unicode: "9487",
        },
        tw: {
          display: "釔",
          bopomofo: "ㄧˇ",
          pinyin: "yǐ",
          pronunciationAlternative: "乙",
          unicode: "91D4",
        },
        hk: {
          display: "釔",
          unicode: "91D4",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "88.91",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 40,
    symbol: "Zr",
    period: 5,
    group: 4,
    name: {
      ja: {
        display: "ジルコニウム",
        yomigana: "じるこにうむ",
      },
      en: {
        display: "Zirconium",
      },
      zh: {
        cn: {
          display: "锆",
          pinyin: "gào",
          unicode: "9506",
        },
        tw: {
          display: "鋯",
          bopomofo: "ㄍㄠˋ",
          pinyin: "gào",
          pronunciationAlternative: "告",
          unicode: "92EF",
        },
        hk: {
          display: "鋯",
          unicode: "92EF",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "91.22",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 41,
    symbol: "Nb",
    period: 5,
    group: 5,
    name: {
      ja: {
        display: "ニオブ",
        yomigana: "におぶ",
      },
      en: {
        display: "Niobium",
      },
      zh: {
        cn: {
          display: "铌",
          pinyin: "ní",
          unicode: "94CC",
        },
        tw: {
          display: "鈮",
          bopomofo: "ㄋㄧˊ",
          pinyin: "ní",
          pronunciationAlternative: "尼",
          unicode: "922E",
        },
        hk: {
          display: "鈮",
          unicode: "922E",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "92.91",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 42,
    symbol: "Mo",
    period: 5,
    group: 6,
    name: {
      ja: {
        display: "モリブデン",
        yomigana: "もりぶでん",
      },
      en: {
        display: "Molybdenum",
      },
      zh: {
        cn: {
          display: "钼",
          pinyin: "mù",
          unicode: "94BC",
        },
        tw: {
          display: "鉬",
          bopomofo: "ㄇㄨˋ",
          pinyin: "mù",
          pronunciationAlternative: "目",
          unicode: "926C",
        },
        hk: {
          display: "鉬",
          unicode: "926C",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "95.95",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 43,
    symbol: "Tc",
    period: 5,
    group: 7,
    name: {
      ja: {
        display: "テクネチウム",
        yomigana: "てくねちうむ",
      },
      en: {
        display: "Technetium",
      },
      zh: {
        cn: {
          display: "锝",
          pinyin: "dé",
          unicode: "951D",
        },
        tw: {
          display: "鎝",
          bopomofo: "ㄊㄚˇ",
          pinyin: "tǎ",
          pronunciationAlternative: "塔",
          unicode: "939D",
        },
        hk: {
          display: "鍀",
          unicode: "9340",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(99)",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 44,
    symbol: "Ru",
    period: 5,
    group: 8,
    name: {
      ja: {
        display: "ルテニウム",
        yomigana: "るてにうむ",
      },
      en: {
        display: "Ruthenium",
      },
      zh: {
        cn: {
          display: "钌",
          pinyin: "liǎo",
          unicode: "948C",
        },
        tw: {
          display: "釕",
          bopomofo: "ㄌㄧㄠˇ",
          pinyin: "liǎo",
          pronunciationAlternative: "了",
          unicode: "91D5",
        },
        hk: {
          display: "釕",
          unicode: "91D5",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "101.1",
    categoryId: "pt",
    categoryList: ["遷移金属", "白金族"],
  },
  {
    number: 45,
    symbol: "Rh",
    period: 5,
    group: 9,
    name: {
      ja: {
        display: "ロジウム",
        yomigana: "ろじうむ",
      },
      en: {
        display: "Rhodium",
      },
      zh: {
        cn: {
          display: "铑",
          pinyin: "lǎo",
          unicode: "94D1",
        },
        tw: {
          display: "銠",
          bopomofo: "ㄌㄠˇ",
          pinyin: "lǎo",
          pronunciationAlternative: "老",
          unicode: "92A0",
        },
        hk: {
          display: "銠",
          unicode: "92A0",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "102.9",
    categoryId: "pt",
    categoryList: ["遷移金属", "白金族"],
  },
  {
    number: 46,
    symbol: "Pd",
    period: 5,
    group: 10,
    name: {
      ja: {
        display: "パラジウム",
        yomigana: "ぱらじうむ",
      },
      en: {
        display: "Palladium",
      },
      zh: {
        cn: {
          display: "钯",
          pinyin: "bǎ",
          unicode: "94AF",
        },
        tw: {
          display: "鈀",
          bopomofo: "ㄅㄚ",
          pinyin: "bā",
          pronunciationAlternative: "巴",
          unicode: "9200",
        },
        hk: {
          display: "鈀",
          unicode: "9200",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "106.4",
    categoryId: "pt",
    categoryList: ["遷移金属", "白金族"],
  },
  {
    number: 47,
    symbol: "Ag",
    period: 5,
    group: 11,
    name: {
      ja: {
        display: "銀",
        yomigana: "ぎん",
      },
      en: {
        display: "Silver",
      },
      zh: {
        cn: {
          display: "银",
          pinyin: "yín",
          unicode: "94F6",
        },
        tw: {
          display: "銀",
          bopomofo: "ㄧㄣˊ",
          pinyin: "yín",
          pronunciationAlternative: "吟",
          unicode: "9280",
        },
        hk: {
          display: "銀",
          unicode: "9280",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "107.9",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 48,
    symbol: "Cd",
    period: 5,
    group: 12,
    name: {
      ja: {
        display: "カドミウム",
        yomigana: "かどみうむ",
      },
      en: {
        display: "Cadmium",
      },
      zh: {
        cn: {
          display: "镉",
          pinyin: "gé",
          unicode: "9549",
        },
        tw: {
          display: "鎘",
          bopomofo: "ㄍㄜˊ",
          pinyin: "gé",
          pronunciationAlternative: "隔",
          unicode: "9398",
        },
        hk: {
          display: "鎘",
          unicode: "9398",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "112.4",
    categoryId: "zn",
    categoryList: ["典型元素", "亜鉛族"],
  },
  {
    number: 49,
    symbol: "In",
    period: 5,
    group: 13,
    name: {
      ja: {
        display: "インジウム",
        yomigana: "いんじうむ",
      },
      en: {
        display: "Indium",
      },
      zh: {
        cn: {
          display: "铟",
          pinyin: "yīn",
          unicode: "94DF",
        },
        tw: {
          display: "銦",
          bopomofo: "ㄧㄣ",
          pinyin: "yīn",
          pronunciationAlternative: "因",
          unicode: "92A6",
        },
        hk: {
          display: "銦",
          unicode: "92A6",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "114.8",
    categoryId: "b",
    categoryList: ["典型元素", "ホウ素族"],
  },
  {
    number: 50,
    symbol: "Sn",
    period: 5,
    group: 14,
    name: {
      ja: {
        display: "スズ",
        yomigana: "すず",
      },
      en: {
        display: "Tin",
      },
      zh: {
        cn: {
          display: "锡",
          pinyin: "xī",
          unicode: "9521",
        },
        tw: {
          display: "錫",
          bopomofo: "ㄒㄧˊ",
          pinyin: "xí",
          pronunciationAlternative: "席",
          unicode: "932B",
        },
        hk: {
          display: "錫",
          unicode: "932B",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "118.7",
    categoryId: "c",
    categoryList: ["典型元素", "炭素族"],
  },
  {
    number: 51,
    symbol: "Sb",
    period: 5,
    group: 15,
    name: {
      ja: {
        display: "アンチモン",
        yomigana: "あんちもん",
      },
      en: {
        display: "Antimony",
      },
      zh: {
        cn: {
          display: "锑",
          pinyin: "tī",
          unicode: "9511",
        },
        tw: {
          display: "銻",
          bopomofo: "ㄊㄧˋ",
          pinyin: "tì",
          pronunciationAlternative: "替",
          unicode: "92BB",
        },
        hk: {
          display: "銻",
          unicode: "92BB",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "121.8",
    categoryId: "n",
    categoryList: ["典型元素", "窒素族"],
  },
  {
    number: 52,
    symbol: "Te",
    period: 5,
    group: 16,
    name: {
      ja: {
        display: "テルル",
        yomigana: "てるる",
      },
      en: {
        display: "Tellurium",
      },
      zh: {
        cn: {
          display: "碲",
          pinyin: "dì",
          unicode: "78B2",
        },
        tw: {
          display: "碲",
          bopomofo: "ㄉㄧˋ",
          pinyin: "dì",
          pronunciationAlternative: "帝",
          unicode: "78B2",
        },
        hk: {
          display: "碲",
          unicode: "78B2",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "127.6",
    categoryId: "o",
    categoryList: ["典型元素", "酸素族"],
  },
  {
    number: 53,
    symbol: "I",
    period: 5,
    group: 17,
    name: {
      ja: {
        display: "ヨウ素",
        yomigana: "ようそ",
      },
      en: {
        display: "Iodine",
      },
      zh: {
        cn: {
          display: "碘",
          pinyin: "diǎn",
          unicode: "7898",
        },
        tw: {
          display: "碘",
          bopomofo: "ㄉㄧㄢˇ",
          pinyin: "diǎn",
          pronunciationAlternative: "典",
          unicode: "7898",
        },
        hk: {
          display: "碘",
          unicode: "7898",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "126.9",
    categoryId: "f",
    categoryList: ["典型元素", "ハロゲン"],
  },
  {
    number: 54,
    symbol: "Xe",
    period: 5,
    group: 18,
    name: {
      ja: {
        display: "キセノン",
        yomigana: "きせのん",
      },
      en: {
        display: "Xenon",
      },
      zh: {
        cn: {
          display: "氙",
          pinyin: "xiān",
          unicode: "6C19",
        },
        tw: {
          display: "氙",
          bopomofo: "ㄒㄧㄢ",
          pinyin: "xiān",
          pronunciationAlternative: "仙",
          unicode: "6C19",
        },
        hk: {
          display: "氙",
          unicode: "6C19",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "131.3",
    categoryId: "he",
    categoryList: ["典型元素", "貴ガス"],
  },
  {
    number: 55,
    symbol: "Cs",
    period: 6,
    group: 1,
    name: {
      ja: {
        display: "セシウム",
        yomigana: "せしうむ",
      },
      en: {
        display: "Caesium",
      },
      zh: {
        cn: {
          display: "铯",
          pinyin: "sè",
          unicode: "94EF",
        },
        tw: {
          display: "銫",
          bopomofo: "ㄙㄜˋ",
          pinyin: "sè",
          pronunciationAlternative: "色",
          unicode: "92AB",
        },
        hk: {
          display: "銫",
          unicode: "92AB",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "132.9",
    categoryId: "li",
    categoryList: ["典型元素", "アルカリ金属"],
  },
  {
    number: 56,
    symbol: "Ba",
    period: 6,
    group: 2,
    name: {
      ja: {
        display: "バリウム",
        yomigana: "ばりうむ",
      },
      en: {
        display: "Barium",
      },
      zh: {
        cn: {
          display: "钡",
          pinyin: "bèi",
          unicode: "94A1",
        },
        tw: {
          display: "鋇",
          bopomofo: "ㄅㄟˋ",
          pinyin: "bèi",
          pronunciationAlternative: "貝",
          unicode: "92C7",
        },
        hk: {
          display: "鋇",
          unicode: "92C7",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "137.3",
    categoryId: "ca",
    categoryList: ["典型元素", "アルカリ土類金属"],
  },
  {
    number: 57,
    symbol: "La",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "ランタン",
        yomigana: "らんたん",
      },
      en: {
        display: "Lanthanum",
      },
      zh: {
        cn: {
          display: "镧",
          pinyin: "lán",
          unicode: "9567",
        },
        tw: {
          display: "鑭",
          bopomofo: "ㄌㄢˊ",
          pinyin: "lán",
          pronunciationAlternative: "蘭",
          unicode: "946D",
        },
        hk: {
          display: "鑭",
          unicode: "946D",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "138.9",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 58,
    symbol: "Ce",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "セリウム",
        yomigana: "せりうむ",
      },
      en: {
        display: "Cerium",
      },
      zh: {
        cn: {
          display: "铈",
          pinyin: "shì",
          unicode: "94C8",
        },
        tw: {
          display: "鈰",
          bopomofo: "ㄕˋ",
          pinyin: "shì",
          pronunciationAlternative: "市",
          unicode: "9230",
        },
        hk: {
          display: "鈰",
          unicode: "9230",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "140.1",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 59,
    symbol: "Pr",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "プラセオジム",
        yomigana: "ぷらせおじむ",
      },
      en: {
        display: "Praseodymium",
      },
      zh: {
        cn: {
          display: "镨",
          pinyin: "pǔ",
          unicode: "9568",
        },
        tw: {
          display: "鐠",
          bopomofo: "ㄆㄨˇ",
          pinyin: "pǔ",
          pronunciationAlternative: "普",
          unicode: "9420",
        },
        hk: {
          display: "鐠",
          unicode: "9420",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "140.9",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 60,
    symbol: "Nd",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "ネオジム",
        yomigana: "ねおじむ",
      },
      en: {
        display: "Neodymium",
      },
      zh: {
        cn: {
          display: "钕",
          pinyin: "nǚ",
          unicode: "9495",
        },
        tw: {
          display: "釹",
          bopomofo: "ㄋㄩˇ",
          pinyin: "nǚ",
          pronunciationAlternative: "女",
          unicode: "91F9",
        },
        hk: {
          display: "釹",
          unicode: "91F9",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "144.2",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 61,
    symbol: "Pm",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "プロメチウム",
        yomigana: "ぷろめちうむ",
      },
      en: {
        display: "Promethium",
      },
      zh: {
        cn: {
          display: "钷",
          pinyin: "pǒ",
          unicode: "94B7",
        },
        tw: {
          display: "鉕",
          bopomofo: "ㄆㄛˇ",
          pinyin: "pǒ",
          pronunciationAlternative: "叵",
          unicode: "9255",
        },
        hk: {
          display: "鉕",
          unicode: "9255",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(145)",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 62,
    symbol: "Sm",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "サマリウム",
        yomigana: "さまりうむ",
      },
      en: {
        display: "Samarium",
      },
      zh: {
        cn: {
          display: "钐",
          pinyin: "shān",
          unicode: "9490",
        },
        tw: {
          display: "釤",
          bopomofo: "ㄕㄢ",
          pinyin: "shān",
          pronunciationAlternative: "杉",
          unicode: "91E4",
        },
        hk: {
          display: "釤",
          unicode: "91E4",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "150.4",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 63,
    symbol: "Eu",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "ユウロピウム",
        yomigana: "ゆうろぴうむ",
      },
      en: {
        display: "Europium",
      },
      zh: {
        cn: {
          display: "铕",
          pinyin: "yǒu",
          unicode: "94D5",
        },
        tw: {
          display: "銪",
          bopomofo: "ㄧㄡˇ",
          pinyin: "yǒu",
          pronunciationAlternative: "有",
          unicode: "92AA",
        },
        hk: {
          display: "銪",
          unicode: "92AA",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "152.0",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 64,
    symbol: "Gd",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "ガドリニウム",
        yomigana: "がどりにうむ",
      },
      en: {
        display: "Gadolinium",
      },
      zh: {
        cn: {
          display: "钆",
          pinyin: "gá",
          unicode: "9486",
        },
        tw: {
          display: "釓",
          bopomofo: "ㄍㄚˊ",
          pinyin: "gá",
          pronunciationAlternative: "軋",
          unicode: "91D3",
        },
        hk: {
          display: "釓",
          unicode: "91D3",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "157.3",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 65,
    symbol: "Tb",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "テルビウム",
        yomigana: "てるびうむ",
      },
      en: {
        display: "Terbium",
      },
      zh: {
        cn: {
          display: "铽",
          pinyin: "tè",
          unicode: "94FD",
        },
        tw: {
          display: "鋱",
          bopomofo: "ㄊㄜˋ",
          pinyin: "tè",
          pronunciationAlternative: "特",
          unicode: "92F1",
        },
        hk: {
          display: "鋱",
          unicode: "92F1",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "158.9",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 66,
    symbol: "Dy",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "ジスプロシウム",
        yomigana: "じすぷろしうむ",
      },
      en: {
        display: "Dysprosium",
      },
      zh: {
        cn: {
          display: "镝",
          pinyin: "dī",
          unicode: "955D",
        },
        tw: {
          display: "鏑",
          bopomofo: "ㄉㄧ",
          pinyin: "dī",
          pronunciationAlternative: "滴",
          unicode: "93D1",
        },
        hk: {
          display: "鏑",
          unicode: "93D1",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "162.5",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 67,
    symbol: "Ho",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "ホルミウム",
        yomigana: "ほるみうむ",
      },
      en: {
        display: "Holmium",
      },
      zh: {
        cn: {
          display: "钬",
          pinyin: "huǒ",
          unicode: "94AC",
        },
        tw: {
          display: "鈥",
          bopomofo: "ㄏㄨㄛˇ",
          pinyin: "huǒ",
          pronunciationAlternative: "火",
          unicode: "9225",
        },
        hk: {
          display: "鈥",
          unicode: "9225",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "164.9",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 68,
    symbol: "Er",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "エルビウム",
        yomigana: "えるびうむ",
      },
      en: {
        display: "Erbium",
      },
      zh: {
        cn: {
          display: "铒",
          pinyin: "ěr",
          unicode: "94D2",
        },
        tw: {
          display: "鉺",
          bopomofo: "ㄦˇ",
          pinyin: "ěr",
          pronunciationAlternative: "耳",
          unicode: "927A",
        },
        hk: {
          display: "鉺",
          unicode: "927A",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "167.3",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 69,
    symbol: "Tm",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "ツリウム",
        yomigana: "つりうむ",
      },
      en: {
        display: "Thulium",
      },
      zh: {
        cn: {
          display: "铥",
          pinyin: "diū",
          unicode: "94E5",
        },
        tw: {
          display: "銩",
          bopomofo: "ㄉㄧㄡ",
          pinyin: "diū",
          pronunciationAlternative: "丟",
          unicode: "92A9",
        },
        hk: {
          display: "銩",
          unicode: "92A9",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "168.9",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 70,
    symbol: "Yb",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "イッテルビウム",
        yomigana: "いってるびうむ",
      },
      en: {
        display: "Ytterbium",
      },
      zh: {
        cn: {
          display: "镱",
          pinyin: "yì",
          unicode: "9571",
        },
        tw: {
          display: "鐿",
          bopomofo: "ㄧˋ",
          pinyin: "yì",
          pronunciationAlternative: "意",
          unicode: "943F",
        },
        hk: {
          display: "鐿",
          unicode: "943F",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "173.0",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 71,
    symbol: "Lu",
    period: 6,
    group: 3,
    name: {
      ja: {
        display: "ルテチウム",
        yomigana: "るてちうむ",
      },
      en: {
        display: "Lutetium",
      },
      zh: {
        cn: {
          display: "镥",
          pinyin: "lǔ",
          unicode: "9565",
        },
        tw: {
          display: "鎦",
          bopomofo: "ㄌㄧㄡˊ",
          pinyin: "liú",
          pronunciationAlternative: "留",
          unicode: "93A6",
        },
        hk: {
          display: "鑥",
          unicode: "9465",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "175.0",
    categoryId: "la",
    categoryList: ["遷移金属", "ランタノイド"],
  },
  {
    number: 72,
    symbol: "Hf",
    period: 6,
    group: 4,
    name: {
      ja: {
        display: "ハフニウム",
        yomigana: "はふにうむ",
      },
      en: {
        display: "Hafnium",
      },
      zh: {
        cn: {
          display: "铪",
          pinyin: "hā",
          unicode: "94EA",
        },
        tw: {
          display: "鉿",
          bopomofo: "ㄏㄚ",
          pinyin: "hā",
          pronunciationAlternative: "哈",
          unicode: "927F",
        },
        hk: {
          display: "鉿",
          unicode: "927F",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "178.5",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 73,
    symbol: "Ta",
    period: 6,
    group: 5,
    name: {
      ja: {
        display: "タンタル",
        yomigana: "たんたる",
      },
      en: {
        display: "Tantalum",
      },
      zh: {
        cn: {
          display: "钽",
          pinyin: "tǎn",
          unicode: "94BD",
        },
        tw: {
          display: "鉭",
          bopomofo: "ㄉㄢˋ",
          pinyin: "dàn",
          pronunciationAlternative: "旦",
          unicode: "926D",
        },
        hk: {
          display: "鉭",
          unicode: "926D",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "180.9",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 74,
    symbol: "W",
    period: 6,
    group: 6,
    name: {
      ja: {
        display: "タングステン",
        yomigana: "たんぐすてん",
      },
      en: {
        display: "Tungsten",
      },
      zh: {
        cn: {
          display: "钨",
          pinyin: "wū",
          unicode: "94A8",
        },
        tw: {
          display: "鎢",
          bopomofo: "ㄨ",
          pinyin: "wū",
          pronunciationAlternative: "烏",
          unicode: "93A2",
        },
        hk: {
          display: "鎢",
          unicode: "93A2",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "183.8",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 75,
    symbol: "Re",
    period: 6,
    group: 7,
    name: {
      ja: {
        display: "レニウム",
        yomigana: "れにうむ",
      },
      en: {
        display: "Rhenium",
      },
      zh: {
        cn: {
          display: "铼",
          pinyin: "lái",
          unicode: "94FC",
        },
        tw: {
          display: "錸",
          bopomofo: "ㄌㄞˊ",
          pinyin: "lái",
          pronunciationAlternative: "來",
          unicode: "9338",
        },
        hk: {
          display: "錸",
          unicode: "9338",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "186.2",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 76,
    symbol: "Os",
    period: 6,
    group: 8,
    name: {
      ja: {
        display: "オスミウム",
        yomigana: "おすみうむ",
      },
      en: {
        display: "Osmium",
      },
      zh: {
        cn: {
          display: "锇",
          pinyin: "é",
          unicode: "9507",
        },
        tw: {
          display: "鋨",
          bopomofo: "ㄜˊ",
          pinyin: "é",
          pronunciationAlternative: "娥",
          unicode: "92E8",
        },
        hk: {
          display: "鋨",
          unicode: "92E8",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "190.2",
    categoryId: "pt",
    categoryList: ["遷移金属", "白金族"],
  },
  {
    number: 77,
    symbol: "Ir",
    period: 6,
    group: 9,
    name: {
      ja: {
        display: "イリジウム",
        yomigana: "いりじうむ",
      },
      en: {
        display: "Iridium",
      },
      zh: {
        cn: {
          display: "铱",
          pinyin: "yī",
          unicode: "94F1",
        },
        tw: {
          display: "銥",
          bopomofo: "ㄧ",
          pinyin: "yī",
          pronunciationAlternative: "衣",
          unicode: "92A5",
        },
        hk: {
          display: "銥",
          unicode: "92A5",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "192.2",
    categoryId: "pt",
    categoryList: ["遷移金属", "白金族"],
  },
  {
    number: 78,
    symbol: "Pt",
    period: 6,
    group: 10,
    name: {
      ja: {
        display: "白金",
        yomigana: "はっきん",
      },
      en: {
        display: "Platinum",
      },
      zh: {
        cn: {
          display: "铂",
          pinyin: "bó",
          unicode: "94C2",
        },
        tw: {
          display: "鉑",
          bopomofo: "ㄅㄛˊ",
          pinyin: "bó",
          pronunciationAlternative: "伯",
          unicode: "9251",
        },
        hk: {
          display: "鉑",
          unicode: "9251",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "195.1",
    categoryId: "pt",
    categoryList: ["遷移金属", "白金族"],
  },
  {
    number: 79,
    symbol: "Au",
    period: 6,
    group: 11,
    name: {
      ja: {
        display: "金",
        yomigana: "きん",
      },
      en: {
        display: "Gold",
      },
      zh: {
        cn: {
          display: "金",
          pinyin: "jīn",
          unicode: "91D1",
        },
        tw: {
          display: "金",
          bopomofo: "ㄐㄧㄣ",
          pinyin: "jīn",
          pronunciationAlternative: "今",
          unicode: "91D1",
        },
        hk: {
          display: "金",
          unicode: "91D1",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "197.0",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 80,
    symbol: "Hg",
    period: 6,
    group: 12,
    name: {
      ja: {
        display: "水銀",
        yomigana: "すいぎん",
      },
      en: {
        display: "Mercury",
      },
      zh: {
        cn: {
          display: "汞",
          pinyin: "gǒng",
          unicode: "6C5E",
        },
        tw: {
          display: "汞",
          bopomofo: "ㄍㄨㄥˇ",
          pinyin: "gǒng",
          pronunciationAlternative: "拱",
          unicode: "6C5E",
        },
        hk: {
          display: "汞",
          unicode: "6C5E",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "200.6",
    categoryId: "zn",
    categoryList: ["典型元素", "亜鉛族"],
  },
  {
    number: 81,
    symbol: "Tl",
    period: 6,
    group: 13,
    name: {
      ja: {
        display: "タリウム",
        yomigana: "たりうむ",
      },
      en: {
        display: "Thallium",
      },
      zh: {
        cn: {
          display: "铊",
          pinyin: "tā",
          unicode: "94CA",
        },
        tw: {
          display: "鉈",
          bopomofo: "ㄊㄚ",
          pinyin: "tā",
          pronunciationAlternative: "他",
          unicode: "9248",
        },
        hk: {
          display: "鉈",
          unicode: "9248",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "204.4",
    categoryId: "b",
    categoryList: ["典型元素", "ホウ素族"],
  },
  {
    number: 82,
    symbol: "Pb",
    period: 6,
    group: 14,
    name: {
      ja: {
        display: "鉛",
        yomigana: "なまり",
      },
      en: {
        display: "Lead",
      },
      zh: {
        cn: {
          display: "铅",
          pinyin: "qiān",
          unicode: "94C5",
        },
        tw: {
          display: "鉛",
          bopomofo: "ㄑㄧㄢ",
          pinyin: "qiān",
          pronunciationAlternative: "千",
          unicode: "925B",
        },
        hk: {
          display: "鉛",
          unicode: "925B",
        },
      },
    },
    isRadioactive: false,
    atomicWeight: "207.2",
    categoryId: "c",
    categoryList: ["典型元素", "炭素族"],
  },
  {
    number: 83,
    symbol: "Bi",
    period: 6,
    group: 15,
    name: {
      ja: {
        display: "ビスマス",
        yomigana: "びすます",
      },
      en: {
        display: "Bismuth",
      },
      zh: {
        cn: {
          display: "铋",
          pinyin: "bì",
          unicode: "94CB",
        },
        tw: {
          display: "鉍",
          bopomofo: "ㄅㄧˋ",
          pinyin: "bì",
          pronunciationAlternative: "必",
          unicode: "924D",
        },
        hk: {
          display: "鉍",
          unicode: "924D",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "209.0",
    categoryId: "n",
    categoryList: ["典型元素", "窒素族"],
  },
  {
    number: 84,
    symbol: "Po",
    period: 6,
    group: 16,
    name: {
      ja: {
        display: "ポロニウム",
        yomigana: "ぽろにうむ",
      },
      en: {
        display: "Polonium",
      },
      zh: {
        cn: {
          display: "钋",
          pinyin: "pō",
          unicode: "948B",
        },
        tw: {
          display: "釙",
          bopomofo: "ㄆㄛˋ",
          pinyin: "pò",
          pronunciationAlternative: "破",
          unicode: "91D9",
        },
        hk: {
          display: "釙",
          unicode: "91D9",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(210)",
    categoryId: "o",
    categoryList: ["典型元素", "酸素族"],
  },
  {
    number: 85,
    symbol: "At",
    period: 6,
    group: 17,
    name: {
      ja: {
        display: "アスタチン",
        yomigana: "あすたちん",
      },
      en: {
        display: "Astatine",
      },
      zh: {
        cn: {
          display: "砹",
          pinyin: "ài",
          unicode: "7839",
        },
        tw: {
          display: "砈",
          bopomofo: "ㄜˋ",
          pinyin: "è",
          pronunciationAlternative: "厄",
          unicode: "7808",
        },
        hk: {
          display: "砹",
          unicode: "7839",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(210)",
    categoryId: "f",
    categoryList: ["典型元素", "ハロゲン"],
  },
  {
    number: 86,
    symbol: "Rn",
    period: 6,
    group: 18,
    name: {
      ja: {
        display: "ラドン",
        yomigana: "らどん",
      },
      en: {
        display: "Radon",
      },
      zh: {
        cn: {
          display: "氡",
          pinyin: "dōng",
          unicode: "6C21",
        },
        tw: {
          display: "氡",
          bopomofo: "ㄉㄨㄥ",
          pinyin: "dōng",
          pronunciationAlternative: "冬",
          unicode: "6C21",
        },
        hk: {
          display: "氡",
          unicode: "6C21",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(222)",
    categoryId: "he",
    categoryList: ["典型元素", "貴ガス"],
  },
  {
    number: 87,
    symbol: "Fr",
    period: 7,
    group: 1,
    name: {
      ja: {
        display: "フランシウム",
        yomigana: "ふらんしうむ",
      },
      en: {
        display: "Francium",
      },
      zh: {
        cn: {
          display: "钫",
          pinyin: "fāng",
          unicode: "94AB",
        },
        tw: {
          display: "鍅",
          bopomofo: "ㄈㄚˇ",
          pinyin: "fǎ",
          pronunciationAlternative: "法",
          unicode: "9345",
        },
        hk: {
          display: "鈁",
          unicode: "9201",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(223)",
    categoryId: "li",
    categoryList: ["典型元素", "アルカリ金属"],
  },
  {
    number: 88,
    symbol: "Ra",
    period: 7,
    group: 2,
    name: {
      ja: {
        display: "ラジウム",
        yomigana: "らじうむ",
      },
      en: {
        display: "Radium",
      },
      zh: {
        cn: {
          display: "镭",
          pinyin: "léi",
          unicode: "956D",
        },
        tw: {
          display: "鐳",
          bopomofo: "ㄌㄟˊ",
          pinyin: "léi",
          pronunciationAlternative: "雷",
          unicode: "9433",
        },
        hk: {
          display: "鐳",
          unicode: "9433",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(226)",
    categoryId: "ca",
    categoryList: ["典型元素", "アルカリ土類金属"],
  },
  {
    number: 89,
    symbol: "Ac",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "アクチニウム",
        yomigana: "あくちにうむ",
      },
      en: {
        display: "Actinium",
      },
      zh: {
        cn: {
          display: "锕",
          pinyin: "ā",
          unicode: "9515",
        },
        tw: {
          display: "錒",
          bopomofo: "ㄚ",
          pinyin: "ā",
          pronunciationAlternative: "阿",
          unicode: "9312",
        },
        hk: {
          display: "錒",
          unicode: "9312",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(227)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 90,
    symbol: "Th",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "トリウム",
        yomigana: "とりうむ",
      },
      en: {
        display: "Thorium",
      },
      zh: {
        cn: {
          display: "钍",
          pinyin: "tǔ",
          unicode: "948D",
        },
        tw: {
          display: "釷",
          bopomofo: "ㄊㄨˇ",
          pinyin: "tǔ",
          pronunciationAlternative: "土",
          unicode: "91F7",
        },
        hk: {
          display: "釷",
          unicode: "91F7",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "232.0",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 91,
    symbol: "Pa",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "プロトアクチニウム",
        yomigana: "ぷろとあくちにうむ",
      },
      en: {
        display: "Protactinium",
      },
      zh: {
        cn: {
          display: "镤",
          pinyin: "pú",
          unicode: "9564",
        },
        tw: {
          display: "鏷",
          bopomofo: "ㄆㄨˊ",
          pinyin: "pú",
          pronunciationAlternative: "僕",
          unicode: "93F7",
        },
        hk: {
          display: "鏷",
          unicode: "93F7",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "231.0",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 92,
    symbol: "U",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "ウラン",
        yomigana: "うらん",
      },
      en: {
        display: "Uranium",
      },
      zh: {
        cn: {
          display: "铀",
          pinyin: "yóu",
          unicode: "94C0",
        },
        tw: {
          display: "鈾",
          bopomofo: "ㄧㄡˋ",
          pinyin: "yòu",
          pronunciationAlternative: "又",
          unicode: "923E",
        },
        hk: {
          display: "鈾",
          unicode: "923E",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "238.0",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 93,
    symbol: "Np",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "ネプツニウム",
        yomigana: "ねぷつにうむ",
      },
      en: {
        display: "Neptunium",
      },
      zh: {
        cn: {
          display: "镎",
          pinyin: "ná",
          unicode: "954E",
        },
        tw: {
          display: "錼",
          bopomofo: "ㄋㄞˋ",
          pinyin: "nài",
          pronunciationAlternative: "奈",
          unicode: "933C",
        },
        hk: {
          display: "鎿",
          unicode: "93BF",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(237)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 94,
    symbol: "Pu",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "プルトニウム",
        yomigana: "ぷるとにうむ",
      },
      en: {
        display: "Plutonium",
      },
      zh: {
        cn: {
          display: "钚",
          pinyin: "bù",
          unicode: "949A",
        },
        tw: {
          display: "鈽",
          bopomofo: "ㄅㄨˋ",
          pinyin: "bù",
          pronunciationAlternative: "布",
          unicode: "923D",
        },
        hk: {
          display: "鈈",
          unicode: "9208",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(239)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 95,
    symbol: "Am",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "アメリシウム",
        yomigana: "あめりしうむ",
      },
      en: {
        display: "Americium",
      },
      zh: {
        cn: {
          display: "镅",
          pinyin: "méi",
          unicode: "9545",
        },
        tw: {
          display: "鋂",
          bopomofo: "ㄇㄟˊ",
          pinyin: "méi",
          pronunciationAlternative: "梅",
          unicode: "92C2",
        },
        hk: {
          display: "鎇",
          unicode: "9387",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(243)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 96,
    symbol: "Cm",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "キュリウム",
        yomigana: "きゅりうむ",
      },
      en: {
        display: "Curium",
      },
      zh: {
        cn: {
          display: "锔",
          pinyin: "jú",
          unicode: "9514",
        },
        tw: {
          display: "鋦",
          bopomofo: "ㄐㄩˊ",
          pinyin: "jú",
          pronunciationAlternative: "局",
          unicode: "92E6",
        },
        hk: {
          display: "鋦",
          unicode: "92E6",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(247)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 97,
    symbol: "Bk",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "バークリウム",
        yomigana: "ばーくりうむ",
      },
      en: {
        display: "Berkelium",
      },
      zh: {
        cn: {
          display: "锫",
          pinyin: "péi",
          unicode: "952B",
        },
        tw: {
          display: "鉳",
          bopomofo: "ㄅㄟˇ",
          pinyin: "běi",
          pronunciationAlternative: "北",
          unicode: "9273",
        },
        hk: {
          display: "錇",
          unicode: "9307",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(247)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 98,
    symbol: "Cf",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "カリホルニウム",
        yomigana: "かりほるにうむ",
      },
      en: {
        display: "Californium",
      },
      zh: {
        cn: {
          display: "锎",
          pinyin: "kāi",
          unicode: "950E",
        },
        tw: {
          display: "鉲",
          bopomofo: "ㄎㄚˇ",
          pinyin: "kǎ",
          pronunciationAlternative: "卡",
          unicode: "9272",
        },
        hk: {
          display: "鐦",
          unicode: "9426",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(252)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 99,
    symbol: "Es",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "アインスタイニウム",
        yomigana: "あいんすたいにうむ",
      },
      en: {
        display: "Einsteinium",
      },
      zh: {
        cn: {
          display: "锿",
          pinyin: "āi",
          unicode: "953F",
        },
        tw: {
          display: "鑀",
          bopomofo: "ㄞˋ",
          pinyin: "ài",
          pronunciationAlternative: "愛",
          unicode: "9440",
        },
        hk: {
          display: "鎄",
          unicode: "9384",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(252)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 100,
    symbol: "Fm",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "フェルミウム",
        yomigana: "ふぇるみうむ",
      },
      en: {
        display: "Fermium",
      },
      zh: {
        cn: {
          display: "镄",
          pinyin: "fèi",
          unicode: "9544",
        },
        tw: {
          display: "鐨",
          bopomofo: "ㄈㄟˋ",
          pinyin: "fèi",
          pronunciationAlternative: "費",
          unicode: "9428",
        },
        hk: {
          display: "鐨",
          unicode: "9428",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(257)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 101,
    symbol: "Md",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "メンデレビウム",
        yomigana: "めんでれびうむ",
      },
      en: {
        display: "Mendelevium",
      },
      zh: {
        cn: {
          display: "钔",
          pinyin: "mén",
          unicode: "9494",
        },
        tw: {
          display: "鍆",
          bopomofo: "ㄇㄣˊ",
          pinyin: "mén",
          pronunciationAlternative: "門",
          unicode: "9346",
        },
        hk: {
          display: "鍆",
          unicode: "9346",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(258)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 102,
    symbol: "No",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "ノーベリウム",
        yomigana: "のーべりうむ",
      },
      en: {
        display: "Nobelium",
      },
      zh: {
        cn: {
          display: "锘",
          pinyin: "nuò",
          unicode: "9518",
        },
        tw: {
          display: "鍩",
          bopomofo: "ㄋㄨㄛˋ",
          pinyin: "nuò",
          pronunciationAlternative: "諾",
          unicode: "9369",
        },
        hk: {
          display: "鍩",
          unicode: "9369",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(259)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 103,
    symbol: "Lr",
    period: 7,
    group: 3,
    name: {
      ja: {
        display: "ローレンシウム",
        yomigana: "ろーれんしうむ",
      },
      en: {
        display: "Lawrencium",
      },
      zh: {
        cn: {
          display: "铹",
          pinyin: "láo",
          unicode: "94F9",
        },
        tw: {
          display: "鐒",
          bopomofo: "ㄌㄠˊ",
          pinyin: "láo",
          pronunciationAlternative: "勞",
          unicode: "9412",
        },
        hk: {
          display: "鐒",
          unicode: "9412",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(262)",
    categoryId: "ac",
    categoryList: ["遷移金属", "アクチノイド"],
  },
  {
    number: 104,
    symbol: "Rf",
    period: 7,
    group: 4,
    name: {
      ja: {
        display: "ラザホージウム",
        yomigana: "らざほーじうむ",
      },
      en: {
        display: "Rutherfordium",
      },
      zh: {
        cn: {
          display: "𬬻",
          pinyin: "lú",
          unicode: "2CB3B",
        },
        tw: {
          display: "鑪",
          bopomofo: "ㄌㄨˊ",
          pinyin: "lú",
          pronunciationAlternative: "盧",
          unicode: "946A",
        },
        hk: {
          display: "鑪",
          unicode: "946A",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(267)",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 105,
    symbol: "Db",
    period: 7,
    group: 5,
    name: {
      ja: {
        display: "ドブニウム",
        yomigana: "どぶにうむ",
      },
      en: {
        display: "Dubnium",
      },
      zh: {
        cn: {
          display: "𬭊",
          pinyin: "dù",
          unicode: "2CB4A",
        },
        tw: {
          display: "𨧀",
          bopomofo: "ㄉㄨˋ",
          pinyin: "dù",
          pronunciationAlternative: "杜",
          unicode: "289C0",
        },
        hk: {
          display: "𨧀",
          unicode: "289C0",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(268)",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 106,
    symbol: "Sg",
    period: 7,
    group: 6,
    name: {
      ja: {
        display: "シーボーギウム",
        yomigana: "しーぼーぎうむ",
      },
      en: {
        display: "Seaborgium",
      },
      zh: {
        cn: {
          display: "𬭳",
          pinyin: "xǐ",
          unicode: "2CB73",
        },
        tw: {
          display: "𨭎",
          bopomofo: "ㄒㄧˇ",
          pinyin: "xǐ",
          pronunciationAlternative: "喜",
          unicode: "28B4E",
        },
        hk: {
          display: "𨭎",
          unicode: "28B4E",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(271)",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 107,
    symbol: "Bh",
    period: 7,
    group: 7,
    name: {
      ja: {
        display: "ボーリウム",
        yomigana: "ぼーりうむ",
      },
      en: {
        display: "Bohrium",
      },
      zh: {
        cn: {
          display: "𬭛",
          pinyin: "bō",
          unicode: "2CB5B",
        },
        tw: {
          display: "𨨏",
          bopomofo: "ㄆㄛ",
          pinyin: "pō",
          pronunciationAlternative: "波",
          unicode: "28A0F",
        },
        hk: {
          display: "𨨏",
          unicode: "28A0F",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(272)",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 108,
    symbol: "Hs",
    period: 7,
    group: 8,
    name: {
      ja: {
        display: "ハッシウム",
        yomigana: "はっしうむ",
      },
      en: {
        display: "Hassium",
      },
      zh: {
        cn: {
          display: "𬭶",
          pinyin: "hēi",
          unicode: "2CB76",
        },
        tw: {
          display: "𨭆",
          bopomofo: "ㄏㄟ",
          pinyin: "hēi",
          pronunciationAlternative: "黑",
          unicode: "28B46",
        },
        hk: {
          display: "𨭆",
          unicode: "28B46",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(277)",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 109,
    symbol: "Mt",
    period: 7,
    group: 9,
    name: {
      ja: {
        display: "マイトネリウム",
        yomigana: "まいとねりうむ",
      },
      en: {
        display: "Meitnerium",
      },
      zh: {
        cn: {
          display: "鿏",
          pinyin: "mài",
          unicode: "9FCF",
        },
        tw: {
          display: "䥑",
          bopomofo: "ㄇㄞˋ",
          pinyin: "mài",
          pronunciationAlternative: "麥",
          unicode: "4951",
        },
        hk: {
          display: "䥑",
          unicode: "4951",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(276)",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 110,
    symbol: "Ds",
    period: 7,
    group: 10,
    name: {
      ja: {
        display: "ダームスタチウム",
        yomigana: "だーむすたちうむ",
      },
      en: {
        display: "Darmstadtium",
      },
      zh: {
        cn: {
          display: "𫟼",
          pinyin: "dá",
          unicode: "2B7FC",
        },
        tw: {
          display: "鐽",
          bopomofo: "ㄉㄚˊ",
          pinyin: "dá",
          pronunciationAlternative: "達",
          unicode: "943D",
        },
        hk: {
          display: "鐽",
          unicode: "943D",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(281)",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 111,
    symbol: "Rg",
    period: 7,
    group: 11,
    name: {
      ja: {
        display: "レントゲニウム",
        yomigana: "れんとげにうむ",
      },
      en: {
        display: "Roentgenium",
      },
      zh: {
        cn: {
          display: "𬬭",
          pinyin: "lún",
          unicode: "2CB2D",
        },
        tw: {
          display: "錀",
          bopomofo: "ㄌㄨㄣˊ",
          pinyin: "lún",
          pronunciationAlternative: "侖",
          unicode: "9300",
        },
        hk: {
          display: "錀",
          unicode: "9300",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(280)",
    categoryId: "trans",
    categoryList: ["遷移金属"],
  },
  {
    number: 112,
    symbol: "Cn",
    period: 7,
    group: 12,
    name: {
      ja: {
        display: "コペルニシウム",
        yomigana: "こぺるにしうむ",
      },
      en: {
        display: "Copernicium",
      },
      zh: {
        cn: {
          display: "鿔",
          pinyin: "gē",
          unicode: "9FD4",
        },
        tw: {
          display: "鎶",
          bopomofo: "ㄍㄜ",
          pinyin: "gē",
          pronunciationAlternative: "哥",
          unicode: "93B6",
        },
        hk: {
          display: "鎶",
          unicode: "93B6",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(285)",
    categoryId: "zn",
    categoryList: ["典型元素", "亜鉛族"],
  },
  {
    number: 113,
    symbol: "Nh",
    period: 7,
    group: 13,
    name: {
      ja: {
        display: "ニホニウム",
        yomigana: "にほにうむ",
      },
      en: {
        display: "Nihonium",
      },
      zh: {
        cn: {
          display: "鿭",
          pinyin: "nǐ",
          unicode: "9FED",
        },
        tw: {
          display: "鉨",
          bopomofo: "ㄋㄧˇ",
          pinyin: "nǐ",
          pronunciationAlternative: "你",
          unicode: "9268",
        },
        hk: {
          display: "鉨",
          unicode: "9268",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(278)",
    categoryId: "b",
    categoryList: ["典型元素", "ホウ素族"],
  },
  {
    number: 114,
    symbol: "Fl",
    period: 7,
    group: 14,
    name: {
      ja: {
        display: "フレロビウム",
        yomigana: "ふれろびうむ",
      },
      en: {
        display: "Flerovium",
      },
      zh: {
        cn: {
          display: "𫓧",
          pinyin: "fū",
          unicode: "2B4E7",
        },
        tw: {
          display: "鈇",
          bopomofo: "ㄈㄨ",
          pinyin: "fū",
          pronunciationAlternative: "夫",
          unicode: "9207",
        },
        hk: {
          display: "鈇",
          unicode: "9207",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(289)",
    categoryId: "c",
    categoryList: ["典型元素", "炭素族"],
  },
  {
    number: 115,
    symbol: "Mc",
    period: 7,
    group: 15,
    name: {
      ja: {
        display: "モスコビウム",
        yomigana: "もすこびうむ",
      },
      en: {
        display: "Moscovium",
      },
      zh: {
        cn: {
          display: "镆",
          pinyin: "mò",
          unicode: "9546",
        },
        tw: {
          display: "鏌",
          bopomofo: "ㄇㄛˋ",
          pinyin: "mò",
          pronunciationAlternative: "莫",
          unicode: "93CC",
        },
        hk: {
          display: "鏌",
          unicode: "93CC",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(289)",
    categoryId: "n",
    categoryList: ["典型元素", "窒素族"],
  },
  {
    number: 116,
    symbol: "Lv",
    period: 7,
    group: 16,
    name: {
      ja: {
        display: "リバモリウム",
        yomigana: "りばもりうむ",
      },
      en: {
        display: "Livermorium",
      },
      zh: {
        cn: {
          display: "𫟷",
          pinyin: "lì",
          unicode: "2B7F7",
        },
        tw: {
          display: "鉝",
          bopomofo: "ㄌㄧˋ",
          pinyin: "lì",
          pronunciationAlternative: "立",
          unicode: "925D",
        },
        hk: {
          display: "鉝",
          unicode: "925D",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(293)",
    categoryId: "o",
    categoryList: ["典型元素", "酸素族"],
  },
  {
    number: 117,
    symbol: "Ts",
    period: 7,
    group: 17,
    name: {
      ja: {
        display: "テネシン",
        yomigana: "てねしん",
      },
      en: {
        display: "Tennessine",
      },
      zh: {
        cn: {
          display: "鿬",
          pinyin: "tián",
          unicode: "9FEC",
        },
        tw: {
          display: "鿬",
          bopomofo: "ㄊㄧㄢˊ",
          pinyin: "tián",
          pronunciationAlternative: "田",
          unicode: "9FEC",
        },
        hk: {
          display: "鿬",
          unicode: "9FEC",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(293)",
    categoryId: "f",
    categoryList: ["典型元素", "ハロゲン"],
  },
  {
    number: 118,
    symbol: "Og",
    period: 7,
    group: 18,
    name: {
      ja: {
        display: "オガネソン",
        yomigana: "おがねそん",
      },
      en: {
        display: "Oganesson",
      },
      zh: {
        cn: {
          display: "鿫",
          pinyin: "ào",
          unicode: "9FEB",
        },
        tw: {
          display: "鿫",
          bopomofo: "ㄠˋ",
          pinyin: "ào",
          pronunciationAlternative: "澳",
          unicode: "9FEB",
        },
        hk: {
          display: "鿫",
          unicode: "9FEB",
        },
      },
    },
    isRadioactive: true,
    atomicWeight: "(294)",
    categoryId: "he",
    categoryList: ["典型元素", "貴ガス"],
  },
];
