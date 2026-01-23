import { styled, ListItemButton, ListItemText, ListItem, ListItemIcon } from "@mui/material";
import { DotIcon } from "lucide-react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const StyledDotIcon = styled(DotIcon, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ isActive, theme }) => ({
  width: isActive ? "8px" : "4px",
  height: isActive ? "8px" : "4px",
  marginRight: "16px",
  backgroundColor: isActive ? theme.palette.common.white : theme.palette.common.black,
  borderRadius: 100,
  transform: "translate3d(0px, 0, 0)",
  transition: "all 300ms linear",
}));

export const StyledExpandMoreIcon = styled(ExpandMoreIcon, {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "chooseMenuItem",
})<{ isActive: boolean; chooseMenuItem: string | null }>(({ isActive, chooseMenuItem, theme }) => ({
  color: isActive ? theme.palette.common.white : theme.palette.common.black,
  transform: chooseMenuItem ? "rotate(180deg)" : "rotate(0deg)",
  "&:hover": {
    color: `${theme.palette.common.white} !important`,
  },
}));

export const StyledChevronRightIcon = styled(ChevronRightIcon, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ isActive, theme }) => ({
  color: isActive ? theme.palette.common.white : theme.palette.common.black,
  position: "absolute",
  right: "4px",
  width: "18px",
  height: "18px",
  "&:hover": {
    color: `${theme.palette.common.white} !important`,
  },
}));

export const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) =>
    prop !== "isActive" &&
    prop !== "isMainMenu" &&
    prop !== "level" &&
    prop !== "isHideSideBar" &&
    prop !== "hasSubMenuItem",
})<{
  isActive: boolean;
  isMainMenu: boolean;
  level: number;
  isHideSideBar: boolean;
  hasSubMenuItem: boolean;
}>(({ isHideSideBar, isMainMenu, isActive, level, hasSubMenuItem, theme }) => ({
  padding: 0,
  minHeight: level > 0 ? "48px" : "64px",
  position: "relative",
  "& .MuiListItemButton-root": {
    margin: "0 auto",
    display: "flex",
    alignContent: "center",
    justifyContent: isHideSideBar
      ? "flex-start"
      : !isHideSideBar && hasSubMenuItem
        ? "space-between"
        : "flex-start",
    borderLeft: !isHideSideBar
      ? isMainMenu && isActive
        ? "6px solid #76B5FF"
        : `6px solid ${theme.palette.primary.main}`
      : "",
    color: isActive ? theme.palette.common.white : theme.palette.common.black,

    "&:hover": {
      backgroundColor: "#ec407a",
      borderLeft: !isHideSideBar && (isMainMenu ? "6px solid #76B5FF" : "6px solid #ec407a"),
      color: theme.palette.common.white,
      "& .hover-icon": {
        color: theme.palette.common.white,
        transition: "all 300ms linear",
      },
      // style hover icon dot when level > 0
      "& .MuiListItemIcon-root > svg": {
        backgroundColor: level > 0 ? theme.palette.common.white : "",
      },
    },

    backgroundColor: isActive && level < 1 ? "#ec407a" : theme.palette.primary.main,
  },

  "&.hovering .MuiListItemButton-root": {
    backgroundColor: "#ec407a",
    borderLeft: !isHideSideBar && (isMainMenu ? "6px solid #76B5FF" : "6px solid #ec407a"),
    color: theme.palette.common.white,
    "& .hover-icon": {
      color: theme.palette.common.white,
      transition: "all 300ms linear",
    },
  },
}));

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "level",
})<{ level: number }>(({ level, theme }) => ({
  minHeight: level > 0 ? "48px" : "64px",
  width: "12.5rem",
  padding: level > 0 ? theme.spacing(0, 8) : theme.spacing(0, 2),
  "&:hover": {
    "& .MuiListItemIcon-root, & .MuiListItemText-root": {
      color: "white",
      transform: "translate3d(0px, 0, 0)",
      transition: "all 300ms linear",
    },
  },
}));

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "isHideSidebar" && prop !== "level",
})<{ isHideSidebar: boolean; level: number }>(({ isHideSidebar, level, theme }) => ({
  "& .MuiListItemText-primary": {
    fontSize: isHideSidebar && level < 1 ? "10px" : "15px !important",
    margin: theme.spacing(0.5, 2),
  },
}));

export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ isActive, theme }) => ({
  minWidth: "0px",
  color: isActive ? theme.palette.common.white : theme.palette.common.black,
}));
