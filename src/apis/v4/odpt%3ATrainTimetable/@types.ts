import { OdptBase, MultiLang } from "../@types";

export interface TrainTimetable extends OdptBase {
  // ダイヤ改正日（ISO8601 日付形式）
  "dct:issued"?: string;
  // データの保証期限（ISO8601 日付時刻形式）
  "dct:valid"?: string;
  // 運行会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:operator": string;
  // 路線のIDを格納する。IDにはodpt:Railwayのowl:sameAsの値を利用する。
  "odpt:railway": string;
  // 進行方向を表すID (odpt:RailDirectionのowl:sameAs)
  "odpt:railDirection"?: string;
  // 運行を行う曜日・日付情報のID (odpt:Calendarのowl:sameAs)
  "odpt:calendar"?: string;
  // 列車のID (odpt:Trainのowl:sameAs)
  "odpt:train"?: string;
  // 列車番号
  "odpt:trainNumber": string;
  // 列車種別のID (odpt:TrainTypeのowl:sameAs)
  "odpt:trainType"?: string;
  // 編成の名称・愛称のリスト（多言語対応）
  "odpt:trainName"?: MultiLang[];
  // 車両の所属会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:trainOwner"?: string;
  // 列車の始発駅を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:originStation"?: string[];
  // 列車の終着駅(行先駅)を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:destinationStation"?: string[];
  // 列車の経由駅を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:viaStation"?: string[];
  // 列車の経由路線を表すID (odpt:Railwayのowl:sameAs) のリスト
  "odpt:viaRailway"?: string[];
  // 同一の列車の列車時刻表が複数に分かれている場合、直前の列車時刻表を表すID (odpt:TrainTimetableのowl:sameAs) のリスト
  "odpt:previousTrainTimetable"?: string[];
  // 同一の列車の列車時刻表が複数に分かれている場合、直後の列車時刻表を表すID (odpt:TrainTimetableのowl:sameAs) のリスト
  "odpt:nextTrainTimetable"?: string[];
  // 出発時刻と出発駅の組か、到着時刻と到着駅の組のリストを格納
  "odpt:trainTimetableObject": TrainTimetableObject[];
  // 乗車券の他に別料金が必要か
  "odpt:needExtraFee"?: boolean;
  // その他プロパティとして定義されていない注釈情報の自然言語による記載（多言語対応）
  "odpt:note"?: MultiLang;
}

export interface TrainTimetableObject {
  // 到着時刻 (ISO8601時刻形式)。出発時刻と到着時刻が異なる可能性がある場合は、到着時刻を記述する場合がある。
  "odpt:arrivalTime"?: string;
  // 到着駅のID (odpt:Stationのowl:sameAs)
  "odpt:arrivalStation"?: string;
  // 出発時刻 (ISO8601時刻形式）
  "odpt:departureTime"?: string;
  // 出発駅のID (odpt:Stationのowl:sameAs)
  "odpt:departureStation"?: string;
  // 列車が到着するプラットフォームの番号
  "odpt:platformNumber"?: string;
  // 列車が到着 又は出発するプラットフォームの名称（多言語対応）
  "odpt:platformName"?: MultiLang;
  // その他プロパティとして定義されていない注釈情報の自然言語による記載（多言語対応）
  "odpt:note"?: MultiLang;
}
