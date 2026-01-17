import { ROUTES } from "@/constants/urls";
import { ProfileIcon, SettingIcon } from "@/libs/assets";
import { DropdownListType, MenuList } from "@/types";
import {
  CreditCardIcon,
  HouseIcon,
  LandmarkIcon,
  UsersIcon,
  UtensilsIcon,
  IdCardIcon,
  HamburgerIcon,
} from "lucide-react";

export const AVATAR_DROPDOWN_OPTIONS: Array<DropdownListType> = [
  {
    name: "yourProfile",
    url: `${ROUTES.AUTH.PROFILE}`,
    iconOptions: <ProfileIcon />,
  },
  { name: "title", iconOptions: <SettingIcon /> },
];

export const MENU_LIST = [
  { icon: <HouseIcon />, title: "Dashboard", url: ROUTES.DASHBOARD.INDEX, value: "dashboard" },
  {
    icon: <UsersIcon />,
    title: "Clients",
    url: ROUTES.CLIENTS.INDEX,
    value: "clients",
  },
  {
    icon: <HamburgerIcon />,
    title: "Bookings",
    url: ROUTES.BOOKINGS.INDEX,
    value: "bookings",
  },
  {
    icon: <CreditCardIcon />,
    title: "Payments",
    url: ROUTES.PAYMENTS.INDEX,
    value: "payments",
  },
  {
    icon: <UtensilsIcon />,
    title: "Concepts",
    url: ROUTES.CONCEPTS.INDEX,
    value: "concepts",
    subMenuItems: [
      {
        title: "Restaurants",
        url: ROUTES.RESTAURANTS.INDEX,
        value: "restaurants",
      },
    ],
  },
  {
    icon: <IdCardIcon />,
    title: "Staffs",
    url: ROUTES.STAFFS.INDEX,
    value: "staffs",
  },
  {
    icon: <LandmarkIcon />,
    title: "Finances",
    url: ROUTES.FINANCES.INDEX,
    value: "finances",
  },
] as Array<MenuList>;
