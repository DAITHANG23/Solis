import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

// Container
export const Container = styled("div")(() => ({
  overflow: "visible",
  position: "relative",
}));

// Table
export const StyledTable = styled(Table)(({ theme }) => ({
  "& > .MuiTableHead-root tr > th": {
    color: theme.palette.common.black,
  },
  "& > .MuiTableBody-root tr > td": {
    color: theme.palette.common.black,
  },
  "& > .MuiTableBody-root tr > td.MuiTableCell-paddingNone": {
    paddingRight: 0,
  },
  [theme.breakpoints.down("sm")]: {
    display: "table",
    maxWidth: "unset",
    "& > .MuiTableBody-root tr:last-child > .MuiTableCell-root": {
      borderBottom: "none",
    },
  },
}));

// Row
export const StyledRow = styled(TableRow)(({ theme }) => ({
  position: "relative",
  borderBottom: `1px solid ${theme.palette.grey[500]}`,
  fontSize: 13,
  color: theme.palette.grey[900],
  backgroundColor: theme.palette.background.paper,
  transition: theme.transitions.create("background-color"),
  textAlign: "center",
  "& > .MuiTableCell-body:first-of-type": {
    position: "relative",
    "&:before": {
      content: '""',
      position: "absolute",
      display: "none",
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: theme.palette.secondary.main,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1),
    },
  },

  "&:hover": {
    backgroundColor: theme.palette.grey[300],
    "& > .MuiTableCell-body:nth-of-type(2) button.tagDisplay": {
      display: "inline-flex",
    },
    "& > .MuiTableCell-body:nth-of-type(4) button.tagDisplay": {
      display: "inline-flex",
    },
  },

  "&:hover, &.isExpanding, &.isSelecting": {
    "& > .MuiTableCell-body:first-of-type": {
      "&:before": {
        display: "block",
      },
    },
  },

  "&.isSelecting": {
    backgroundColor: "#F5F5FE",
  },

  [theme.breakpoints.down("sm")]: {
    "& > .MuiTableCell-body:nth-of-type(2) button.tagDisplay": {
      display: "inline-flex",
    },
  },
}));

// Row selectable
export const RowSelectable = styled(TableRow)({
  cursor: "pointer",
});

// TableCell
export const StyledCell = styled(TableCell)(({ theme }) => ({
  fontSize: 13,
  padding: theme.spacing(2),
  borderColor: theme.palette.grey[500],
  [theme.breakpoints.down("xs")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

// Expand cell
export const CellExpand = styled(TableCell)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

// Over Element
export const OverElement = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 2,
  pointerEvents: "all",
  background: "rgba(255,255,255,0.8)",
});

// Loading
export const Loading = styled("div")({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
});

// No data container
export const NoData = styled("div")({
  display: "flex",
  height: 300,
  alignItems: "center",
  justifyContent: "center",
});

// No data element
export const NoDataElement = styled("div")({
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  left: 0,
  right: 0,
  textAlign: "center",
});

// Expand icon
export const ExpandIcon = styled("div")(({ theme }) => ({
  transition: theme.transitions.create("transform"),
  "&.expanded": {
    transform: "rotate(180deg)",
  },
}));
