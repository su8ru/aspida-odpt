import { OdptBase } from "../@types";

export interface Station extends OdptBase {
  // 駅名（日本語）
  "dc:title"?: string;
  // 駅名（多言語対応）
  "odpt:operatorTitle"?: StationTitle;
  // 運行会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:operator": string;
  // 路線を表すID (odpt:Railwayのowl:sameAs)
  "odpt:railway": string;
  // 駅コード
  "odpt:stationCode"?: string;
  // 代表点の経度 (10進表記、測地系はWGS84)
  "geo:long"?: number;
  // 代表点の緯度 (10進表記、測地系はWGS84)
  "geo:lat"?: string;
  // GeoJSON形式による地物情報
  "ug:region"?: object;
  // 駅出入口を表すIDのリスト。IDにはug:Poiの@idの値を利用する。
  "odpt:exit"?: string[];
  // 乗り換え可能路線のID (odpt:Railwayのowl:sameAs) のリスト
  "odpt:connectingRailway"?: string[];
  // 駅時刻表を表すID (odpt:StationTimetableのowl:sameAs) のリスト
  "odpt:stationTimetable"?: string[];
  // 駅乗降人員数を表すID (odpt:PassengerSurveyのowl:sameAs) のリスト
  "odpt:passengerSurvey"?: string[];
}

export interface StationTitle {
  ja: string;
  en: string;
}
