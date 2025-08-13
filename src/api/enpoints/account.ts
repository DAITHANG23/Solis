import { API_VERSION_V1 } from "@/constants";
import apiRequest from "@/features/hooks/useApiRequest";
import { RefreshTokenResponse, UserResponse } from "@/types/models/account";

const baseURL = `${API_VERSION_V1}/users`;
const account = {
  refreshToken: (): Promise<RefreshTokenResponse> => {
    const isProd = process.env.NODE_ENV === "production";

    const data = isProd
      ? {}
      : { refreshToken: localStorage.getItem("refreshToken") };

    return apiRequest(`${baseURL}/refreshToken`, "POST", data);
  },
  logout: () => {
    const refreshToken = localStorage.getItem("refreshToken");
    return apiRequest(`${baseURL}/logout`, "POST", {
      refreshToken,
    });
  },
  getDataAccount: (): Promise<UserResponse> => {
    return apiRequest(`${baseURL}/me`, "GET");
  },
};
export default account;
