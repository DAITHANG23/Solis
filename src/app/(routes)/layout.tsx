"use client";

import ConfirmDialogContext from "@/contexts/ConfirmationContext";
import i18n from "@/libs/i18n/i18n";
import { accessToken, getAccountInfo } from "@/libs/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import cookie from "@/utils/cookies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { isEmpty } from "lodash";
// import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

export default function ContainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  const accessTokenState = useAppSelector((state) => state.auth.accessToken);
  const accountInfo = useAppSelector((state) => state.auth.accountInfo);

  const queryClient = new QueryClient();
  // const router = useRouter();
  useEffect(() => {
    const accessTokenCookie = cookie.getAccessToken();

    if (process.env.NODE_ENV === "development") {
      const refreshTokenCookie = cookie.getRefreshToken();
      localStorage.setItem("refreshToken", refreshTokenCookie);
    }

    // if (!accessTokenCookie) {
    //   dispatch(logout());
    //   router.push("/login");
    // }
    localStorage.setItem("accessToken", accessTokenCookie);

    dispatch(accessToken({ accessToken: accessTokenCookie as string }));
    // dispatch(getAllNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (accessTokenState && isEmpty(accountInfo)) {
      dispatch(getAccountInfo());
    }
  }, [dispatch, accessTokenState, accountInfo]);
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ConfirmDialogContext>
          <div>{children}</div>
        </ConfirmDialogContext>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
