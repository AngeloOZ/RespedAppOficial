import { CssBaseline, ThemeProvider } from "@mui/material";
import { UIProvider, CategoryProvider, CartProvider } from "../../context";
import { lightTheme } from "../../themes/ligth-theme";

export const MaterialUILayout = ({ children }) => {
  return (
    <CartProvider>
      <CategoryProvider>
        <UIProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </UIProvider>
      </CategoryProvider>
    </CartProvider>
  );
};
