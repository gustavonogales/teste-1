import { createContext, useContext, useState, useCallback } from 'react';
import { useDebounce } from '~/hooks/useDebounce';
import { useRegistrations } from '~/hooks/useRegistrations';
import { Registration } from '~/types/Registration';

interface RegistrationsContextProps {
  search: (query: string) => void;
  data?: Registration[];
  isLoading: boolean;
  isRefetching: boolean;
  refetch: () => void;
}

const RegistrationsContext = createContext<RegistrationsContextProps | undefined>(undefined);

type RegistrationsProviderProps = {
  children: React.ReactNode;
}

export const RegistrationsProvider = ({ children }: RegistrationsProviderProps) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500); 
  const { data, isLoading, refetch, isRefetching } = useRegistrations(debouncedQuery);

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
  }, []);

  return (
    <RegistrationsContext.Provider value={{ search: handleSearch, data, isLoading, isRefetching, refetch }}>
      {children}
    </RegistrationsContext.Provider>
  );
};

export const useRegistrationsContext = (): RegistrationsContextProps => {
  const context = useContext(RegistrationsContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
