"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import Script from "next/script";
import {
  StyledContainerLoginForm,
  StyledContentContainer,
  StyledButton,
  StyledImageLogo,
} from "./LoginForm.styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import useNotification from "@/features/hooks/useNotification";
declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    google?: any;
  }
}

export const GoogleLoginButton = () => {
  // const router = useRouter();
  const { showSuccess, showError } = useNotification();
  const [error, setError] = useState<string | null>(null);
  const handleGoogleLogin = () => {
    setError(null);

    if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
      setError("Google Client ID is not set");
      console.error(error);
      return;
    }

    if (!window.google || !window.google.accounts) {
      console.error("Google Identity script not loaded yet");
      return;
    }

    window.google.accounts.id.initialize({
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,

      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      callback: async (response: any) => {
        try {
          const idToken = response.credential;

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/google/`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ google_jwt: idToken }),
              credentials: "include",
            }
          );

          if (res.ok) {
            showSuccess("Login successfull!");
            // router.push("/");
            window.location.href = "/";
          } else {
            const errorData = await res.json();
            setError(errorData.message || "Login failed");
            console.error("Login failed:", errorData);
          }
        } catch (err) {
          showError(`${err}`);
        }
      },
    });

    window.google.accounts.id.prompt();
  };

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      />
      <StyledButton type="button" onClick={handleGoogleLogin}>
        <Image
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          width={20}
          height={20}
          style={{ width: "20px", height: "20px" }}
        />
        <Typography variant="bodyM">Google</Typography>
      </StyledButton>
    </>
  );
};

export const LoginForm = () => {
  const { t } = useTranslation("home");

  return (
    <StyledContainerLoginForm>
      <StyledImageLogo>
        <Image src={"/assets/images/logo2.png"} alt="logo" fill />
      </StyledImageLogo>
      <StyledContentContainer>
        <Typography variant="h5">{t("login.content")}</Typography>
        <GoogleLoginButton />
      </StyledContentContainer>
    </StyledContainerLoginForm>
  );
};
