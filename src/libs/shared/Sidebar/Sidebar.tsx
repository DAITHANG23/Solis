import { useMemo, useState } from "react";
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
import { Divider, List, Typography } from "@mui/material";
import { Menu } from "../Menu";
import { AVATAR_DROPDOWN_OPTIONS, MENU_LIST } from "../LayoutMain/menuItems";
import useConfirmation from "@/features/hooks/useConfirmation";
import { useAppDispatch } from "@/libs/redux/hooks";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ROUTES } from "@/constants/urls";
import { logout } from "@/libs/redux/authSlice";
import SidebarItem from "./SidebarItem";
import { AppLink } from "@/libs/shared/index";
import { makeStyles } from "@mui/styles";

interface SidebarProps {
  window?: () => Window;
  pathname?: string;
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
  const { window, pathname } = props;

  const classes = useStyled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isHideSideBar, setIsHideSideBar] = useState(false);

  const showConfirmation = useConfirmation();
  const dispatch = useAppDispatch();
  const router = useRouter();

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

  const linkComponent = useMemo(() => AppLink, []);

  const menuListOptimize = useMemo(() => MENU_LIST, []);
  const drawer = (
    <div>
      <StyledToolbar>
        <StyledImageContainer href={`${ROUTES.DASHBOARD.INDEX}`}>
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
      <StyledAppBar position='fixed' color='default' isHideSideBar={isHideSideBar}>
        <StyledToolbarContainer>
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
          <StyledBoxNavbar>
            <StyledInfoNameBox>
              <Typography variant='bodyM' className={classes.nameAccount}>
                @Dom Nguyen
              </Typography>
              <Typography variant='bodyXS' className={classes.role}>
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
    </>
  );
};

export default Sidebar;
