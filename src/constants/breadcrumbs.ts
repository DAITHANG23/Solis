import type { BreadcrumbsMap } from "@/types/Header.types";
import * as feature from "@/constants/features";
import { URLS } from "./urls";

const breadcrumbsMap: BreadcrumbsMap = {
  [feature.DASHBOARD]: {
    name: feature.DASHBOARD,
    heading: "Dashboard",
    url: URLS.DASHBOARD.INDEX,
  },

  // Client Features
  [feature.CLIENT]: {
    name: feature.CLIENT,
    heading: "Clients",
  },
  [feature.CLIENT_LIST]: {
    name: "Clients",
    heading: "Clients",
    url: URLS.CLIENTS.INDEX,
  },
  [feature.CLIENT_PROFILE]: {
    name: "Profile",
    heading: "Client Profile",
    url: URLS.CLIENTS.PROFILE,
    parent: feature.CLIENT,
  },
  [feature.CLIENT_CREATE]: {
    name: "New Client",
    heading: "New Client",
    url: URLS.CLIENTS.CREATE,
    parent: feature.CLIENT,
  },
  [feature.CLIENT_EDIT]: {
    name: "Edit",
    heading: "Client Edit",
    url: URLS.CLIENTS.EDIT,
    parent: feature.CLIENT,
  },

  // Bookings feature
  [feature.BOOKINGS_LIST]: {
    name: "Bookings",
    heading: "Bookings",
    url: URLS.BOOKINGS.INDEX,
  },

  // Concepts feature
  [feature.CONCEPT_LIST]: {
    name: "Concepts",
    heading: "Concepts",
    url: URLS.CONCEPTS.INDEX,
  },

  // Staffs feature
  [feature.STAFF_LIST]: {
    name: "Staffs",
    heading: "Staffs",
    url: URLS.STAFFS.INDEX,
  },

  // Financials feature
  [feature.FINANCE]: {
    name: "Finances",
    heading: "Finances",
    url: URLS.FINANCES.INDEX,
  },
  [feature.FINANCE_PAYMENTS]: {
    name: "Payments",
    heading: "Payments",
    url: URLS.FINANCES.PAYMENTS,
    parent: feature.FINANCE,
  },
  [feature.FINANCE_INVOICES]: {
    name: "Invoices",
    heading: "Invoices",
    url: URLS.FINANCES.INVOICES,
    parent: feature.FINANCE,
  },
  [feature.FINANCE_REFUNDS]: {
    name: "Refunds",
    heading: "Refunds",
    url: URLS.FINANCES.REFUNDS,
    parent: feature.FINANCE,
  },
  [feature.FINANCE_REVENUE_REPORT]: {
    name: "Revenue Report",
    heading: "Revenue Report",
    url: URLS.FINANCES.REVENUE_REPORT,
    parent: feature.FINANCE,
  },
};

export default breadcrumbsMap;
