"use client";
import MuiSkeleton from "@mui/material/Skeleton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#E4E7F1",
  },
}));

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Skeleton = (props: any) => {
  const classes = useStyles();
  return <MuiSkeleton animation="wave" classes={classes} {...props} />;
};

export default Skeleton;
