import { OdptBase } from "../@types";

export interface Calender extends OdptBase {
  // カレンダー名称（日本語）。e.g. 平日、休日、市場休日
  "dc:title"?: string;
  // ァレンダー名称（多言語対応）
  "odpt:calenderTitle"?: CalenderTitle;
  // 該当する日付のリスト。値は全てISO8601の日付形式。
  "odpt:day"?: string[];
  // カレンダー有効期間。値は全てISO8601の期間形式。
  "odpt:duration"?: string;
}

export interface CalenderTitle {
  ja: string;
  en: string;
}
