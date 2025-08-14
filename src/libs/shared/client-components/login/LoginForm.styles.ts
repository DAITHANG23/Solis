import { Box, Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  border: `1px solid ${theme.palette.grey[600]}`,
  borderRadius: "4px",
  padding: theme.spacing(3, 4),
  marginTop: theme.spacing(8),
  backgroundColor: theme.palette.background.default,
  cursor: "pointer",
  transition: "transform 0.2s ease",
  "&:hover": {
    backgroundColor: theme.palette.grey[400],
    transform: "scale(1.02)",
  },
}));

export const StyledContainerLoginForm = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  border: "none",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  borderRadius: "4px",
  width: "18.75rem",
  height: "25rem",
}));

export const StyledImageLogo = styled("div")(() => ({
  position: "relative",
  width: "160px",
  height: "40px",
}));

export const StyledContentContainer = styled("div")(() => ({
  marginTop: "16px",
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

export const StyledHeaderLogin = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(4),
  margin: theme.spacing(0, 8),
}));

export const StyledImgLogoHeader = styled("div")(() => ({
  width: "50px",
  height: "50px",
  position: "relative",
}));
