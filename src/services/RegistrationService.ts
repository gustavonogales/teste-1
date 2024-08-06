import { api } from "~/api/api";
import { Registration } from "~/types/Registration";

export abstract class RegistrationService {

  public static async getRegistrations(query: string): Promise<Registration[]> {
    const response = await api.get<Registration[]>('/registrations', {
      params: { 
        '_sort': 'admissionDate',
        '_order': 'desc',
        ...(query && {'cpf': query })
      }
    })
    return response.data
  }
}