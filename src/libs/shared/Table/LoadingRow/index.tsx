import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Skeleton from "@/libs/shared/LoadingHolder/Skeleton";

interface LoadingRowProps {
  pageSize: number;
  columnCount: number;
}

const LoadingRow = ({ pageSize, columnCount }: LoadingRowProps) => {
  return (
    <>
      {[...Array(pageSize)].map((_, rowIndex) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <TableRow key={rowIndex}>
          {[...Array(columnCount)].map((__, columnIndex) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <TableCell key={columnIndex}>
              <Skeleton height={28} width="100%" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default LoadingRow;
