"use client";

import clsx from "clsx";
import type { ElementData } from "@/app/lib/elements-data";
import fontFamily from "@/app/styles/font_family.module.css";
import MiniPeriodicTable from "./mini-periodic-table";
import styles from "./styles.module.css";

interface ElementCardProps {
  selectedElement: ElementData;
}

// Bopomofo tone marks: ˊ(U+02CA) ˇ(U+02C7) ˋ(U+02CB) ˙(U+02D9)
const TONE_MARKS = new Set(["ˊ", "ˇ", "ˋ", "˙"]);

function BopomofoDisplay({ bopomofo }: { bopomofo: string }) {
  const tone = TONE_MARKS.has(bopomofo[bopomofo.length - 1]) ? bopomofo[bopomofo.length - 1] : "";
  return (
    <span className={clsx(styles.hanBopomofo, fontFamily.zhTW)}>
      {tone ? (
        <span>
          {bopomofo.slice(0, -2)}
          <span className={styles.hanBopomofoFinal}>
            {bopomofo[bopomofo.length - 2]}
            <span className={styles.hanBopomofoTone}>{tone}</span>
          </span>
        </span>
      ) : (
        bopomofo
      )}
    </span>
  );
}

export default function ElementCard({ selectedElement }: ElementCardProps) {
  return (
    <div className={styles.detailGrid}>
      <div className={styles.symbolArea}>
        <span className={styles.atomicNumber}>{selectedElement.number}</span>
        <span className={styles.symbol}>{selectedElement.symbol}</span>
      </div>
      <div className={styles.miniTableArea}>
        <MiniPeriodicTable selectedElement={selectedElement} />
      </div>
      <div className={styles.nameArea}>
        <div className={styles.nameJa}>{selectedElement.name.ja.display}</div>
        <div className={styles.nameEn}>{selectedElement.name.en.display}</div>
      </div>
      <div className={styles.hanArea}>
        <div className={clsx(styles.hanItem, fontFamily.zhCN)}>
          <span className={styles.hanPinyin}>{selectedElement.name.zh.cn.pinyin}</span>
          <span className={styles.hanChar}>{selectedElement.name.zh.cn.display}</span>
          <span className={styles.hanUnicode}>U+{selectedElement.name.zh.cn.unicode}</span>
          <span className={styles.hanLabel}>Mainland China</span>
        </div>
        <div className={styles.hanDivider} />
        <div className={clsx(styles.hanItem, fontFamily.zhTW)}>
          <span className={styles.hanPinyin}>{selectedElement.name.zh.tw.pinyin}</span>
          <span className={styles.hanChar}>
            {selectedElement.name.zh.tw.display}
            <BopomofoDisplay bopomofo={selectedElement.name.zh.tw.bopomofo} />
          </span>
          <span className={styles.hanUnicode}>U+{selectedElement.name.zh.tw.unicode}</span>
          <span className={styles.hanLabel}>Taiwan</span>
        </div>
        <div className={styles.hanDivider} />
        <div className={clsx(styles.hanItem, fontFamily.zhHK)}>
          <span className={styles.hanPinyin}></span>
          <span className={styles.hanChar}>{selectedElement.name.zh.hk.display}</span>
          <span className={styles.hanUnicode}>U+{selectedElement.name.zh.hk.unicode}</span>
          <span className={styles.hanLabel}>Hong Kong</span>
        </div>
      </div>
    </div>
  );
}
