"use client";
import {
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import MuiTable from "@mui/material/Table";
import TableHead from "../TableHead";
import isEmpty from "lodash/isEmpty";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  Row,
  flexRender,
} from "@tanstack/react-table";
import React from "react";
import LoadingRow from "../LoadingRow";
import useBreakPoints from "@/features/hooks/useBreakPoints";
import { NoDataIcon } from "@/libs/assets/NoData";
import SubComponentContainer from "../SubComponentContainer";
import { Pagination } from "../Pagination";
import { NoData, StyledCell, StyledRow } from "./Table.styles";

interface TableProps<T extends object> {
  data: T[];
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  columns: ColumnDef<T, any>[];
  rowSelectable?: boolean;
  pageSize: number;
  pageIndex: number;
  totalItems: number;
  pageSizeOptions?: Array<number>;
  enabledSortBy?: boolean;
  onChangePage?: (page: number) => void;
  headerClass?: string;
  bodyClass?: string;
  loading?: boolean;
  showSubComponent?: boolean;
  noDataElement?: React.ReactNode;
  renderSubComponent?: ({ row }: { row: Row<T> }) => React.ReactNode;
  onPageSizeChange?: (page: number) => void;
  paginationClass?: string;
}
export function Table<T extends object>({
  data,
  columns,
  rowSelectable = false,
  pageSize,
  pageIndex,
  totalItems,
  pageSizeOptions = [5, 10, 20],
  enabledSortBy = false,
  headerClass,
  bodyClass,
  loading,
  showSubComponent = false,
  noDataElement,
  renderSubComponent = undefined,
  onChangePage,
  onPageSizeChange,
  paginationClass,
}: TableProps<T>) {
  const table = useReactTable({
    columns,
    data,
    state: {
      pagination: { pageIndex, pageSize },
    },
    pageCount: Math.ceil(totalItems / pageSize),
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
    enableSorting: enabledSortBy,
  });

  const { isDesktopSize } = useBreakPoints();

  const visibleColumns = table.getAllLeafColumns();

  const skeletonLength = isDesktopSize
    ? visibleColumns.length
    : visibleColumns.length - 1;

  const renderNoDataElement = (customDataElement: React.ReactNode) => (
    <tr>
      <td colSpan={visibleColumns.length || 1}>
        <NoData>
          {customDataElement || (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box marginBottom={1}>
                <NoDataIcon />
              </Box>
              <Typography variant="bodyS">No data</Typography>
            </Box>
          )}
        </NoData>
      </td>
    </tr>
  );
  return (
    <>
      <TableContainer>
        <MuiTable style={{ tableLayout: "fixed" }}>
          <TableHead
            className={headerClass}
            headerGroups={table.getHeaderGroups()}
            showSubComponent
          />
          <TableBody className={bodyClass}>
            {isEmpty(table.getRowModel().rows) &&
              !loading &&
              renderNoDataElement(noDataElement)}
            {loading && (
              <LoadingRow
                pageSize={pageSize}
                columnCount={
                  showSubComponent ? skeletonLength : visibleColumns.length
                }
              />
            )}
            {!loading &&
              table.getRowModel().rows.map((row) => {
                return (
                  <React.Fragment key={row.id}>
                    <StyledRow>
                      {row.getVisibleCells().map((cell, index) => {
                        if (!isDesktopSize && cell.column.id === "expander")
                          return null;

                        const selectable = rowSelectable;

                        return (
                          <StyledCell
                            key={`cell-${index + 1}`}
                            style={{
                              width: `${cell.column.getSize()}px`,
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                            onClick={(e) => {
                              if (selectable) {
                                e.preventDefault();
                                row.toggleSelected?.();
                              }
                            }}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </StyledCell>
                        );
                      })}
                    </StyledRow>
                    {showSubComponent && renderSubComponent && (
                      <TableRow>
                        <TableCell
                          style={{ border: 0 }}
                          padding="none"
                          colSpan={visibleColumns.length}
                        >
                          <SubComponentContainer open={row.getIsExpanded()}>
                            {renderSubComponent({ row })}
                          </SubComponentContainer>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                );
              })}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {onChangePage && (
        <Pagination
          paginationClass={paginationClass}
          page={pageIndex}
          pageSize={pageSize}
          totalItems={totalItems}
          rowsPerPageOptions={pageSizeOptions}
          onChangePage={onChangePage}
          onPageSizeChange={onPageSizeChange}
        />
      )}
    </>
  );
}
