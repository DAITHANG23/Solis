import { styled, TableRow } from "@mui/material";
import MuiTableHead from "@mui/material/TableHead";

export const StyledTableHead = styled(MuiTableHead)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  border: 0,
  fontSize: 14,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  cursor: "pointer",
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "& > .MuiTableCell-head": {
    borderBottom: 0,
  },
  "& > .MuiTableCell-head::first-of-type": {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1),
    },
  },
  "& > .MuiTableCell-head:last-child": {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
}));
