import { Station } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "@id"?: string;
      "owl:sameAs"?: string;
      // 駅名（e.g. 東京、新宿、上野）
      "dc:date"?: string;
      // 事業者を表すID (odpt:Operatorのowl:sameAs)
      "odpt:operator"?: string;
      // 駅が存在する路線ID (odpt:Railwayのowl:sameAs)
      "odpt:railway"?: string;
      // 駅ナンバリング（e.g. OH01=小田急新宿駅）
      "odpt:stationCode"?: string;
    };
    resBody: Station[];
  };
}
