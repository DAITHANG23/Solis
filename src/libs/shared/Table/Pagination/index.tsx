import { TablePagination } from "@mui/material";
import clsx from "clsx";
import { useCallback } from "react";

interface PaginationProps {
  onChangePage: (value: number) => void;
  pageSize: number;
  page: number;
  onPageSizeChange?: (page: number) => void;
  paginationClass?: string;
  totalItems: number;
  rowsPerPageOptions: Array<number>;
}

export const Pagination = ({
  onChangePage,
  pageSize,
  onPageSizeChange,
  page,
  paginationClass,
  totalItems,
  rowsPerPageOptions,
}: PaginationProps) => {
  const handlePageChange = useCallback(
    // biome-ignore lint/correctness/noUnusedVariables: <explanation>
    (event: React.MouseEvent<HTMLButtonElement> | null, nextPage: number) => {
      onChangePage(nextPage - 1);
    },
    [onChangePage],
  );
  return (
    <div className={clsx(paginationClass)} style={{ backgroundColor: "#FFF" }}>
      <TablePagination
        component="div"
        count={totalItems}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={pageSize}
        onRowsPerPageChange={(event) => {
          const newSize = parseInt(event.target.value, 10);
          if (onPageSizeChange) {
            onPageSizeChange(newSize);
          }
        }}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </div>
  );
};
