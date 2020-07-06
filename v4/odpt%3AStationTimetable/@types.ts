import { OdptBase, MultiLang } from "../@types";

export interface StationTimetable extends OdptBase {
  // ダイヤ改正日（ISO8601 日付形式）
  "dct:issued"?: string;
  // データの保証期限（ISO8601 日付時刻形式）
  "dct:valid"?: string;
  // 運行会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:operator": string;
  // 路線を表すID (odpt:Railwayのowl:sameAs)
  "odpt:railway": string;
  // 路線名（多言語対応）
  "odpt:railwayTitle"?: MultiLang;
  // 駅を表すID (odpt:Stationのowl:sameAs)
  "odpt:station"?: string;
  // 駅名（多言語対応）
  "odpt:stationTitle"?: MultiLang;
  // 方面を表すID (odpt:RailDirectionのowl:sameAs)
  "odpt:railDirection"?: string;
  // 運行を行う曜日・日付情報のID (odpt:Calendarのowl:sameAs)
  "odpt:calendar"?: string;
  // 出発時刻、終着（行先）駅等の組のリスト
  "odpt:stationTimetableObject": StationTimetableObject;
  // その他プロパティとして定義されていない注釈情報の自然言語による記載（多言語対応）
  "odpt:note"?: MultiLang;
}

export interface StationTimetableObject {
  // 到着時刻 (ISO8601時刻形式)
  "odpt:arrivalTime"?: string;
  // 出発時刻 (ISO8601時刻形式）
  "odpt:departureTime"?: string;
  // 始発駅を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:originStation"?: string[];
  // 終着駅(行先駅)を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:destinationStation"?: string[];
  // 経由駅を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:viaStation"?: string[];
  // 経由路線を表すID (odpt:Railwayのowl:sameAs) のリスト
  "odpt:viaRailway"?: string[];
  // 到着または出発する列車ID (odpt:Trainのowl:sameAs)
  "odpt:train"?: string;
  // 列車番号
  "odpt:trainNumber"?: string;
  // 列車種別のID (odpt:TrainTypeのowl:sameAs)
  "odpt:trainType"?: string;
  // 編成の名称・愛称のリスト（多言語対応）
  "odpt:trainName"?: MultiLang[];
  // 車両の所属会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:trainOwner"?: string;
  // 最終電車の場合、true。最終電車でない場合は省略
  "odpt:isLast"?: boolean;
  // 始発駅の場合、true。始発駅ではない場合は省略
  "odpt:isOrigin"?: boolean;
  // 列車が到着するプラットフォームの番号
  "odpt:platformNumber"?: string;
  // 列車が到着 又は出発するプラットフォームの名称（多言語対応）
  "odpt:platformName"?: MultiLang;
  // 車両数（駅に停車する車両数が列車毎に異なる場合に格納する）
  "odpt:carComposition"?: number;
  // その他プロパティとして定義されていない注釈情報の自然言語による記載（多言語対応）
  "odpt:note"?: MultiLang;
}
