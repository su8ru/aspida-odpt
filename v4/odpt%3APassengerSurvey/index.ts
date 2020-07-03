import { PassengerSurvey } from "./@types";

export interface Methods {
  get: {
    query: {
      "acl:consumerKey": string;
      "@id"?: string;
      "owl:sameAs"?: string;
      "odpt:operator"?: string;
      "odpt:station"?: string;
      "odpt:railway"?: string;
    };
    resBody: PassengerSurvey;
  };
}
