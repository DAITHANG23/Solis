import clsx from "clsx";
import TableCell from "@mui/material/TableCell";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import useBreakpoints from "@/features/hooks/useBreakPoints";
import { StyledTableHead, StyledTableRow } from "./TableHead.styles";
import { flexRender, HeaderGroup } from "@tanstack/react-table";

interface TableHeadProps<T> {
  headerGroups: HeaderGroup<T>[];
  className?: string;
  showSubComponent?: boolean;
}
const TableHead = <T,>({
  headerGroups,
  className,
  showSubComponent,
}: TableHeadProps<T>) => {
  const { isDesktopSize } = useBreakpoints();

  return (
    <StyledTableHead className={clsx(className)}>
      {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
      {headerGroups.map((headerGroup: any, index: number) => (
        <StyledTableRow key={`headerGroup-${index + 1}`}>
          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
          {headerGroup.headers.map((column: any) => {
            const { headerAlign = "center" } = column;
            if (showSubComponent && !isDesktopSize && column.id === "expander")
              return null;

            return (
              <TableCell
                style={{
                  width: `${column.getSize()}px` || "auto",
                  fontWeight: 600,
                }}
                key={column.id}
                onClick={column.getToggleSortingHandler?.()}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: headerAlign,
                  }}
                >
                  {flexRender(
                    column.column.columnDef?.header,
                    column.getContext(),
                  )}

                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ExpandMoreIcon />
                    ) : (
                      <ExpandLessIcon />
                    )
                  ) : null}
                </div>
              </TableCell>
            );
          })}
        </StyledTableRow>
      ))}
    </StyledTableHead>
  );
};

export default TableHead;
