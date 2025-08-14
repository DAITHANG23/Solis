import { LanguageListType } from "./types";

export const API_VERSION_V1 = "/api/v1";

export const ROUTES = {
  HOME: { INDEX: "/" },
  ABOUT: { INDEX: "/about" },
  CONCEPTS: { INDEX: "/restaurant-concept" },
  BLOG: { INDEX: "/blog" },
  PROFILE: { INDEX: "/your-profile" },
  BOOKING: { INDEX: "/reservation-history" },
  FAVORITE_CONCEPTS: {
    INDEX: "/favorites-concepts",
    FAVORITE_RESTAURANTS: "favorite-restaurants",
    CHECKIN_RESTAURANTS: "checkin-restaurants",
  },
  LOGIN: { INDEX: "/login" },
  REGISTER: { INDEX: "/register" },
  RESET_PASSWORD: { INDEX: "/reset-password" },
  FORGOT_PASSWORD: { INDEX: "/forgot-password" },
};

export const STATUS_BOOKING = [
  { status: "PENDING", label: "pending" },
  { status: "CONFIRMED", label: "confirmed" },
  { status: "IN_PROGRESS", label: "inProgress" },
  { status: "COMPLETED", label: "completed" },
  { status: "CANCELLED_BY_USER", label: "cancelled" },
  { status: "CANCELLED_BY_ADMIN", label: "cancelled" },
];

export const SIDEBAR = {
  HOME: {
    LABEL: "Home",
    TO: `/${ROUTES.HOME.INDEX}`,
  },
};

export const LANGUAGE_OPTIONS: Array<LanguageListType> = [
  {
    name: "vietnamese",
    value: "vi-VN",
    icon: "https://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg",
  },
  {
    name: "english",
    value: "en-GB",
    icon: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
  },
];
