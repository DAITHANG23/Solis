"use client";
import {
  MenuItem,
  Menu,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { useMemo, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const useStyles = makeStyles(() => ({
  boxImage: {
    position: "relative",
    width: 30,
    height: 24,
    borderRadius: "8px",
    overflow: "hidden",
    display: "inline-block",
  },
  listItemText: {
    marginLeft: "16px",

    "& .MuiListItemText-primary": {
      fontSize: "14px !important",
      color: "black",
      fontWeight: 600,
    },
  },
  avatarMenu: {
    width: "40px",
    height: "40px",
    position: "relative",
    display: "flex",
    borderRadius: "9999px",
    backgroundColor: "#F2F3FA",
    fontSize: "0.875rem",
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 2px white", // giả lập ring-white
    },
  },
}));

type verticalAnchor = "top" | "bottom" | "center";
type horizontalAnchor = "left" | "right" | "center";

type MenuOption = {
  icon?: string;
  name: string;
  value?: string;
  href?: string;
  iconOptions?: React.ReactNode;
};

interface MenuCustomProps {
  verticalAnchor?: verticalAnchor;
  horizontalAnchor?: horizontalAnchor;
  verticalTransformOrigin?: verticalAnchor;
  horizontalTransformOrigin?: horizontalAnchor;
  options: Array<MenuOption>;
  onSelect?: (value: string) => void;
  valueSelected?: string;
  titleButton?: React.ReactNode | string;
  isAvatarMenu?: boolean;
  isArrowStyle?: boolean;
}

export const MenuCustom = ({
  options,
  verticalAnchor = "top",
  horizontalAnchor = "left",
  verticalTransformOrigin = "top",
  horizontalTransformOrigin = "left",
  onSelect,
  valueSelected,
  titleButton,
  isAvatarMenu = false,
  isArrowStyle = true,
}: MenuCustomProps) => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("translation");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: string) => {
    if (onSelect) {
      onSelect(value);
    }

    handleClose();
  };

  const handleClickUrl = (href: string) => {
    router.push(href);
    handleClose();
  };

  const iconSelected = useMemo(() => {
    return options.find((o) => o.value === valueSelected)?.icon;
  }, [options, valueSelected]);

  return (
    <div>
      {isAvatarMenu ? (
        <IconButton
          className={classes.avatarMenu}
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {titleButton}
        </IconButton>
      ) : (
        <IconButton
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {onSelect ? (
            <div className={classes.boxImage}>
              <Image src={iconSelected || ""} alt="icon" fill />
            </div>
          ) : (
            titleButton
          )}
        </IconButton>
      )}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: verticalAnchor,
          horizontal: horizontalAnchor,
        }}
        transformOrigin={{
          vertical: verticalTransformOrigin,
          horizontal: horizontalTransformOrigin,
        }}
        slotProps={{
          paper: {
            sx: {
              overflow: "visible",
              mt: 1,
              "&::before": {
                content: '""',
                position: "absolute",
                width: "14px",
                height: "14px",
                top: 0,
                right: isAvatarMenu ? "55px" : "50px",
                borderBottomLeftRadius: "3.5px",
                clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
                backgroundColor: "#fff",
                backgroundRepeat: "no-repeat",
                backgroundSize: "42px 42px",
                backgroundPosition: "right top",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                transform: "translateY(-50%) rotate(135deg)",
                zIndex: 0,
                opacity: isArrowStyle ? 1 : 0,
              },
            },
          },
        }}
      >
        {options.map((o) => {
          return (
            <MenuItem
              key={o.name}
              onClick={() => {
                return o.value
                  ? handleSelect(o.value)
                  : handleClickUrl(o.href || "/");
              }}
            >
              {o.icon && (
                <ListItemIcon>
                  <div className={classes.boxImage}>
                    <Image src={o.icon || ""} alt="icon" fill />
                  </div>
                </ListItemIcon>
              )}
              {o.iconOptions && (
                <ListItemIcon>
                  <div>{o.iconOptions}</div>
                </ListItemIcon>
              )}
              <ListItemText classes={{ root: classes.listItemText }}>
                {t(`settings.${o.name}`)}
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
