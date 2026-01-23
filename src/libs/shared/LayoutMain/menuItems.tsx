import { ROUTES } from "@/constants/urls";
import { ProfileIcon, SettingIcon } from "@/libs/assets";
import { DropdownListType, MenuItem } from "@/types";
import {
  HouseIcon,
  LandmarkIcon,
  UsersIcon,
  UtensilsIcon,
  IdCardIcon,
  HamburgerIcon,
} from "lucide-react";
import * as feature from "@/constants/features";

export const AVATAR_DROPDOWN_OPTIONS: Array<DropdownListType> = [
  {
    name: "yourProfile",
    url: `${ROUTES.AUTH.PROFILE}`,
    iconOptions: <ProfileIcon />,
  },
  { name: "title", iconOptions: <SettingIcon /> },
];

export const MENU_LIST = [
  {
    key: feature.DASHBOARD,
    icon: <HouseIcon />,
    title: "Dashboard",
    url: ROUTES.DASHBOARD.INDEX,
  },
  {
    key: feature.CLIENT,
    icon: <UsersIcon />,
    title: "Clients",
    url: ROUTES.CLIENTS.INDEX,
  },
  {
    key: feature.BOOKINGS,
    icon: <HamburgerIcon />,
    title: "Bookings",
    url: ROUTES.BOOKINGS.INDEX,
  },
  {
    key: feature.CONCEPT,
    icon: <UtensilsIcon />,
    title: "Concepts",
    url: ROUTES.CONCEPTS.INDEX,
    subMenuItems: [
      {
        key: feature.CONCEPT_RESTAURANTS_LIST,
        title: "Restaurants",
        url: ROUTES.RESTAURANTS.INDEX,
      },
    ],
  },
  {
    key: feature.STAFF,
    icon: <IdCardIcon />,
    title: "Staffs",
    url: ROUTES.STAFFS.INDEX,
  },
  {
    key: feature.FINANCE,
    icon: <LandmarkIcon />,
    title: "Finances",
    submenuItems: [
      {
        key: feature.FINANCE_PAYMENTS,
        title: "Payments",
        url: ROUTES.FINANCES.PAYMENTS,
      },
      {
        key: feature.FINANCE_INVOICES,
        title: "Invoices",
        url: ROUTES.FINANCES.INVOICES,
      },
    ],
  },
] as Array<MenuItem>;
