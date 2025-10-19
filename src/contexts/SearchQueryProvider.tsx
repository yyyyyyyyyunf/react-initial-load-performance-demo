import { createContext, useContext, ReactNode } from "react";

const SearchQueryContext = createContext<string | undefined>(undefined);

interface SearchQueryProviderProps {
  children: ReactNode;
  value: string;
}

export const SearchQueryProvider = ({ children, value }: SearchQueryProviderProps) => {
  return (
    <SearchQueryContext.Provider value={value}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export const useSearchQuery = () => {
  const context = useContext(SearchQueryContext);
  if (context === undefined) {
    throw new Error('useSearchQuery must be used within a SearchQueryProvider');
  }
  return context;
};
