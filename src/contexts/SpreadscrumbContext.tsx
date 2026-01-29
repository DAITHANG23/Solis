import { createContext, Dispatch, useState } from "react";
import defaultBreadcrumbsMap from "@/constants/breadcrumbs";
import { BreadcrumbsMap } from "@/types/Header.types";

interface BreadcrumbsContextValue {
  breadcrumbsMap: BreadcrumbsMap;
  setBreadcrumbsMap: Dispatch<React.SetStateAction<BreadcrumbsMap>>;
}

interface BreadcrumbsProviderProps {
  children: React.ReactNode;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContextValue>({
  breadcrumbsMap: {},
  setBreadcrumbsMap: () => {},
});

export const BreadcrumbsProvider = ({ children }: BreadcrumbsProviderProps) => {
  const [breadcrumbsMap, setBreadcrumbsMap] = useState(defaultBreadcrumbsMap);
  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbsMap, setBreadcrumbsMap }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};
