import { memo } from "react";
import Collapse from "@mui/material/Collapse";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      "& > div:first-child": {
        flexDirection: "column",
      },
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}));

interface SubComponentContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

const SubComponentContainer: React.FC<SubComponentContainerProps> = ({
  open,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Collapse in={open} unmountOnExit>
      <div className={classes.root} {...props} />
    </Collapse>
  );
};

const MemorizeSubComponentContainer = memo(SubComponentContainer);

export default MemorizeSubComponentContainer;
