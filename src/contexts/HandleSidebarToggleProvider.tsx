import { createContext, useContext, ReactNode } from "react";

const HandleSidebarToggleContext = createContext<(() => void) | undefined>(undefined);

interface HandleSidebarToggleProviderProps {
  children: ReactNode;
  value: () => void;
}

export const HandleSidebarToggleProvider = ({ children, value }: HandleSidebarToggleProviderProps) => {
  return (
    <HandleSidebarToggleContext.Provider value={value}>
      {children}
    </HandleSidebarToggleContext.Provider>
  );
};

export const useHandleSidebarToggle = () => {
  const context = useContext(HandleSidebarToggleContext);
  if (context === undefined) {
    throw new Error('useHandleSidebarToggle must be used within a HandleSidebarToggleProvider');
  }
  return context;
};
