import { API_VERSION_V1 } from "@/constants/common";
import apiRequest from "@/features/hooks/useApiRequest";
import { RefreshTokenResponse, UserResponse, UserLoginGmailResponse } from "@/types/models/account";
import authService from "@/utils/authService";

const baseURL = `${API_VERSION_V1}/auth`;
const auth = {
  refreshToken: (): Promise<RefreshTokenResponse> => {
    const isProd = process.env.NODE_ENV === "production";

    const data = isProd ? {} : { refreshToken: authService.getRefreshToken() };

    return apiRequest(`${baseURL}/refresh-token`, "POST", data);
  },
  logout: () => {
    return apiRequest(`${baseURL}/signout`, "POST");
  },
  getDataAccount: (): Promise<UserResponse> => {
    return apiRequest(`${baseURL}/me`, "GET");
  },

  googleLogin: (data: { idToken: string }): Promise<UserLoginGmailResponse> => {
    return apiRequest(`${baseURL}/google-login`, "POST", data);
  },
};
export default auth;
