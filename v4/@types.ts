export interface OdptBase {
  // JSON-LD仕様に基づく @context のURL
  "@context": string;
  // 固有識別子(ucode)
  "@id": string;
  // クラス指定
  "@type": string;
  // データ生成日時（ISO8601 日付時刻形式）
  "dc:date"?: string;
  // 固有識別子。
  "owl:SameAs": string;
}

export interface MultiLang {
  ja: string;
  en: string;
}
