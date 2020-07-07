import { PassengerSurvey } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "@id"?: string;
      "owl:sameAs"?: string;
      // 事業者を表すID (odpt:Operatorのowl:sameAs)
      "odpt:operator"?: string;
      // 駅を表すID (odpt:Stationのowl:sameAs)
      "odpt:station"?: string;
      // 路線を表すID (odpt:Railwayのowl:sameAs)
      "odpt:railway"?: string;
    };
    resBody: PassengerSurvey[];
  };
}
