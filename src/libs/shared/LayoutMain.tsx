"use client";
import AppBar from "@mui/material/AppBar";
import {
  Typography,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  styled,
  BoxProps,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Image from "next/image";
import { MenuCustom } from "./Menu";
import {
  CreditCardIcon,
  LogOutIcon,
  SearchIcon,
  UserRoundIcon,
  WarehouseIcon,
  HouseIcon,
  UsersIcon,
  ShoppingCartIcon,
  ClipboardListIcon,
} from "lucide-react";
import { MenuArrowIcon, ProfileIcon, SettingIcon } from "@/libs/assets";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import { DropdownListType } from "@/types/common";
import { logout } from "@/libs/redux/authSlice";
import { useAppDispatch } from "@/libs/redux/hooks";
import useConfirmation from "@/features/hooks/useConfirmation";
import Link from "next/link";

interface MenuList {
  icon: React.ReactNode;
  title: string;
  href: string;
  value: string;
}
interface StyledBoxDrawerProps extends BoxProps {
  isHideSideBar: boolean;
}
const drawerWidth = 288;

const StyledToolbar = styled(Toolbar)(() => ({
  textAlign: "center",
}));

const StyledImageContainer = styled(Link)(() => ({
  position: "relative",
  width: "160px",
  height: "40px",
  textAlign: "center",
  margin: "0 auto",
}));

const StyledToolbarContainer = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StyledBoxNavbar = styled("div")(() => ({
  display: "flex",
  gap: "16px",
}));

const StyledInfoNameBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}));

const StyledAppBar = styled(AppBar, {
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

const StyledIconInputMenu = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
  marginRight: theme.spacing(2),
}));

const StyledIconInputMenuArrow = styled(IconButton, {
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

const StyledIconInputSearch = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  padding: theme.spacing(2),
  width: "40px",
  height: "40px",
}));

const StyledIconInputLogout = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.error[50],
  padding: theme.spacing(2),
  width: "40px",
  height: "40px",
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  width: "20px",
  height: "20px",
  color: theme.palette.common.black,
}));

const StyledLogoutIcon = styled(LogOutIcon)(({ theme }) => ({
  width: "20px",
  height: "20px",
  color: theme.palette.error.main,
}));

const StyledBoxDrawer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isHideSideBar",
})<StyledBoxDrawerProps>(({ theme, isHideSideBar }) => ({
  [theme.breakpoints.up("sm")]: {
    width: isHideSideBar ? "60px" : drawerWidth,
    flexShrink: 0,
  },
}));

