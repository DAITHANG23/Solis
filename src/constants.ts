import { LanguageListType } from "./types";

export const API_VERSION_V1 = "/api/v1";

export const ROUTES = {
  DASHBOARD: { INDEX: "/" },
  CONCEPTS: { INDEX: "/concepts" },
  CLIENTS: { INDEX: "/clients" },
  BOOKINGS: { INDEX: "/reservations" },
  RESTAURANTS: { INDEX: "/restaurants" },
  STAFFS: { INDEX: "/staffs" },
  PROFILE: { INDEX: "/your-profile" },
  FINANCES: { INDEX: "/finances" },
  PAYMENTS: { INDEX: "/payments" },
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
  DASHBOARD: {
    LABEL: "Dashboard",
    TO: `${ROUTES.DASHBOARD.INDEX}`,
  },
  BOOKINGS: {
    LABEL: "Bookings",
    TO: `${ROUTES.BOOKINGS.INDEX}`,
  },
  RESTAURANTS: {
    LABEL: "Restaurants",
    TO: `${ROUTES.RESTAURANTS.INDEX}`,
  },
  STAFFS: {
    LABEL: "Staffs",
    TO: `${ROUTES.STAFFS.INDEX}`,
  },
  CLIENTS: {
    LABEL: "Clients",
    TO: `${ROUTES.CLIENTS.INDEX}`,
  },
  CONCEPTS: {
    LABEL: "Concepts",
    TO: `${ROUTES.CONCEPTS.INDEX}`,
  },
  PROFILE: {
    LABEL: "Your Profile",
    TO: `${ROUTES.PROFILE.INDEX}`,
  },
  FINANCES: {
    LABEL: "Finances",
    TO: `${ROUTES.FINANCES.INDEX}`,
  },
  PAYMENTS: {
    LABEL: "Payments",
    TO: `${ROUTES.PAYMENTS.INDEX}`,
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
