import { Train } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "owl:sameAs"?: string;
      // 列車情報を配信する事業者のID (odpt:Operatorのowl:sameAs)
      "odpt:operator"?: string;
      // 当該列車が運行している路線のID (odpt:Railwayのowl:sameAs)
      "odpt:railway"?: string;
    };
    resBody: Train;
  };
}
