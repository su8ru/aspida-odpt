import { Operator } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "@id"?: string;
      "owl:sameAs"?: string;
      // 事業者を表すID (odpt:Operatorのowl:sameAs)
      "odpt:operator"?: string;
    };
    resBody: Operator[];
  };
}
