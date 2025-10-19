import { createContext, useContext, ReactNode } from "react";

const HandleCommentsToggleContext = createContext<(() => void) | undefined>(undefined);

interface HandleCommentsToggleProviderProps {
  children: ReactNode;
  value: () => void;
}

export const HandleCommentsToggleProvider = ({ children, value }: HandleCommentsToggleProviderProps) => {
  return (
    <HandleCommentsToggleContext.Provider value={value}>
      {children}
    </HandleCommentsToggleContext.Provider>
  );
};

export const useHandleCommentsToggle = () => {
  const context = useContext(HandleCommentsToggleContext);
  if (context === undefined) {
    throw new Error('useHandleCommentsToggle must be used within a HandleCommentsToggleProvider');
  }
  return context;
};
