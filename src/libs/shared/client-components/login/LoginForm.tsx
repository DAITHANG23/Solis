"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import {
  StyledContainerLoginForm,
  StyledContentContainer,
  StyledImageLogo,
} from "./LoginForm.styles";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import useNotification from "@/features/hooks/useNotification";
import useTransMutation from "@/features/hooks/useTransMutation";
import { authEndpoints } from "@/api/enpoints";
import { useAuthStore } from "@/store/useAuthStore";
import authService from "@/utils/authService";
declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    google?: any;
  }
}

export const GoogleLoginButton = () => {
  const router = useRouter();
  const { showSuccess, showError } = useNotification();
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  const { mutateAsync: handleGoogleLogin } = useTransMutation(
    (idToken: string) => authEndpoints.googleLogin({ idToken }),
    {
      onSuccess: (data) => {
        const accessTokenResponse = data.data.accessToken;
        const refreshTokenResponse = data.data.refreshToken;

        if (accessTokenResponse && process.env.NODE_ENV !== "production") {
          authService.setAccessToken(accessTokenResponse);
        }
        if (refreshTokenResponse && process.env.NODE_ENV !== "production") {
          authService.setRefreshToken(refreshTokenResponse);
        }
        setIsAuthenticated(true || !!accessTokenResponse);
        showSuccess("Login Success");
        router.push("/");
      },
    },
  );

  return (
    <div style={{ marginTop: "32px" }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          handleGoogleLogin(credentialResponse.credential as string);
        }}
        onError={() => {
          showError("Login Failed");
        }}
      />
    </div>
  );
};

export const LoginForm = () => {
  return (
    <StyledContainerLoginForm>
      <StyledImageLogo>
        <Image src={"/assets/images/logo2.png"} alt='logo' fill />
      </StyledImageLogo>
      <StyledContentContainer>
        <Typography variant='h5'>Log in to your account</Typography>

        <GoogleLoginButton />
      </StyledContentContainer>
    </StyledContainerLoginForm>
  );
};
