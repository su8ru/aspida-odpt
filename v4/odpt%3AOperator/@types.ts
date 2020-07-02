import { OdptBase } from "../@types";

export interface Operator extends OdptBase {
  "dc:title?": string;
  "odpt:operatorTitle?": OperatorTitle;
}

export interface OperatorTitle {
  ja: string;
  en: string;
}
