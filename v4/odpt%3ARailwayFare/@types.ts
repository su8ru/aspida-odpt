import { OdptBase } from "../@types";

export interface RailwayFare extends OdptBase {
  // 運賃改定日（ISO8601 日付形式）
  "dct:issued"?: string;
  // データの保証期限（ISO8601 日付時刻形式）
  "dct:valid"?: string;
  // 運行会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:operator": string;
  // 出発駅のID (odpt:Stationのowl:sameAs)
  "odpt:fromStation": string;
  // 到着駅のID (odpt:Stationのowl:sameAs)
  "odpt:toStation": string;
  // 切符利用時の運賃
  "odpt:ticketFare": number;
  // ICカード利用時の運賃
  "odpt:icCardFare"?: number;
  // 切符利用時の子供運賃
  "odpt:childTicketFare"?: number;
  // ICカード利用時の子供運賃
  "pt:childIcCardFare"?: number;
  // 運賃計算上の経由駅を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:viaStation"?: string[];
  // 運賃計算上の経由路線を表すID (odpt:Railwayのowl:sameAs) のリスト
  "odpt:viaRailway"?: string[];
  // チケット種別（特急、ライナーなど列車種別によって料金が異なる場合に記載）
  "odpt:ticketType"?: string;
  // 支払い方法のリスト
  "dpt:paymentMethod"?: string[];
}
