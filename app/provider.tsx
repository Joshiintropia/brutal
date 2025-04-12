"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GlobalStyles from "@/app/styles/global";
import { COLORS } from "@/app/constants/colors";
import StyledComponentsRegistry from "./register";

export function Providers({ children }: PropsWithChildren) {
  // Singleton update

  // MUI theme config
  const buttonStyles = {
    height: "46px",
    textTransform: "initial",
    fontFamily: "inherit",
    fontWeight: 600,
    letterSpacing: "0.4px",
    fontSize: "12px",
  };
  const themeOptions: any = {
    altBackground: false,
    typography: {
      fontFamily: [],
      h2: {
        fontSize: "20px",
        color: "#393C4F",
        fontWeight: 700,
        fontFamily: 'var(--font-montreal-medium), sans-serif'
      },
      h3: {
        fontSize: "14px",
        color: "#393C4F",
        fontWeight: 700,
        fontFamily: 'var(--font-montreal-medium), sans-serif'

      },
      h4: {
        fontSize: "10px",
        color: "#393C4F",
        fontWeight: 600,
        fontFamily: 'var(--font-montreal-medium), sans-serif'

      },
      body1: {
        color: COLORS.GREY,
        fontWeight: 400,
        letterSpacing: 0.15,
        fontSize: "14px",
        fontFamily: 'var(--font-montreal-medium), sans-serif'

      },
      body2: {
        color: COLORS.GREY,
        fontWeight: 400,
        width: "fit-content",
        fontSize: "12px",
        fontFamily: 'var(--font-montreal-medium), sans-serif'

      },
      body3: {
        color: COLORS.GREY,
        fontWeight: 400,
        width: "fit-content",
        fontSize: "10px",
        fontFamily: 'var(--font-montreal-medium)'
      },
    },
    components: {
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: "25px !important",
            transform: "scale(0.9)",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: "12px",
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontSize: "12px",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            height: "46px",
          },
          input: {
            fontSize: "12px",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: "12px",
          },
          shrink: {
            transform: "translate(14px, -8px) scale(0.7) !important",
          },
          outlined: {
            transform: "translate(14px, 13px) scale(0.8)",
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { color: "primary", variant: "contained" },
            style: {
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.WHITE,
              ...buttonStyles,
            },
          },
          {
            props: { color: "primary", variant: "outlined" },
            style: {
              backgroundColor: "transparent",
              color: COLORS.PRIMARY,
              ...buttonStyles,
            },
          },
          {
            props: { color: "primary", variant: "text" },
            style: {
              backgroundColor: COLORS.WHITE,
              color: COLORS.PRIMARY,
              ...buttonStyles,
            },
          },
        ],
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: "inherit",
            textTransform: "none",
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 540,
        md: 768,
        lg: 956,
        sl: 1200,
        xl: 1536,
      },
    },
    palette: {
      success: {
        main: COLORS.SUCCESS,
      },
      error: {
        main: COLORS.ERROR,
      },
      warning: {
        main: COLORS.WARNING,
      },
      action: {
        disabledBackground: COLORS.LIGHT_PRIMARY,
        disabled: COLORS.WHITE,
      },
      primary: {
        main: COLORS.PRIMARY,
        light: COLORS.LIGHT_PRIMARY,
      },
      secondary: {
        main: COLORS.GREEN,
      },
      background: {
        default: COLORS.SILVER,
      },
      common: {
        dark: COLORS.DARK,
        purple: COLORS.PRIMARY,
        green: COLORS.GREEN,
        white: COLORS.WHITE,
        red: COLORS.ERROR,
        grey: COLORS.GREY,
      },
    },
  };
  const theme = createTheme(themeOptions);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
