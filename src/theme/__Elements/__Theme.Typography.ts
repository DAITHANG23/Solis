import type { Palette } from "@mui/material";
import type { TypographyOptions as MuiTypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariantsOptions {
    bodyL?: React.CSSProperties;
    bodyS?: React.CSSProperties;
    bodySB?: React.CSSProperties;
    bodySM?: React.CSSProperties;
    bodyM?: React.CSSProperties;
    bodyMM?: React.CSSProperties;
    bodyMB?: React.CSSProperties;
    bodyXXSM?: React.CSSProperties;
    bodyXSB?: React.CSSProperties;
    bodyXS?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyL?: true;
    bodyS?: true;
    bodySM?: true;
    bodyM?: true;
    bodyMM?: true;
    bodyMB?: true;
    bodyXXSM?: true;
    bodyXSB?: true;
    bodyXS?: true;
    bodySB?: true;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (palette: Palette): MuiTypographyOptions => ({
  h1: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "64px",
    lineHeight: "74px",
    letterSpacing: "-0.01em",
  },
  h5: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "32px",
    letterSpacing: "-0.02em",
  },
  bodyL: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "42px",
    letterSpacing: "-0.01em",
  },
  bodyS: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
  },
  bodySB: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "-0.01em",
  },
  bodySM: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "-0.01em",
  },
  bodyM: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "-0.01em",
  },
  bodyMM: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
  },
  bodyMB: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "-0.01em",
  },
  bodyXXSM: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "-0.02em",
  },
  bodyXSB: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13px",
    lineHeight: "18px",
    letterSpacing: "-0.01em",
  },
  bodyXS: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "18px",
    letterSpacing: "-0.01em",
  },
  caption: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "-0.01em",
    color: palette.grey[800],
  },
  button: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "34px",
    letterSpacing: "-0.01em",
    textTransform: "unset",
    textAlign: "left",
    minWidth: "176px",
  },
});
