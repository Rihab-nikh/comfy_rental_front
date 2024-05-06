import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState('');
  const [userFullName, setUserFullName] = useState('');

  const login = (userId, fullName) => {
    setUserId(userId);
    setUserFullName(fullName);
  };

  const logout = () => {
    setUserId('');
    setUserFullName('');
  };

  return (
    <AuthContext.Provider value={{ userId, userFullName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
