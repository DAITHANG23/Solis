"use client";
import { Typography, styled } from "@mui/material";

interface ItemDetailsProps {
  label: string;
  value: string;
}

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[800],
  marginBottom: theme.spacing(0.5),
}));

const Value = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  wordWrap: "break-word",
  wordBreak: "break-word",
}));

export const ItemDetails = (props: ItemDetailsProps) => {
  const { label, value } = props;

  return (
    <Root>
      <Label variant="bodyXSB">{label}</Label>
      <Value variant="bodyS">{value}</Value>
    </Root>
  );
};
