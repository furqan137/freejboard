import React, { createContext, useState, useCallback, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Login function
  const login = useCallback((userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("authData", JSON.stringify({ user: userData, token: authToken }));
  }, []);

  // Logout function
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authData");
  }, []);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("authData"));
    if (storedData && storedData.token) {
      login(storedData.user, storedData.token);
    }
  }, [login]);

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!token, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
