import { API_VERSION_V1 } from "@/constants/common";
import apiRequest from "@/features/hooks/useApiRequest";
import { GetAllConceptsResponse } from "@/types/models/concept";
import { buildQueryString } from "@/utils/helper";

const baseURL = `${API_VERSION_V1}/gateway/concepts`;

const concepts = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  getConcepts: (params: any): Promise<GetAllConceptsResponse> => {
    const query = buildQueryString(params);
    return apiRequest(`${baseURL}${query}`, "GET");
  },
};

export default concepts;
