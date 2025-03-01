import { BACKEND_API_URL, BACKEND_PWD, BACKEND_USR } from "@/config";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const login = async (): Promise<PokeSrvAuthResponse | null> => {

  const encondedAuth = Buffer.from(`${BACKEND_USR}:${BACKEND_PWD}`).toString("base64");

  const config: AxiosRequestConfig = {
    method: 'post',
    url: `${BACKEND_API_URL}/login`,
    headers: {
      Authorization: `Basic ${encondedAuth}`
    }
  };

  try {

    const { data }: AxiosResponse<PokeSrvAuthResponse> = await axios.request(config);

    if (!data) return null;

    return data;

  } catch (e: unknown) {
    console.log(e);
    return null;
  }

};

export const getAllSets = async (token: string): Promise<PokeSrvRespWithData<SetType[]> | null> => {

  const config: AxiosRequestConfig = {
    method: 'get',
    url: `${BACKEND_API_URL}/sets`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {

    const response = await axios.request(config);
    return response.data;

  } catch (e: unknown) {
    console.log(e);
    return null;
  }

};

export const getCardsBySetId = async (setId: string, token: string): Promise<SetDetailType[] | null> => {

  const config: AxiosRequestConfig = {
    method: 'get',
    url: `${BACKEND_API_URL}/sets/${setId}/cards`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {

    const response = await axios.request(config);
    return response.data.data;

  } catch (e: unknown) {
    console.log(e);
    return null;
  }

};

export const getDetailByCardId = async (cardId: string, token: string) => {

  const config: AxiosRequestConfig = {
    method: 'get',
    url: `${BACKEND_API_URL}/cards/${cardId}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {

    const response = await axios.request(config);
    return response.data.data[0] || null;

  } catch (e: unknown) {
    console.log(e);
    return null;
  }

};