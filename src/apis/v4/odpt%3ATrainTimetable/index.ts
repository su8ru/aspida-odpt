import { TrainTimetable } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "@id"?: string;
      "owl:sameAs"?: string;
      // 列車番号
      "odpt:trainNumber"?: string;
      // 路線のID (odpt:Railwayのowl:sameAs)
      "odpt:railway"?: string;
      // 運行事業者のID (odpt:Operatorのowl:sameAs)
      "odpt:operator"?: string;
      // 列車種別ID (odpt:TrainTypeのowl:sameAs)
      "odpt:trainType"?: string;
      // 該当する列車ID (odpt:Trainのowl:sameAs)
      "odpt:train"?: string;
      // 特定のカレンダー情報ID (odpt:Calendarのowl:sameAs)
      "odpt:calendar"?: string;
    };
    resBody: TrainTimetable[];
  };
}
