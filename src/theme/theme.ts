"use client";

import { createTheme } from "@mui/material/styles";
import Typography from "./__Elements/__Theme.Typography";
import Palette from "./__Elements/__Theme.Palette";
import DarkPalette from "./__Elements/__Theme.Palette_Dark";
import VariantTypographyMapping from "./__Elements/__Theme.VariantTypographyMapping";

export const DashboardThemeOptions = createTheme({
  palette: Palette,
  spacing: 4,
  typography: Typography,
  components: VariantTypographyMapping,
  cssVariables: {
    colorSchemeSelector: "class",
    disableCssColorScheme: true,
  },
  colorSchemes: {
    light: {
      palette: Palette,
    },
    dark: {
      palette: DarkPalette,
    },
  },
});

export const theme = DashboardThemeOptions;
