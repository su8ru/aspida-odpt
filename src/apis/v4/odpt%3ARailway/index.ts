import { Railway } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "@id"?: string;
      "owl:sameAs"?: string;
      // 路線名（e.g. 小田原線、京王線、相模原線）
      "dc:title"?: string;
      // 事業者を表すID (odpt:Operatorのowl:sameAs)
      "odpt:operator"?: string;
      // 路線コード、路線シンボル表記（e.g. 小田原線 => OH、丸ノ内線 => M）
      "odpt:lineCode"?: string;
    };
    resBody: Railway[];
  };
}
