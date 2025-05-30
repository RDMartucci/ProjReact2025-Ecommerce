import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { creaUsuario } from '../auth/firebase';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { login, usuario, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (user === 'admin' && password === '1234') {
      login(user);
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  function registrarUsuario(e) {
    e.preventDefault();
    creaUsuario(user, password)
    login(user)
  }

  const handleLogout = (e) => {
    logout()
  }

  if (usuario == "admin") {
    return (
      <form onSubmit={handleLogout}>
        <button type="submit">Cerrar sesión</button>
      </form>
    )
  }
  return (
    <>
    <div className='login-container'>
      <form className="login" onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
    <div className='registro-container'>
      <form className='registro' onSubmit={registrarUsuario}>
        <h2>Registrarse</h2>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
    </>
  );
}
