import { base } from "../@types";

export interface Calender extends base {
  "dc:title?": string;
  "odpt:calenderTitle?": CalenderTitle;
  "odpt:day?": string[];
  "odpt:duration?": string;
}

export interface CalenderTitle {
  ja: string;
  en: string;
}
