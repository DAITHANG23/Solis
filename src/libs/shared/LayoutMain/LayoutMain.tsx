"use client";

import {
  Typography,
  Box,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Image from "next/image";
import { MenuCustom } from "../Menu";
import {
  CreditCardIcon,
  UserRoundIcon,
  WarehouseIcon,
  HouseIcon,
  UsersIcon,
  ShoppingCartIcon,
  SquareMenuIcon,
  LandmarkIcon,
} from "lucide-react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { MenuArrowIcon, ProfileIcon, SettingIcon } from "@/libs/assets";
import { useRouter } from "next/navigation";
import { ROUTES, SIDEBAR } from "@/constants";
import { DropdownListType } from "@/types/common";
import { logout } from "@/libs/redux/authSlice";
import { useAppDispatch } from "@/libs/redux/hooks";
import useConfirmation from "@/features/hooks/useConfirmation";
import {
  StyledAppBar,
  StyledBoxDrawer,
  StyledBoxMain,
  StyledBoxNavbar,
  StyledDrawer,
  StyledDrawerPermanent,
  StyledIconInputLogout,
  StyledIconInputMenu,
  StyledIconInputMenuArrow,
  StyledIconInputSearch,
  StyledImageContainer,
  StyledInfoNameBox,
  StyledLogoutIcon,
  StyledSearchIcon,
  StyledToolbar,
  StyledToolbarContainer,
} from "./LayoutMain.styles";

interface MenuList {
  icon: React.ReactNode;
  title: string;
  href: string;
  value: string;
}

const AVATAR_DROPDOWN_OPTIONS: Array<DropdownListType> = [
  {
    name: "yourProfile",
    href: `${ROUTES.PROFILE.INDEX}`,
    iconOptions: <ProfileIcon />,
  },
  { name: "title", iconOptions: <SettingIcon /> },
];

const MENU_LIST = [
  {
    icon: <HouseIcon />,
    title: `${SIDEBAR.DASHBOARD.LABEL}`,
    href: `${SIDEBAR.DASHBOARD.TO}`,
    value: "dashboard",
  },
  {
    icon: <SquareMenuIcon />,
    title: `${SIDEBAR.CONCEPTS.LABEL}`,
    href: `${SIDEBAR.CONCEPTS.TO}`,
    value: "concepts",
  },
  {
    icon: <UsersIcon />,
    title: `${SIDEBAR.CLIENTS.LABEL}`,
    href: `${SIDEBAR.CLIENTS.TO}`,
    value: "clients",
  },
  {
    icon: <StorefrontIcon />,
    title: `${SIDEBAR.RESTAURANTS.LABEL}`,
    href: `${SIDEBAR.RESTAURANTS.TO}`,
    value: "restaurants",
  },
  {
    icon: <ShoppingCartIcon />,
    title: `${SIDEBAR.BOOKINGS.LABEL}`,
    href: `${SIDEBAR.BOOKINGS.TO}`,
    value: "bookings",
  },
  {
    icon: <CreditCardIcon />,
    title: `${SIDEBAR.PAYMENTS.LABEL}`,
    href: `${SIDEBAR.PAYMENTS.TO}`,
    value: "payments",
  },
  {
    icon: <WarehouseIcon />,
    title: "Warehouse",
    href: "/warehouse",
    value: "warehouse",
  },
  {
    icon: <ManageAccountsIcon />,
    title: `${SIDEBAR.STAFFS.LABEL}`,
    href: `${SIDEBAR.STAFFS.TO}`,
    value: "staffs",
  },
  {
    icon: <LandmarkIcon />,
    title: `${SIDEBAR.FINANCES.LABEL}`,
    href: `${SIDEBAR.FINANCES.TO}`,
    value: "finances",
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
        <StyledImageContainer href={`${ROUTES.DASHBOARD.INDEX}`}>
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
