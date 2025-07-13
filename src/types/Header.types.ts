export type HeaderItem = {
  name: string;
  url?: string;
  onClick?: (item: HeaderItem) => void;
  icon?: React.ReactNode;
};

export interface Breadcrumb extends HeaderItem {
  heading: string;
  parent?: string;
}

export interface BreadcrumbsMap {
  [key: string]: Breadcrumb;
}
