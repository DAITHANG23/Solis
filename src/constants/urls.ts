import * as features from "@/constants/features";

export const URLS = {
  DASHBOARD: { INDEX: "/" },
  AUTH: { PROFILE: "/profile" },
  CONCEPTS: {
    INDEX: "/concepts",
    DETAIL: "/concepts/:id/detail",
    EDIT: "/concepts/:id/edit",
    REVIEW: "/concepts/:id/review",
  },
  RESTAURANTS: {
    INDEX: "/restaurants",
    DETAIL: "/restaurants/:id/detail",
    EDIT: "/restaurants/:id/edit",
    CREATE: "/restaurants/add",
  },
  BOOKINGS: {
    INDEX: "/bookings",
    CREATE: "/bookings/add",
    EDIT: "/bookings/:id/edit",
    DETAIL: "/bookings/:id/detail",
  },
  CLIENTS: {
    INDEX: "/clients",
    PROFILE: "/clients/:id/profile",
    CREATE: "/clients/new",
    EDIT: "/clients/:id/edit",
  },
  STAFFS: { INDEX: "/staffs", PROFILE: "/staffs/:id/profile" },
  FINANCES: {
    INDEX: "/finances",
    PAYMENTS: "/finances/payments",
    REFUNDS: "/finances/refunds",
    INVOICES: "/finances/invoices",
    REVENUE_REPORT: "/finances/revenue-report",
  },
  LOGIN: { INDEX: "/login" },
  REGISTER: { INDEX: "/register" },
  RESET_PASSWORD: { INDEX: "/reset-password" },
  FORGOT_PASSWORD: { INDEX: "/forgot-password" },
};

export const ROUTES = [
  { id: features.DASHBOARD, path: URLS.DASHBOARD.INDEX },
  { id: features.CONCEPT_LIST, path: URLS.CONCEPTS.INDEX },
  { id: features.CONCEPT_DETAIL, path: URLS.CONCEPTS.DETAIL },
  { id: features.CONCEPT_EDIT, path: URLS.CONCEPTS.EDIT },
  { id: features.CONCEPT_RESTAURANTS_LIST, path: URLS.RESTAURANTS.INDEX },
  { id: features.CONCEPT_RESTAURANT_DETAIL, path: URLS.RESTAURANTS.DETAIL },
  { id: features.CONCEPT_RESTAURANT_CREATE, path: URLS.RESTAURANTS.CREATE },
  { id: features.CONCEPT_RESTAURANT_EDIT, path: URLS.RESTAURANTS.EDIT },
  { id: features.CONCEPT_REVIEWS_LIST, path: URLS.CONCEPTS.REVIEW },
];
