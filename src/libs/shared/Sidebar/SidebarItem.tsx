import React, { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";
import {
  StyledBoxTextAndIcon,
  StyledChevronRightIcon,
  StyledDotIcon,
  StyledExpandMoreIcon,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
} from "./SidebarItem.styles";
import { MenuItem } from "@/types";
import { Collapse, Popover } from "@mui/material";

interface SidebarItemProps {
  menu: MenuItem;
  LinkComponent?: React.ElementType;
  activeUrl?: string;
  level: number;
  isHideSideBar: boolean;
}
const SidebarItem = (props: SidebarItemProps) => {
  const { menu, LinkComponent, activeUrl, level, isHideSideBar } = props;
  const WrapperComponent = menu.url ? (LinkComponent ?? "div") : "div";

  const [active, setActive] = useState(false);
  const [chooseMenuItem, setChooseMenuItem] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsHovering(true);

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    if (isHideSideBar && menu.submenuItems && menu.submenuItems.length > 0) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setIsHovering(false);
    }, 150);
  };

  const handlePopoverEnter = () => {
    setIsHovering(true);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handlePopoverLeave = () => {
    setIsHovering(false);
    setAnchorEl(null);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const open = Boolean(anchorEl);

  const calculatedIsActive = useCallback(
    (_menu: MenuItem) => {
      if (_menu.url === activeUrl) return true;
      if (_menu.url && activeUrl) {
        const urlWithoutQueryParams = _menu.url.split("?")[0];
        const rootPath = urlWithoutQueryParams.split("/")[1];
        const activeRootPath = activeUrl.split("/")[1];

        if (
          urlWithoutQueryParams !== "/" &&
          rootPath === activeRootPath &&
          activeUrl.includes(urlWithoutQueryParams)
        ) {
          return true;
        }
      }
      if (!_menu.submenuItems || _menu.submenuItems.length === 0) {
        return false;
      }

      let result = false;

      // biome-ignore lint/complexity/noForEach: <explanation>
      _menu.submenuItems.forEach((_m) => {
        result = result || calculatedIsActive(_m);
      });

      return result;
    },
    [activeUrl],
  );

  useEffect(() => {
    const isActive = calculatedIsActive(menu);

    setActive(isActive || false);
  }, [menu, calculatedIsActive]);

  const hideDotIcon = level === 2;

  const hasSubMenuItem = !!menu?.submenuItems?.length;

  const renderExpandIcon = useMemo(() => {
    if (!menu.submenuItems || !menu?.submenuItems?.length || isHideSideBar) return null;

    return (
      <StyledExpandMoreIcon
        className='hover-icon'
        isActive={active}
        chooseMenuItem={chooseMenuItem}
      />
    );
  }, [menu, active, isHideSideBar, chooseMenuItem]);

  const handleClickMenuItem = (value: string) => {
    setChooseMenuItem((prev) => (prev === value ? null : value));
  };
  return (
    <>
      {!hasSubMenuItem ? (
        <WrapperComponent
          href={menu.url}
          style={{
            color: "#FFF",
            textDecoration: "none",
          }}
        >
          <StyledListItem
            isActive={active}
            isMainMenu={!!menu.icon}
            level={level}
            isHideSideBar={isHideSideBar}
            hasSubMenuItem={hasSubMenuItem}
          >
            <StyledListItemButton level={level}>
              <StyledBoxTextAndIcon isHideSideBar={isHideSideBar} level={level}>
                <StyledListItemIcon isActive={active}>
                  {menu.icon || (!hideDotIcon && <StyledDotIcon isActive={active} />)}
                </StyledListItemIcon>
                <StyledListItemText
                  primary={menu.title}
                  isHideSidebar={isHideSideBar}
                  level={level}
                />
              </StyledBoxTextAndIcon>
            </StyledListItemButton>
          </StyledListItem>
        </WrapperComponent>
      ) : (
        <div>
          <StyledListItem
            isActive={active}
            isMainMenu={!!menu.icon}
            level={level}
            isHideSideBar={isHideSideBar}
            hasSubMenuItem={hasSubMenuItem}
            aria-haspopup='true'
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            className={isHovering ? "hovering" : ""}
          >
            <StyledListItemButton level={level} onClick={() => handleClickMenuItem(menu.key)}>
              <StyledBoxTextAndIcon isHideSideBar={isHideSideBar} level={level}>
                <StyledListItemIcon isActive={active} className='hover-icon'>
                  {menu.icon || (!hideDotIcon && <StyledDotIcon isActive={active} />)}
                </StyledListItemIcon>
                <StyledListItemText
                  primary={menu.title}
                  isHideSidebar={isHideSideBar}
                  level={level}
                />
              </StyledBoxTextAndIcon>
              {isHideSideBar ? (
                <StyledChevronRightIcon className='hover-icon' isActive={active} />
              ) : (
                renderExpandIcon
              )}
            </StyledListItemButton>
          </StyledListItem>

          {isHideSideBar ? (
            <Popover
              sx={{
                pointerEvents: "none",
                "& .MuiPaper-root": {
                  pointerEvents: "auto",
                },
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "center",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
              PaperProps={{
                onMouseEnter: handlePopoverEnter,
                onMouseLeave: handlePopoverLeave,
              }}
            >
              {menu.submenuItems?.map((item) => {
                return (
                  <SidebarItem
                    key={item.key}
                    menu={item}
                    LinkComponent={LinkComponent}
                    activeUrl={activeUrl}
                    level={(level ?? 0) + 1}
                    isHideSideBar={isHideSideBar}
                  />
                );
              })}
            </Popover>
          ) : (
            <Collapse in={chooseMenuItem === menu.key} unmountOnExit>
              {menu.submenuItems?.map((item) => {
                return (
                  <SidebarItem
                    key={item.key}
                    menu={item}
                    LinkComponent={LinkComponent}
                    activeUrl={activeUrl}
                    level={(level ?? 0) + 1}
                    isHideSideBar={isHideSideBar}
                  />
                );
              })}
            </Collapse>
          )}
        </div>
      )}
    </>
  );
};

export default memo(SidebarItem);
