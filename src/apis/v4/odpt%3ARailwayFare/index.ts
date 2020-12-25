import { RailwayFare } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "@id"?: string;
      "owl:sameAs"?: string;
      // 事業者を表すID (odpt:Operatorのowl:sameAs)
      "odpt:operator"?: string;
      // 出発駅のID (odpt:Stationのowl:sameAs)
      "odpt:fromStation"?: string;
      // 到着駅のID (odpt:Stationのowl:sameAs)
      "odpt:toStation"?: string;
    };
    resBody: RailwayFare[];
  };
}
