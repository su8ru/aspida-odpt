import { OdptBase, MultiLang } from "../@types";

export interface TrainType extends OdptBase {
  // 運行会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:operator": string;
  // 列車種別（日本語）
  "dc:title"?: string;
  // 列車種別（多言語対応）
  "dc:trainTypeTitle"?: MultiLang;
}
