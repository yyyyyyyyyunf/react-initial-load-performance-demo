import { createContext, useContext, ReactNode } from "react";

const ShowSidebarContext = createContext<boolean | undefined>(undefined);

interface ShowSidebarProviderProps {
  children: ReactNode;
  value: boolean;
}

export const ShowSidebarProvider = ({ children, value }: ShowSidebarProviderProps) => {
  return (
    <ShowSidebarContext.Provider value={value}>
      {children}
    </ShowSidebarContext.Provider>
  );
};

export const useShowSidebar = () => {
  const context = useContext(ShowSidebarContext);
  if (context === undefined) {
    throw new Error('useShowSidebar must be used within a ShowSidebarProvider');
  }
  return context;
};
