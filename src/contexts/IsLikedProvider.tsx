import { createContext, useContext, ReactNode } from "react";

const IsLikedContext = createContext<boolean | undefined>(undefined);

interface IsLikedProviderProps {
  children: ReactNode;
  value: boolean;
}

export const IsLikedProvider = ({ children, value }: IsLikedProviderProps) => {
  return (
    <IsLikedContext.Provider value={value}>
      {children}
    </IsLikedContext.Provider>
  );
};

export const useIsLiked = () => {
  const context = useContext(IsLikedContext);
  if (context === undefined) {
    throw new Error('useIsLiked must be used within an IsLikedProvider');
  }
  return context;
};
