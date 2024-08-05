import { useQuery } from '@tanstack/react-query';
import { createContext, useState, useCallback } from 'react';
import { useDebounce } from '~/hooks/useDebounce';
import { RegistrationService } from '~/services/RegistrationService';
import { Registration } from '~/types/Registration';

type RegistrationsContextProps = {
  search: (query: string) => void;
  data?: Registration[];
  isLoading: boolean;
  isRefetching: boolean;
  refetch: () => void;
}

export const RegistrationsContext = createContext<RegistrationsContextProps | undefined>(undefined);

type RegistrationsProviderProps = {
  children: React.ReactNode;
}

export const RegistrationsProvider = ({ children }: RegistrationsProviderProps) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500); 

  const { data, isLoading, refetch, isRefetching } = useQuery({ 
    queryKey: ['registrations', debouncedQuery], 
    queryFn: () => RegistrationService.getRegistrations(debouncedQuery)
  })

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
  }, []);

  return (
    <RegistrationsContext.Provider value={{ search: handleSearch, data, isLoading, isRefetching, refetch }}>
      {children}
    </RegistrationsContext.Provider>
  );
};

