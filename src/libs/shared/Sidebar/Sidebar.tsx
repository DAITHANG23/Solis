import { useMemo, useState } from "react";
import { capitalize } from "lodash";
import {
  StyledAppBar,
  StyledBoxDrawer,
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
} from "./Sidebar.styles";
import { MenuIcon, UserRoundIcon } from "lucide-react";
import { MenuArrowIcon } from "@/libs/assets";
import { Box, Divider, List, Typography } from "@mui/material";
import { Menu } from "@shared/index";
import { AVATAR_DROPDOWN_OPTIONS, MENU_LIST } from "../LayoutMain/menuItems";
import useConfirmation from "@/features/hooks/useConfirmation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { URLS } from "@/constants/urls";
import SidebarItem from "./SidebarItem";
import { AppLink } from "@/libs/shared/index";
import { makeStyles } from "@mui/styles";
import useBreakPoints from "@/features/hooks/useBreakPoints";
import RenderBreadcrumbs from "../RenderBreadcrumbs/RenderBreadcrumbs";
import { Breadcrumb } from "@/types";
import useProfile from "@/features/hooks/useProfile";

interface SidebarProps {
  window?: () => Window;
  pathname?: string;
  breadcrumbs: Array<Breadcrumb>;
}

const useStyled = makeStyles(() => ({
  nameAccount: {
    color: "black",
  },
  role: {
    color: "#888B94",
  },
}));

const Sidebar = (props: SidebarProps) => {
  const { window, pathname, breadcrumbs } = props;

  const classes = useStyled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isHideSideBar, setIsHideSideBar] = useState(false);
  const { data: user } = useProfile();

  const userProfile = user?.data;

  const showConfirmation = useConfirmation();
  const router = useRouter();

  const { isDesktopSize } = useBreakPoints();
  const container = window !== undefined ? () => window().document.body : undefined;

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

  const linkComponent = useMemo(() => AppLink, []);

  const menuListOptimize = useMemo(() => MENU_LIST, []);
  const drawer = (
    <div>
      <StyledToolbar>
        <StyledImageContainer href={`${URLS.DASHBOARD.INDEX}`} isHiddenSidebar={isHideSideBar}>
          <Image
            src={`${isHideSideBar ? "/favicon.ico" : "/assets/images/logo.png"}`}
            alt='logo'
            fill
          />
        </StyledImageContainer>
      </StyledToolbar>
      <Divider />
      <List>
        {menuListOptimize.map((item) => {
          return (
            <SidebarItem
              key={item.key}
              menu={item}
              LinkComponent={linkComponent}
              activeUrl={pathname}
              level={0}
              isHideSideBar={isHideSideBar}
            />
          );
        })}
      </List>
    </div>
  );
  return (
    <>
      <StyledAppBar
        position='fixed'
        color='default'
        isHideSideBar={isHideSideBar}
        isDesktopSize={isDesktopSize}
      >
        <StyledIconInputMenu
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </StyledIconInputMenu>

        <StyledIconInputMenuArrow onClick={handleClickMenuArrow} isHideSideBar={isHideSideBar}>
          <MenuArrowIcon />
        </StyledIconInputMenuArrow>
        {isDesktopSize && (
          <Divider
            orientation='vertical'
            sx={{ marginRight: "16px", backgroundColor: "#E4E7F1" }}
            flexItem
          />
        )}
        <StyledToolbarContainer isDesktopSize={isDesktopSize}>
          {isDesktopSize && (
            <Box display={"flex"} flexDirection={"column"}>
              {breadcrumbs && <RenderBreadcrumbs breadcrumbs={breadcrumbs} />}
            </Box>
          )}
          <StyledBoxNavbar>
            <StyledInfoNameBox>
              <Typography variant='bodyM' className={classes.nameAccount}>
                @{userProfile?.fullName}
              </Typography>
              <Typography variant='bodyXS' className={classes.role}>
                {capitalize(userProfile?.role || "")}
              </Typography>
            </StyledInfoNameBox>
            <Menu
              titleButton={
                userProfile?.avatarUrl ? (
                  <Image
                    src={userProfile.avatarUrl}
                    width={32}
                    height={32}
                    alt='avatar'
                    style={{ borderRadius: "50%" }}
                  />
                ) : (
                  <UserRoundIcon width={24} height={24} color='black' />
                )
              }
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
    </>
  );
};

export default Sidebar;
