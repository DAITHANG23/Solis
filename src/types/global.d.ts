import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    "10"?: string;
    "20"?: string;
    "30"?: string;
    "40"?: string;
    "50"?: string;
    "100"?: string;
    "200"?: string;
    "300"?: string;
    "400"?: string;
    "500"?: string;
  }

  interface PaletteColorOptions {
    "10"?: string;
    "20"?: string;
    "30"?: string;
    "40"?: string;
    "50"?: string;
    "100"?: string;
    "200"?: string;
    "300"?: string;
    "400"?: string;
  }

  interface CommonColors {
    link?: string;
    ghostWhite?: string;
    cta?: string;
    hover?: string;
    disabled?: string;
    selected?: string;
  }

  interface TypeBackground {
    link?: string;
    black?: string;
  }
  interface PaletteOptions {
    background?: Partial<TypeBackground>;
  }
}

export interface LanguageListType {
  name: string;
  value: string;
  icon: string;
}
