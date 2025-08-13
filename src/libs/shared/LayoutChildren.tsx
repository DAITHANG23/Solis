"use client";
import { Paper } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import clsx from "clsx";
interface LayoutChildrenProps {
  children: React.ReactNode;
  className?: string;
}
const useStyle = makeStyles(() => ({
  root: {
    boxShadow: "0px 8px 24px 0px #282F7B0A",
    width: "100%",
    padding: "16px",
  },
}));
export const LayoutChildren = ({
  children,
  className,
}: LayoutChildrenProps) => {
  const classes = useStyle();
  return <Paper className={clsx(classes.root, className)}>{children}</Paper>;
};
