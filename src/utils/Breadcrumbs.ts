import type { BreadcrumbsMap } from "@/src/types/Header.types";
import * as feature from "@/src/utils/Features";

const breadcrumbsMap: BreadcrumbsMap = {
  [feature.HOME]: {
    name: feature.HOME,
    heading: "Home",
    url: "/",
    icon: null,
  },
  [feature.POSTS]: {
    name: feature.POSTS,
    heading: "Posts",
    url: "/posts",
    parent: feature.HOME,
  },
  [feature.POST_DETAIL]: {
    name: feature.POST_DETAIL,
    heading: "Post Detail",
    url: "/posts/:id",
    parent: feature.POSTS,
  },
  [feature.TAGS]: {
    name: feature.TAGS,
    heading: "Tags",
    url: "/tags",
    parent: feature.HOME,
  },
  [feature.ABOUT]: {
    name: feature.ABOUT,
    heading: "About",
    url: "/about",
    parent: feature.HOME,
  },
  [feature.SEARCH]: {
    name: feature.SEARCH,
    heading: "Search",
    url: "/search",
    parent: feature.HOME,
  },
};

export default breadcrumbsMap;
