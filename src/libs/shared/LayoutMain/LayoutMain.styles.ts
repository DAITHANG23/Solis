import {
  AppBar,
  Box,
  BoxProps,
  Drawer,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { LogOutIcon, SearchIcon } from "lucide-react";
interface StyledBoxDrawerProps extends BoxProps {
  isHideSideBar: boolean;
}
const drawerWidth = 288;

export const StyledToolbar = styled(Toolbar)(() => ({
  textAlign: "center",
}));

export const StyledImageContainer = styled(Link)(() => ({
  position: "relative",
  width: "160px",
  height: "40px",
  textAlign: "center",
  margin: "0 auto",
}));

export const StyledToolbarContainer = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledBoxNavbar = styled("div")(() => ({
  display: "flex",
  gap: "16px",
}));

export const StyledInfoNameBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}));

export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "isHideSideBar",
})<{ isHideSideBar: boolean }>(({ theme, isHideSideBar }) => ({
  backgroundColor: theme.palette.background.default,
  padding: 0,
  [theme.breakpoints.up("sm")]: {
    width: isHideSideBar
      ? "calc(100% - 60px) !important"
      : `calc(100% - ${drawerWidth}px) !important`,
    marginLeft: isHideSideBar ? "60px" : `${drawerWidth}px`,
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 2),
  },
}));

export const StyledIconInputMenu = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
  marginRight: theme.spacing(2),
}));

export const StyledIconInputMenuArrow = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "isHideSideBar",
})<{ isHideSideBar: boolean }>(({ theme, isHideSideBar }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  marginLeft: theme.spacing(2),
  transform: isHideSideBar ? "rotate(180deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const StyledIconInputSearch = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  padding: theme.spacing(2),
  width: "40px",
  height: "40px",
}));

export const StyledIconInputLogout = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.error[50],
  padding: theme.spacing(2),
  width: "40px",
  height: "40px",
}));

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  width: "20px",
  height: "20px",
  color: theme.palette.common.black,
}));

export const StyledLogoutIcon = styled(LogOutIcon)(({ theme }) => ({
  width: "20px",
  height: "20px",
  color: theme.palette.error.main,
}));

export const StyledBoxDrawer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isHideSideBar",
})<StyledBoxDrawerProps>(({ theme, isHideSideBar }) => ({
  [theme.breakpoints.up("sm")]: {
    width: isHideSideBar ? "60px" : drawerWidth,
    flexShrink: 0,
  },
}));

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isHideSideBar",
})<{ isHideSideBar: boolean }>(({ theme, isHideSideBar }) => ({
  [theme.breakpoints.up("sm")]: {
    display: " none",
  },
  [theme.breakpoints.down("sm")]: {
    display: " block",
  },

  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: isHideSideBar ? "60px" : drawerWidth,
  },
}));

export const StyledDrawerPermanent = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isHideSideBar",
})<{ isHideSideBar: boolean }>(({ theme, isHideSideBar }) => ({
  [theme.breakpoints.up("sm")]: {
    display: " block",
  },
  [theme.breakpoints.down("sm")]: {
    display: " none",
  },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: isHideSideBar ? "60px" : drawerWidth,
    backgroundColor: theme.palette.primary.main,
  },
}));

export const StyledBoxMain = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  p: 3,
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  padding: theme.spacing(4),
  backgroundColor: theme.palette.grey[300],
  height: "100vh",
}));
