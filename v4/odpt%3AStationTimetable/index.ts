import { StationTimetable } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "@id"?: string;
      "owl:sameAs"?: string;
      // 駅を表すID（odpt:Stationのowl:sameAs）
      "odpt:station"?: string;
      // 路線を表すID（odpt:Railwayのowl:sameAs）
      "odpt:railway"?: string;
      // 事業者を表すID（odpt:Operatorのowl:sameAs）
      "odpt:operator"?: string;
      // 進行方向を表すID（odpt:RailDirectionのowl:sameAs）
      "odpt:railDirection"?: string;
      // 実施日を表すID（odpt:Calendarのowl:sameAs）
      "odpt:calendar"?: string;
      // 特定日付の時刻表を取得
      "dc:date"?: string;
    };
    resBody: StationTimetable[];
  };
}
