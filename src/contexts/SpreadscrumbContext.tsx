import { createContext, Dispatch, useState } from "react";
import defaultBreadcrumbsMap from "@/constants/breadcrumbs";
import { BreadcrumbsMap } from "@/types/Header.types";

interface BreadcrumbsContextValue {
  breadcrumbs: BreadcrumbsMap;
  setBreadscrumbs: Dispatch<React.SetStateAction<BreadcrumbsMap>>;
}

interface BreadcrumbsProviderProps {
  children: React.ReactNode;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContextValue>({
  breadcrumbs: {},
  setBreadscrumbs: () => {},
});

export const BreadcrumbsProvider = ({ children }: BreadcrumbsProviderProps) => {
  const [breadcrumbs, setBreadscrumbs] = useState(defaultBreadcrumbsMap);
  return <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadscrumbs }}>{children}</BreadcrumbsContext.Provider>;
};
