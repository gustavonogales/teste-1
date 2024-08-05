import { useQuery } from "@tanstack/react-query";
import { RegistrationService } from "~/services/RegistrationService";

export const useRegistrations = () => {
  return useQuery({ queryKey: ['registrations'], queryFn: RegistrationService.getRegistrations});
};