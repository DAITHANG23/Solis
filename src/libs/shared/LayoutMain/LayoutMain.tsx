"use client";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import { StyledBoxMain } from "./LayoutMain.styles";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from "next/navigation";

interface LayoutMainProps {
  children: React.ReactNode;
}

export const LayoutMain = (props: LayoutMainProps) => {
  const { children } = props;
  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar pathname={pathname} />
      <StyledBoxMain component='main'>
        <Toolbar />
        {children}
      </StyledBoxMain>
    </Box>
  );
};
