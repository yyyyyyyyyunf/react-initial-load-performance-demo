import { createContext, useContext, ReactNode } from "react";

const LikesContext = createContext<number | undefined>(undefined);

interface LikesProviderProps {
  children: ReactNode;
  value: number;
}

export const LikesProvider = ({ children, value }: LikesProviderProps) => {
  return (
    <LikesContext.Provider value={value}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikesContext);
  if (context === undefined) {
    throw new Error('useLikes must be used within a LikesProvider');
  }
  return context;
};
