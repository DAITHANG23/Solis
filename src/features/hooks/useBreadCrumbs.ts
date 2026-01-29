import { BreadcrumbsContext } from "@/contexts/SpreadscrumbContext";
import { Breadcrumb } from "@/types";
import { useCallback, useContext } from "react";

const useBreadcrumbs = () => {
  const { breadcrumbsMap, setBreadcrumbsMap } = useContext(BreadcrumbsContext);

  const getRouteBreadcrumb = useCallback(
    (routeId: string) => {
      const rawBreadcrumb = breadcrumbsMap[routeId];

      if (!rawBreadcrumb) {
        return undefined;
      }

      let breadcrumb = { ...rawBreadcrumb };

      const breadcrumbs: Breadcrumb[] = [breadcrumb];
      while (breadcrumb.parent) {
        breadcrumb = { ...breadcrumbsMap[breadcrumb.parent] };

        breadcrumbs.unshift(breadcrumb);
      }

      return breadcrumbs;
    },
    [breadcrumbsMap],
  );

  const updateBreadcrumb = useCallback(
    (breadcrumbKey?: string, breadcrumbUpdates?: Partial<Breadcrumb>) => {
      if (breadcrumbKey && breadcrumbUpdates) {
        setBreadcrumbsMap((currentBreadcrumbsMap) => ({
          ...currentBreadcrumbsMap,
          [breadcrumbKey]: {
            ...currentBreadcrumbsMap[breadcrumbKey],
            ...breadcrumbUpdates,
          },
        }));
      }
    },
    [setBreadcrumbsMap],
  );

  return { getRouteBreadcrumb, updateBreadcrumb };
};

export default useBreadcrumbs;
