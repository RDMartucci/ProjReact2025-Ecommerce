import React, { createContext, useState, useContext } from 'react';

// Crear el contexto de autenticación.
const AuthContext = createContext();
// Proveedor del contexto.
export function AuthProvider({ children }) {
  //por defecto ningun usuario logueado.
  const [usuario, setUsuario] = useState(null);

  const login = (username) => {
    // Simulando la creación de un token.
    const token = `fake-token-${username}`;
    localStorage.setItem('authToken-BroncoShopping', token);
    setUsuario(username);
  };
  const logout = () => {
    localStorage.removeItem('authToken-BroncoShopping');
    setUsuario(null);
  };
  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);