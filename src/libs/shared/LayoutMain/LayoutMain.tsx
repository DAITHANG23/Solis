"use client";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import { StyledBoxMain } from "./LayoutMain.styles";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from "next/navigation";
import RenderBreadcrumbs from "../RenderBreadcrumbs/RenderBreadcrumbs";
import useBreakPoints from "@/features/hooks/useBreakPoints";
import useBreadcrumbs from "@/features/hooks/useBreadCrumbs";
import { ROUTES } from "@/constants/urls";

interface LayoutMainProps {
  children: React.ReactNode;
}

export const LayoutMain = (props: LayoutMainProps) => {
  const { children } = props;
  const pathname = usePathname();

  const { isDesktopSize } = useBreakPoints();
  const { getRouteBreadcrumb } = useBreadcrumbs();

  const route = ROUTES.find((item) => item.path === pathname);
  const breadcrumbs = getRouteBreadcrumb(route?.id || "/") || [];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar pathname={pathname} breadcrumbs={breadcrumbs} />
      <StyledBoxMain component='main'>
        <Toolbar />
        {!isDesktopSize && <RenderBreadcrumbs breadcrumbs={breadcrumbs} />}
        {children}
      </StyledBoxMain>
    </Box>
  );
};
