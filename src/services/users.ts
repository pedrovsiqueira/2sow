import api from '../services/api';
import { AxiosResponse } from 'axios';

interface EnderecoProps {
  cidade: string;
  cep: string;
  rua: string;
  bairro: string;
}

export interface CardData {
  endereco: EnderecoProps;
}

export const deleteUser = async (id: number): Promise<AxiosResponse> => {
  return await api.delete(`/usuarios/${id}`);
};

export const editUser = async (
  id: number,
  data: CardData
): Promise<AxiosResponse> => {
  return await api.put(`/usuarios/${id}`, data);
};
