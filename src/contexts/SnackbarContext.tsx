"use client";
import { IconButton } from "@mui/material";
import { SnackbarProvider, SnackbarKey } from "notistack";
import { PropsWithChildren, useCallback, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
const TransSnackbarProvider = ({ children }: PropsWithChildren<unknown>) => {
  const notistackRef = useRef<SnackbarProvider>(null);
  const onClickDismiss = useCallback(
    (key: SnackbarKey) => () => {
      notistackRef.current?.closeSnackbar(key);
    },
    [],
  );
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      ref={notistackRef}
      action={(key) => (
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClickDismiss(key)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};

export default TransSnackbarProvider;
