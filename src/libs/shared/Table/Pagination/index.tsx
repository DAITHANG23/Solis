import { TablePagination, styled } from "@mui/material";
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

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderBottomLeftRadius: "8px !important",
  borderBottomRightRadius: "8px !important",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: theme.spacing(12),
}));

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
    <StyledContainer className={clsx(paginationClass)}>
      <TablePagination
        component='div'
        count={totalItems}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={pageSize}
        onRowsPerPageChange={(event) => {
          const newSize = Number.parseInt(event.target.value, 10);
          if (onPageSizeChange) {
            onPageSizeChange(newSize);
          }
        }}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </StyledContainer>
  );
};
