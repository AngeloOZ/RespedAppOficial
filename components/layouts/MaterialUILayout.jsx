import { CssBaseline, ThemeProvider } from "@mui/material";
import { UIProvider } from "../../context";
import { lightTheme } from "../../themes/ligth-theme";

export const MaterialUILayout = ({ children }) => {
  return (
    <UIProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </UIProvider>
  );
};
