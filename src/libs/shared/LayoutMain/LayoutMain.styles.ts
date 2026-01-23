import { Box, BoxProps, styled } from "@mui/material";

const drawerWidth = 288;

export const StyledBoxMain = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  p: 3,
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  padding: theme.spacing(4),
  backgroundColor: theme.palette.grey[300],
  height: "100vh",
}));
