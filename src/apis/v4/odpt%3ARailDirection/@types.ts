import { OdptBase } from "../@types";

export interface RailDirection extends OdptBase {
  // 進行方向（日本語）
  "dc:title"?: string;
  // 進行方向（多言語対応）
  "odpt:operatorTitle"?: RailDirectionTitle;
}

export interface RailDirectionTitle {
  ja: string;
  en: string;
}
