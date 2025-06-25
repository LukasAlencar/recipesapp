import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logged, setLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('loggedUser').then((user) => {
      if (user) {
        setLogged(true);
        setCurrentUser(JSON.parse(user));
      }
    });
  }, []);

  const register = async (username, password) => {
    const usersRaw = await AsyncStorage.getItem('users');
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    const exists = users.find(u => u.username === username);
    if (exists) {
      throw new Error('Usuário já existe');
    }

    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
    await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const login = async (username, password) => {
    const usersRaw = await AsyncStorage.getItem('users');
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      throw new Error('Usuário ou senha inválidos');
    }

    await AsyncStorage.setItem('loggedUser', JSON.stringify(user));
    setLogged(true);
    setCurrentUser(user);
  };

  // Função de logout
  const logout = async () => {
    await AsyncStorage.removeItem('loggedUser');
    setLogged(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ logged, currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
