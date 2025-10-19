import { createContext, useContext, ReactNode } from "react";

const IsBookmarkedContext = createContext<boolean | undefined>(undefined);

interface IsBookmarkedProviderProps {
  children: ReactNode;
  value: boolean;
}

export const IsBookmarkedProvider = ({ children, value }: IsBookmarkedProviderProps) => {
  return (
    <IsBookmarkedContext.Provider value={value}>
      {children}
    </IsBookmarkedContext.Provider>
  );
};

export const useIsBookmarked = () => {
  const context = useContext(IsBookmarkedContext);
  if (context === undefined) {
    throw new Error('useIsBookmarked must be used within an IsBookmarkedProvider');
  }
  return context;
};
