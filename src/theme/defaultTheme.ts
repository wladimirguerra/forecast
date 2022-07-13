import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    background: {
      forecast:
        "linear-gradient(0deg, rgba(218,241,255,1) 41%, rgba(125,207,255,1) 91%)",
    },
  },
});

// Interface augmentation
declare module "@mui/material/styles" {
  interface TypeBackground {
    forecast: string;
  }
}