const StyledDrawer = styled(Drawer, {
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

const StyledDrawerPermanent = styled(Drawer, {
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

const StyledBoxMain = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  p: 3,
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  padding: theme.spacing(4),
  backgroundColor: theme.palette.grey[300],
  height: "100vh",
}));

const AVATAR_DROPDOWN_OPTIONS: Array<DropdownListType> = [
  {
    name: "yourProfile",
    href: `${ROUTES.PROFILE.INDEX}`,
    iconOptions: <ProfileIcon />,
  },
  { name: "title", iconOptions: <SettingIcon /> },
];

const MENU_LIST = [
  { icon: <HouseIcon />, title: "Dashboard", href: "/", value: "dashboard" },
  {
    icon: <UsersIcon />,
    title: "Customers",
    href: "/customers",
    value: "customers",
  },
  {
    icon: <ShoppingCartIcon />,
    title: "Orders",
    href: "/orders",
    value: "orders",
  },
  {
    icon: <CreditCardIcon />,
    title: "Payments",
    href: "/payments",
    value: "payments",
  },
  {
    icon: <ClipboardListIcon />,
    title: "Purchase waiting list",
    href: "/purchase-waiting-list",
    value: "purchaseWaitingList",
  },
  {
    icon: <WarehouseIcon />,
    title: "Warehouse",
    href: "/warehouses",
    value: "warehouses",
  },
] as Array<MenuList>;

interface LayoutMainProps {
  window?: () => Window;
  children: React.ReactNode;
}

export const LayoutMain = (props: LayoutMainProps) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isHideSideBar, setIsHideSideBar] = useState(false);
  const [itemSidebarValue, setItemSidebarValue] = useState<string>("dashboard");

  const showConfirmation = useConfirmation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const logoutHandle = () => {
    dispatch(logout());
    router.push("/login");
  };

  const handleLogout = () => {
    showConfirmation({
      title: "Logout",
      closeLabel: "Cancel",
      confirmLabel: "Confirm",
      description: <>Are you sure you want to logout?</>,
      onConfirm: logoutHandle,
    });
  };

  const handleClickMenuArrow = () => {
    setIsHideSideBar((prev) => !prev);
  };

  const handleClickListItem = (url: string, value: string) => {
    setItemSidebarValue(value);
    router.push(url);
  };

  const drawer = (
    <div>
      <StyledToolbar>
        <StyledImageContainer href={`${ROUTES.HOME.INDEX}`}>
          <Image
            src={`${isHideSideBar ? "/favicon.ico" : "/assets/images/logo.png"}`}
            alt="logo"
            fill
          />
        </StyledImageContainer>
      </StyledToolbar>
      <Divider />
      <List>
        {MENU_LIST.map((item) => (
          <ListItem
            key={item.title}
            disablePadding
            sx={{
              "& .MuiListItemButton-root": {
                padding: `16px ${isHideSideBar ? "16px" : "32px"}`,
                margin: "0 auto",
                borderLeft: `${itemSidebarValue === item.value ? "6px solid #76B5FF" : "none"}`,
                color: itemSidebarValue === item.value ? "white" : "black",
                "&:hover": { backgroundColor: "#e53963" },
                backgroundColor:
                  itemSidebarValue === item.value ? "#e53963" : "#EF476F",
              },
            }}
          >
            <ListItemButton
              onClick={() => handleClickListItem(item.href, item.value)}
            >
              <ListItemIcon
                sx={{
                  minWidth: isHideSideBar ? "24px" : "40px",
                  color: itemSidebarValue === item.value ? "white" : "black",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!isHideSideBar && (
                <ListItemText
                  primary={item.title}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "15px !important",
                    },
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <StyledAppBar
        position="fixed"
        color="default"
        isHideSideBar={isHideSideBar}
      >
        <StyledToolbarContainer>
          <StyledIconInputMenu
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </StyledIconInputMenu>

          <StyledIconInputMenuArrow
            onClick={handleClickMenuArrow}
            isHideSideBar={isHideSideBar}
          >
            <MenuArrowIcon />
          </StyledIconInputMenuArrow>
          <StyledBoxNavbar>
            <StyledInfoNameBox>
              <Typography variant="bodyM" sx={{ color: "black" }}>
                @Dom Nguyen
              </Typography>
              <Typography variant="bodyXS" sx={{ color: "#888B94" }}>
                Admin
              </Typography>
            </StyledInfoNameBox>
            <MenuCustom
              titleButton={
                <UserRoundIcon width={"24px"} height={"24px"} color="black" />
              }
              verticalAnchor="bottom"
              horizontalTransformOrigin="center"
              options={AVATAR_DROPDOWN_OPTIONS}
              isAvatarMenu
            />

            <StyledIconInputSearch>
              <StyledSearchIcon />
            </StyledIconInputSearch>

            <StyledIconInputLogout onClick={handleLogout}>
              <StyledLogoutIcon />
            </StyledIconInputLogout>
          </StyledBoxNavbar>
        </StyledToolbarContainer>
      </StyledAppBar>
      <StyledBoxDrawer
        component="nav"
        aria-label="mailbox folders"
        isHideSideBar={isHideSideBar}
      >
        <StyledDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
          isHideSideBar={isHideSideBar}
        >
          {drawer}
        </StyledDrawer>
        <StyledDrawerPermanent
          variant="permanent"
          open
          isHideSideBar={isHideSideBar}
        >
          {drawer}
        </StyledDrawerPermanent>
      </StyledBoxDrawer>
      <StyledBoxMain component="main">
        <Toolbar />
        {children}
      </StyledBoxMain>
    </Box>
  );
};
