import { OdptBase, MultiLang } from "../@types";

export interface Train extends OdptBase {
  // データ保証期限（ISO8601 日付時刻形式）
  "dct:valid"?: string;
  // 運行会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:operator": string;
  // 鉄道路線を表すID (odpt:Railwayのowl:sameAs)
  "odpt:railway": string;
  // 進行方向を表すID (odpt:RailDirectionのowl:sameAs)
  "odpt:railDirection"?: string;
  // 列車番号
  "odpt:trainNumber": string;
  // 列車種別 (odpt:TrainTypeのowl:sameAs)
  "odpt:trainType"?: string;
  // 編成の名称・愛称のリスト（多言語対応）
  "odpt:trainName"?: MultiLang;
  // 列車が直前に出た駅、あるいは停車中の駅を表すID (odpt:Stationのowl:sameAs) を格納
  "odpt:fromStation"?: string;
  // 列車が向かっている駅を表すID (odpt:Stationのowl:sameAs) を格納
  "odpt:toStation"?: string | null;
  // 列車の始発駅を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:originStation"?: string[];
  // 列車の終着駅(行先駅)を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:destinationStation"?: string[];
  // 列車の経由駅を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:viaStation"?: string[];
  // 列車の経由路線を表すID (odpt:Railwayのowl:sameAs)のリスト
  "odpt:viaRailway"?: string[];
  // 車両の所属会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:trainOwner"?: string;
  // 路線内の列車順序
  "odpt:index"?: number;
  // 遅延時間（秒）
  "odpt:delay"?: number;
  // 車両数
  "odpt:carComposition"?: number;
  // その他プロパティとして定義されていない注釈情報の自然言語による記載（多言語対応）
  "odpt:note"?: MultiLang;
}
