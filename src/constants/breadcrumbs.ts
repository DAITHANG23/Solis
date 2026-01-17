import type { BreadcrumbsMap } from "@/types/Header.types";
import * as feature from "@/constants/features";
import { ROUTES } from "./urls";

const breadcrumbsMap: BreadcrumbsMap = {
  [feature.DASHBOARD]: {
    name: feature.DASHBOARD,
    heading: "Dashboard",
    url: ROUTES.DASHBOARD.INDEX,
  },

  // Client Features
  [feature.CLIENT]: {
    name: feature.CLIENT,
    heading: "Clients",
  },
  [feature.CLIENT_LIST]: {
    name: "Clients",
    heading: "Clients",
    url: ROUTES.CLIENTS.INDEX,
    parent: feature.CLIENT,
  },
  [feature.CLIENT_PROFILE]: {
    name: "Profile",
    heading: "Profile",
    url: ROUTES.CLIENTS.PROFILE,
    parent: feature.CLIENT,
  },
  [feature.CLIENT_CREATE]: {
    name: "New Client",
    heading: "New Client",
    url: ROUTES.CLIENTS.CREATE,
    parent: feature.CLIENT,
  },
  [feature.CLIENT_EDIT]: {
    name: "Edit",
    heading: "Client Edit",
    url: ROUTES.CLIENTS.EDIT,
    parent: feature.CLIENT,
  },
};

export default breadcrumbsMap;
