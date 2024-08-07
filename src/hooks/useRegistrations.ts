import { useContext } from 'react';
import { RegistrationsContext } from '~/contexts/RegistrationsContext';

export const useRegistrations = () => {
  const context = useContext(RegistrationsContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
