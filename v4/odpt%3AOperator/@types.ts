import { OdptBase } from "../@types";

export interface Operator extends OdptBase {
  // 事業者名称（日本語）
  "dc:title?": string;
  // 事業者名称（多言語対応）
  "odpt:operatorTitle?": OperatorTitle;
}

export interface OperatorTitle {
  ja: string;
  en: string;
}
