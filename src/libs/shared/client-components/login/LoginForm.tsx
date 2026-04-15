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
import axios from "axios";
import useTransMutation from "@/features/hooks/useTransMutation";
declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    google?: any;
  }
}

export const GoogleLoginButton = () => {
  const router = useRouter();
  const { showSuccess, showError } = useNotification();

  const { mutateAsync: handleGoogleLogin } = useTransMutation(
    (idToken: string) => axios.post("http://localhost:9002/api/v1/auth/google-login", { idToken }),
    {
      onSuccess: () => {
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
