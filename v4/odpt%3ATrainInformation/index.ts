import { TrainInformation } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "owl:sameAs"?: string;
      // 運行情報を配信する事業者のID (odpt:Operatorのowl:sameAs)
      "odpt:operator"?: string;
      // 運行情報が発生した路線のID (odpt:Railwayのowl:sameAs)
      "odpt:railway"?: string;
    };
    resBody: TrainInformation;
  };
}
