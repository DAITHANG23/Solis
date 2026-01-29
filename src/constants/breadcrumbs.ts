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
};

export default breadcrumbsMap;
