import { createContext, useContext, ReactNode } from "react";

const HandleShareContext = createContext<(() => void) | undefined>(undefined);

interface HandleShareProviderProps {
  children: ReactNode;
  value: () => void;
}

export const HandleShareProvider = ({ children, value }: HandleShareProviderProps) => {
  return (
    <HandleShareContext.Provider value={value}>
      {children}
    </HandleShareContext.Provider>
  );
};

export const useHandleShare = () => {
  const context = useContext(HandleShareContext);
  if (context === undefined) {
    throw new Error('useHandleShare must be used within a HandleShareProvider');
  }
  return context;
};
