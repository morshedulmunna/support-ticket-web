import axios, { AxiosRequestConfig } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { RegisterUser } from '@/types/custome-type';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_ADDRESS,
  withCredentials: false,
  timeout: 1000,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

API.interceptors.request.use((req) => {
  const user = localStorage.getItem('user') || 'null';

  req.headers!['Authorization'] = `Bearer ${JSON.parse(user)?.token || ''}`;
  return req;
});
export const useGetPost = () => {
  return useQuery(['getPost'], async () => {
    const response = await API.get<any>('/posts');
    return response.data;
  });
};

// ============Register==============>
export const userRegister = (body: RegisterUser) => {
  return API.post('/auth/signup', body);
};

// ============Login==============>
export const userLogin = (body: any) => {
  return API.post('/auth/signin', body);
};
