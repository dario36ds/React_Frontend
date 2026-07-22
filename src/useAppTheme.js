import { useContext } from "react";
import ThemeContext from "./ThemeContext.js";

export default function useAppTheme() {
  return useContext(ThemeContext);
}
