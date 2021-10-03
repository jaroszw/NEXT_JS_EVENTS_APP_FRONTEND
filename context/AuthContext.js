import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '@/config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {}, [user]);

  // Register User
  const register = async (user) => {
    console.log(user);
  };
  // Login user
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log(data.user);
      setUser(data.user);
    } else {
      setError(data.message);
      setError(null);
    }
  };
  // Logout user
  const logout = async () => {
    console.log('logout');
  };

  // Check if user is logged in
  const checkUserLoggedIn = () => {
    console.log('check');
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;