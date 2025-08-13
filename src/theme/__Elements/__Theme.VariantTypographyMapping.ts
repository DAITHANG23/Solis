import * as Colors from "@/utils/__Theme.Color";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        bodyMB: "p",
        bodyMM: "p",
        bodySB: "p",
        bodyL: "h5",
        bodyS: "p",
        bodySM: "p",
        bodyM: "p",
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: () => ({
      body: {
        "::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "rgb(151, 151, 151)",
          borderRadius: "20px",
        },
        "::-webkit-scrollbar-track": {
          background: "rgba(0, 0, 0, 0.04)",
          borderRadius: "20px",
        },
        ".MuiAutocomplete-option": {
          "&:hover": {
            color: Colors.primary,
            "& h6": {
              color: Colors.primary,
              fontWeight: 400,
            },
          },
          '&[aria-selected="true"]': {
            fontWeight: 500,
            color: Colors.primary,
            "& h6": {
              fontWeight: 500,
              color: Colors.primary,
            },
          },
        },
      },
    }),
  },
};
