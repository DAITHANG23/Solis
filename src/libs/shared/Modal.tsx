"use client";
import { alpha, Box, IconButton, styled, Typography } from "@mui/material";
import MuiModal from "@mui/material/Modal";
import { XIcon } from "lucide-react";

const StyledModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: theme.palette.background.paper,
  border: "none",
  boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
  padding: theme.spacing(6, 4),
  maxHeight: "80vh !important",
  borderRadius: 8,
  [theme.breakpoints.down("sm")]: { width: "95%" },
}));

const StyledButtonClose = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 8,
  top: -10,
  backgroundColor: theme.palette.grey[400],
  "&:hover": { backgroundColor: theme.palette.grey[500] },
}));

const StyledHeaderModal = styled("div")(() => ({
  position: "sticky",
  top: 16,
  zIndex: 10,
  backgroundColor: "white",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "8px",
  borderBottom: "1px solid #E0E0E0",
}));

const StyledContentContainer = styled("div")(() => ({
  height: "60vh",
  overflowY: "auto",
  paddingTop: "16px",
}));

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
}
export const Modal = ({ open, onClose, children, title }: ModalProps) => {
  return (
    <div>
      <MuiModal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContainer>
          <StyledHeaderModal>
            <Typography variant="h5">{title}</Typography>
            <StyledButtonClose onClick={onClose}>
              <XIcon />
            </StyledButtonClose>
          </StyledHeaderModal>
          <StyledContentContainer>{children}</StyledContentContainer>
        </StyledModalContainer>
      </MuiModal>
    </div>
  );
};
