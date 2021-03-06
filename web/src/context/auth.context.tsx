import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import * as authService from '../services/auth.service';
import { LoginDto } from '../types/user.types';

type User = {
  email: string;
};

type AuthContextData = {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(loginDto: any): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      // await new Promise((resolve) => setTimeout(resolve, 900));
      const { storagedUser, storagedToken } = getAuthItemsFromLocalStorage();

      if (storagedUser && storagedToken) {
        setDefaulHeaderToken(JSON.parse(storagedToken));
        setUser(JSON.parse(storagedUser));
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = async (loginDto: LoginDto) => {
    const response = await authService.signIn(loginDto);
    const { data } = response;
    const { token } = data;

    console.log(data);

    saveInLocalStorage(loginDto.email, token);
    setDefaulHeaderToken(token);
    setUser(loginDto);
  };

  const signOut = () => {
    setUser(null);
    cleanAuthItemsFromLocalStorage();
  };

  const cleanAuthItemsFromLocalStorage = () => {
    localStorage.removeItem('@TOCOMFOMEAuth:user');
    localStorage.removeItem('@TOCOMFOMEAuth:token');
  };

  const setDefaulHeaderToken = (token: string) => {
    api.defaults.headers['authorization'] = `Bearer ${token}`;
  };

  const saveInLocalStorage = (email: string, token: string) => {
    localStorage.setItem('@TOCOMFOMEAuth:user', JSON.stringify({ email }));
    localStorage.setItem('@TOCOMFOMEAuth:token', JSON.stringify(token));
  };

  const getAuthItemsFromLocalStorage = () => {
    const storagedUser = localStorage.getItem('@TOCOMFOMEAuth:user') || '';
    const storagedToken = localStorage.getItem('@TOCOMFOMEAuth:token') || '';

    return { storagedUser, storagedToken };
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
