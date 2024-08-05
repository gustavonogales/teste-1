import { api } from "~/api/api";
import { Registration } from "~/types/Registration";

export abstract class RegistrationService {

  public static async getRegistrations(): Promise<Registration[]> {
    const response = await api.get<Registration[]>('/registrations')
    return response.data
  }
}