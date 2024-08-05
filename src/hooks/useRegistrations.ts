import { useQuery } from "@tanstack/react-query";
import { RegistrationService } from "~/services/RegistrationService";

export const useRegistrations = (query: string) => {
  return useQuery({ 
    queryKey: ['registrations', query], 
    queryFn: () => RegistrationService.getRegistrations(query)
  });
};