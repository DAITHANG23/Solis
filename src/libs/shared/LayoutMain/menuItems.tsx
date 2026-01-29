import { URLS } from "@/constants/urls";
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
    url: `${URLS.AUTH.PROFILE}`,
    iconOptions: <ProfileIcon />,
  },
  { name: "title", iconOptions: <SettingIcon /> },
];

export const MENU_LIST = [
  {
    key: feature.DASHBOARD,
    icon: <HouseIcon />,
    title: "Dashboard",
    url: URLS.DASHBOARD.INDEX,
  },
  {
    key: feature.CLIENT,
    icon: <UsersIcon />,
    title: "Clients",
    url: URLS.CLIENTS.INDEX,
  },
  {
    key: feature.BOOKINGS,
    icon: <HamburgerIcon />,
    title: "Bookings",
    url: URLS.BOOKINGS.INDEX,
  },
  {
    key: feature.CONCEPT,
    icon: <UtensilsIcon />,
    title: "Concepts",
    url: URLS.CONCEPTS.INDEX,
    subMenuItems: [
      {
        key: feature.CONCEPT_RESTAURANTS_LIST,
        title: "Restaurants",
        url: URLS.RESTAURANTS.INDEX,
      },
    ],
  },
  {
    key: feature.STAFF,
    icon: <IdCardIcon />,
    title: "Staffs",
    url: URLS.STAFFS.INDEX,
  },
  {
    key: feature.FINANCE,
    icon: <LandmarkIcon />,
    title: "Finances",
    submenuItems: [
      {
        key: feature.FINANCE_PAYMENTS,
        title: "Payments",
        url: URLS.FINANCES.PAYMENTS,
      },
      {
        key: feature.FINANCE_INVOICES,
        title: "Invoices",
        url: URLS.FINANCES.INVOICES,
      },
    ],
  },
] as Array<MenuItem>;
