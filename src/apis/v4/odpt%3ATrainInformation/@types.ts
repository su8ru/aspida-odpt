import { OdptBase, MultiLang } from "../@types";

export interface TrainInformation extends OdptBase {
  // データ保証期限（ISO8601 日付時刻形式）
  "dct:valid"?: string;
  // 発生時刻（ISO8601 日付時刻形式）
  "odpt:timeOfOrigin": string;
  // 運行会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:operator": string;
  // 発生路線を表すID (odpt:Railwayのowl:sameAs)
  "odpt:railway": string;
  // 平常時は省略。運行情報存在する場合は「運行情報あり」を格納。遅延などの情報を取得可能な場合は、「遅延」等のテキストを格納（多言語対応）
  "odpt:trainInformationStatus"?: MultiLang;
  // 運行情報テキスト（多言語対応）
  "odpt:trainInformationText"?: MultiLang;
  // 運行情報の適用される方向を表すID。IDにはodpt:RailDirectionのowl:sameAsの値を利用する。取得不可能な場合は省略
  "odpt:railDirection": string;
  // 発生エリア。取得不可能な場合は省略（多言語対応）
  "odpt:trainInformationArea"?: MultiLang;
  // 鉄道種類。取得不可能な場合は省略（多言語対応）
  "odpt:trainInformationKind"?: MultiLang;
  // 発生場所起点。取得不可能な場合は省略
  "odpt:stationFrom"?: string;
  // 発生場所終点。取得不可能な場合は省略
  "odpt:stationTo"?: string;
  // 発生区間。取得不可能な場合は省略（多言語対応）
  "odpt:trainInformationRange"?: MultiLang;
  // 発生理由。取得不可能な場合は省略（多言語対応）
  "odpt:trainInformationCause"?: string[];
  // 振替路線一覧のリスト
  "odpt:transferRailways"?: string[];
  // 復旧見込み時刻。ただし配信されない場合が多い
  "odpt:resumeEstimate"?: string;
}
