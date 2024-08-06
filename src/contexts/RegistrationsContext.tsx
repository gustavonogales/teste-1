import { useMutation, useQuery } from '@tanstack/react-query';
import { createContext, useState, useCallback } from 'react';
import { queryClient } from '~/App';
import { useDebounce } from '~/hooks/useDebounce';
import { RegistrationService } from '~/services/RegistrationService';
import { Registration, RegistrationStatus } from '~/types/Registration';

type RegistrationsContextProps = {
  search: (query: string) => void;
  data?: Registration[];
  isLoading: boolean;
  isRefetching: boolean;
  refetch: () => void;
  approve: (data: Registration) => void;
  reprove: (data: Registration) => void;
  review: (data: Registration) => void;
  delete: (data: Registration) => void;
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

  const { mutate: updateMutation } = useMutation({
    mutationFn: ({data, status}:{data: Registration, status: RegistrationStatus}) => {
      return RegistrationService.changeStatus(data, status)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['registrations'] })
    }
  })

  const { mutate: deleteMutation } = useMutation({
    mutationFn: (data: Registration) => RegistrationService.delete(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['registrations'] })
    }
  })

  const handleApprove = useCallback((data: Registration) => updateMutation({data, status: RegistrationStatus.APPROVED}), []);
  const handleReprove = useCallback((data: Registration) => updateMutation({data, status: RegistrationStatus.REPROVED}), []);
  const handleReview = useCallback((data: Registration) => updateMutation({data, status: RegistrationStatus.REVIEW}), []);

  const handleSearch = useCallback((q: string) => setQuery(q), []);

  const handleRefetch = useCallback(() => {
    setQuery('')
    refetch()
  }, [refetch])

  return (
    <RegistrationsContext.Provider value={{ 
      search: handleSearch, 
      data, 
      isLoading, 
      isRefetching, 
      refetch: handleRefetch, 
      approve: handleApprove,
      reprove: handleReprove,
      review: handleReview,
      delete: deleteMutation
    }}>
      {children}
    </RegistrationsContext.Provider>
  );
};

