import { API_VERSION_V1 } from "@/constants/common";
import apiRequest from "@/features/hooks/useApiRequest";
import { UserProfileResponse } from "@/types";

const baseURL = `${API_VERSION_V1}/user`;

const user = {
  getProfile: (): Promise<UserProfileResponse> => {
    return apiRequest(`${baseURL}/me`, "GET");
  },
};

export default user;
