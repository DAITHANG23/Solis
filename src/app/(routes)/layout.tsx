"use client";

import ConfirmDialogContext from "@/contexts/ConfirmationContext";
import { BreadcrumbsProvider } from "@/contexts/SpreadscrumbContext";
import authService from "@/utils/authService";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useAuthStore } from "@/store/useAuthStore";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  useEffect(() => {
    const accessTokenCookie = authService.getAccessToken();

    if (accessTokenCookie) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  return <>{children}</>;
}

export default function ContainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
      <QueryClientProvider client={queryClient}>
        <AuthGuard>
          <ConfirmDialogContext>
            <BreadcrumbsProvider>{children}</BreadcrumbsProvider>
          </ConfirmDialogContext>
        </AuthGuard>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}
