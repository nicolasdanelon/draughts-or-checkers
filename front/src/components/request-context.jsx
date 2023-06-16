import { createContext, useContext } from 'preact/compat';
import axios from 'axios';

const AxiosContext = createContext();

export function useAxios() {
  return useContext(AxiosContext);
}

const baseURL = import.meta.env.VITE_SERVER_URL;

const axiosConfig = {
  baseURL: `${baseURL}/v1/`,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(axiosConfig);

export function AxiosProvider({ children }) {
  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
}
