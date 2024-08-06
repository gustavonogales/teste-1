import { api } from "~/api/api";
import { Registration, RegistrationStatus } from "~/types/Registration";

export abstract class RegistrationService {
  private static readonly endpoint = '/registrations'

  public static async getRegistrations(query: string): Promise<Registration[]> {
    const response = await api.get<Registration[]>(this.endpoint, {
      params: { 
        '_sort': 'admissionDate',
        '_order': 'desc',
        ...(query && {'cpf': query })
      }
    })
    return response.data
  }

  public static async changeStatus(data: Registration, status: RegistrationStatus): Promise<void> {
    await api.put(`${this.endpoint}/${data.id}`, { ...data, status })
  }

  public static async delete(data: Registration): Promise<void> {
    await api.delete(`${this.endpoint}/${data.id}`)
  }
}