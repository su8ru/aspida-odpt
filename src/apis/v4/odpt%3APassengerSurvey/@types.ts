import { OdptBase } from "../@types";

export interface PassengerSurvey extends OdptBase {
  // 運行会社を表すID (odpt:Operatorのowl:sameAs)
  "odpt:operator": string;
  // 駅を表すID (odpt:Stationのowl:sameAs) のリスト
  "odpt:station": string[];
  // 路線を表すID (odpt:Railwayのowl:sameAs) のリスト
  "odpt:railway": string[];
  // 乗降人員(降車を含む)の場合は true、乗車人員(降車を含まない)の場合は false
  "odpt:includeAlighting": boolean;
  // 調査年度と平均乗降人員数(または乗車人員数)の組のリスト
  "odpt:passengerSurveyObject": PassengerSurveyObject[];
}

export interface PassengerSurveyObject {
  // 調査年度
  "odpt:surveyYear": number;
  // 駅の1日あたりの平均乗降人員数(または乗車人員数)
  "odpt:passengerJourneys": number;
}
