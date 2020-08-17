import { AxiosResponse } from 'axios';
import { api } from '../services/api';

interface EnderecoProps {
  cidade: string;
  cep: string;
  rua: string;
  bairro: string;
}

export interface CardData {
  endereco: EnderecoProps;
}

export const deleteUser = async (id: number): Promise<AxiosResponse> => api.delete(`/usuarios/${id}`);

export const editUser = async (
  id: number,
  data: CardData,
): Promise<AxiosResponse> => api.put(`/usuarios/${id}`, data);
