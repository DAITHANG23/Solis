"use client";
import { Typography, Box, CssBaseline, Divider, List, ListItemIcon, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Image from "next/image";
import { UserRoundIcon } from "lucide-react";
import { MenuArrowIcon } from "@/libs/assets";
import { useRouter } from "next/navigation";
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
  StyledListem,
  StyledListItemButton,
  StyledListItemText,
  StyledLogoutIcon,
  StyledSearchIcon,
  StyledToolbar,
  StyledToolbarContainer,
} from "./LayoutMain.styles";
import { Menu } from "@shared/index";
import { AVATAR_DROPDOWN_OPTIONS, MENU_LIST } from "./menuItems";
import { ROUTES } from "@/constants/urls";

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
          <Image src={`${isHideSideBar ? "/favicon.ico" : "/assets/images/logo.png"}`} alt='logo' fill />
        </StyledImageContainer>
      </StyledToolbar>
      <Divider />
      <List>
        {MENU_LIST.map((item) => (
          <StyledListem
            key={item.title}
            disablePadding
            isHideSideBar={isHideSideBar}
            itemSidebarValue={itemSidebarValue}
            item={item.value}
          >
            <StyledListItemButton onClick={() => handleClickListItem(item.url, item.value)}>
              <ListItemIcon
                sx={{
                  minWidth: isHideSideBar ? "24px" : "40px",
                  color: itemSidebarValue === item.value ? "white" : "black",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!isHideSideBar && <StyledListItemText primary={item.title} />}
            </StyledListItemButton>
          </StyledListem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <StyledAppBar position='fixed' color='default' isHideSideBar={isHideSideBar}>
        <StyledToolbarContainer>
          <StyledIconInputMenu color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle}>
            <MenuIcon />
          </StyledIconInputMenu>

          <StyledIconInputMenuArrow onClick={handleClickMenuArrow} isHideSideBar={isHideSideBar}>
            <MenuArrowIcon />
          </StyledIconInputMenuArrow>
          <StyledBoxNavbar>
            <StyledInfoNameBox>
              <Typography variant='bodyM' sx={{ color: "black" }}>
                @Dom Nguyen
              </Typography>
              <Typography variant='bodyXS' sx={{ color: "#888B94" }}>
                Admin
              </Typography>
            </StyledInfoNameBox>
            <Menu
              titleButton={<UserRoundIcon width={"24px"} height={"24px"} color='black' />}
              verticalAnchor='bottom'
              horizontalTransformOrigin='center'
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
      <StyledBoxDrawer component='nav' aria-label='mailbox folders' isHideSideBar={isHideSideBar}>
        <StyledDrawer
          container={container}
          variant='temporary'
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
        <StyledDrawerPermanent variant='permanent' open isHideSideBar={isHideSideBar}>
          {drawer}
        </StyledDrawerPermanent>
      </StyledBoxDrawer>
      <StyledBoxMain component='main'>
        <Toolbar />
        {children}
      </StyledBoxMain>
    </Box>
  );
};
