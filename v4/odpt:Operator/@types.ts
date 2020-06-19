import { base } from "../@types";

export interface Operator extends base {
  "dc:title?": string;
  "odpt:operatorTitle?": OperatorTitle;
}

export interface OperatorTitle {
  ja: string;
  en: string;
}
