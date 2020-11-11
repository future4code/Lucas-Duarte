import axios from "axios";
import { Address } from "../types";

type ViaCep = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export async function getAddressInfo(zipcode: number): Promise<Address> {
  const addressObject = await axios.get(
    `https://viacep.com.br/ws/${zipcode}/json/`
  );
  const address: ViaCep = addressObject.data;

  return {
    street: address.logradouro,
    neighborhood: address.bairro,
    city: address.localidade,
    state: address.uf
  };
}
