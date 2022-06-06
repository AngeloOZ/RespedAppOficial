import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../../themes/ligth-theme";

export const MaterialUILayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};
