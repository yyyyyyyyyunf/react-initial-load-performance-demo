import { createContext, useContext, ReactNode } from "react";

const ShowCommentsContext = createContext<boolean | undefined>(undefined);

interface ShowCommentsProviderProps {
  children: ReactNode;
  value: boolean;
}

export const ShowCommentsProvider = ({ children, value }: ShowCommentsProviderProps) => {
  return (
    <ShowCommentsContext.Provider value={value}>
      {children}
    </ShowCommentsContext.Provider>
  );
};

export const useShowComments = () => {
  const context = useContext(ShowCommentsContext);
  if (context === undefined) {
    throw new Error('useShowComments must be used within a ShowCommentsProvider');
  }
  return context;
};
