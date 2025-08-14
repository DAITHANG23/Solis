import type { Metadata } from "next";
import "./globals.css";
import { inter, red_hat_display } from "./fonts";
import { ReduxProvider } from "@/libs/redux/provider";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";
import TransSnackbarProvider from "@/contexts/SnackbarContext";

export const metadata: Metadata = {
  title: "Dominique Restaurant | Dashboard",
  description: "Dashboard for managing Dominique Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${red_hat_display.variable}`}
      suppressHydrationWarning
    >
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <body>
            <TransSnackbarProvider>{children} </TransSnackbarProvider>
          </body>
        </ThemeProvider>
      </ReduxProvider>
    </html>
  );
}
