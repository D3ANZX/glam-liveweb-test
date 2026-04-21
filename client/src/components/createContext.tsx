import { createContext } from "react";

export const sideContext = createContext({
  sideButtonState: false,
  setSideButtonState: (value: boolean) => {}
});