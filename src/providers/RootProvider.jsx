import AppThemeProvider from "./AppThemeProvider";

const RootProvider = ({ children }) => {
  return <AppThemeProvider>{children}</AppThemeProvider>;
};

export default RootProvider;
