import { RailDirection } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "@id"?: string;
      "owl:sameAs"?: string;
    };
    resBody: RailDirection;
  };
}
