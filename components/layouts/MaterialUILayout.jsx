import { CssBaseline, ThemeProvider } from "@mui/material";
import { CategoryProvider } from "../../context/categories";
import { UIProvider } from "../../context/ui";
import { lightTheme } from "../../themes/ligth-theme";

export const MaterialUILayout = ({ children }) => {
  return (
    <CategoryProvider>
      <UIProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </UIProvider>
    </CategoryProvider>
  );
};
