import { createContext, useContext, ReactNode } from "react";

const HandleSearchChangeContext = createContext<((query: string) => void) | undefined>(undefined);

interface HandleSearchChangeProviderProps {
  children: ReactNode;
  value: (query: string) => void;
}

export const HandleSearchChangeProvider = ({ children, value }: HandleSearchChangeProviderProps) => {
  return (
    <HandleSearchChangeContext.Provider value={value}>
      {children}
    </HandleSearchChangeContext.Provider>
  );
};

export const useHandleSearchChange = () => {
  const context = useContext(HandleSearchChangeContext);
  if (context === undefined) {
    throw new Error('useHandleSearchChange must be used within a HandleSearchChangeProvider');
  }
  return context;
};
