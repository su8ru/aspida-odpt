import { OdptBase } from "../@types";
import { StationTitle } from "../odpt%3AStation/@types";

export interface Railway extends OdptBase {
  // 路線名（日本語）
  "dc:title": string;
  // 路線名（多言語対応）
  "odpt:operatorTitle"?: RailwayTitle;
  // 路線名のよみがな（ひらがな表記）
  "odpt:kana"?: string;
  // 運行会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:operator": string;
  // 路線コード、路線シンボル表記を格納。e.g. 丸ノ内線=>M
  "odpt:lineCode"?: string;
  // 路線のラインカラーをHEX表記#RRGGBB、DIC表記DICnnn、PANTONE表記PANTONExxxxで表記する
  "odpt:color"?: string;
  // GeoJSON形式による地物情報
  "ug:region"?: object;
  // 昇順の進行方向を表すID。odpt:stationOrderのodpt:indexの昇順方向を、odpt:RailDirectionのowl:sameAsで表したIDで格納する。
  "odpt:ascendingRailDirection"?: string;
  // 降順の進行方向を表すID。odpt:stationOrderのodpt:indexの降順方向を、odpt:RailDirectionのowl:sameAsで表したIDで格納する。
  "odpt:descendingRailDirection"?: string;
  // 駅の順序を表すリスト
  "odpt:stationOrder": StationOrder[];
}

export interface StationOrder {
  // 駅を表すID (odpt:Stationのowl:sameAs)
  "odpt:station": string;
  // 駅名（多言語対応）
  "odpt:stationTitle"?: StationTitle;
  // 駅の順序を示す整数値。原則として、列車は進行方向に応じて、この値の昇順または降順に停車する。環状線などの場合は、同一の駅が複数回記載される場合がある。
  "odpt:index": number;
}

export interface RailwayTitle {
  ja: string;
  en: string;
}
