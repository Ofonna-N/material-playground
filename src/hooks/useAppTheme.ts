import React, { useContext } from "react";
import { modeCtx } from "../providers/AppThemeProvider";

const useAppTheme = () => {
  const theme = useContext(modeCtx);

  return theme;
};

export default useAppTheme;
