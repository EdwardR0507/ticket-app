import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showMenu = () => {
    setIsVisible(false);
  };

  const hideMenu = () => {
    setIsVisible(true);
  };

  return (
    <UIContext.Provider value={{ isVisible, showMenu, hideMenu }}>
      {children}
    </UIContext.Provider>
  );
};
