//eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette"; // This line is important eventhough it is disabled using ES lint we should not remove this otherwise the the code below becomes invalid

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}