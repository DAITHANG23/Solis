"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ConfirmationData } from "@/contexts/ConfirmationContext";
import { useCallback } from "react";

interface ConfirmDialogProps extends Omit<ConfirmationData, "onConfirm"> {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm?: () => void;
  loading?: boolean;
}
const ConfirmDialog = ({
  description,
  onClose,
  open,
  title,
  closeLabel,
  isShowCloseButton,
  loading,
  confirmLabel,
  onRenderTitle,
  onConfirm,
}: ConfirmDialogProps) => {
  const handleCloseClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  return (
    <Dialog open={open}>
      <DialogTitle>{onRenderTitle ? onRenderTitle() : title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>{description}</DialogContent>
      <DialogActions>
        <>
          {isShowCloseButton && (
            <Button type="button" onClick={handleCloseClick}>
              {closeLabel}
            </Button>
          )}
          <Button loading={loading} type="submit" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
