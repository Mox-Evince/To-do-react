import { createContext, useCallback, useMemo, useState } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string) => Promise<void>;
  logout: () => void;
  user: string | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const loggedInKey = "loggedIn";

const getLoggedinInfo = () => {
  const loggedIn = localStorage.getItem(loggedInKey);
  return loggedIn;
};

const setLoggedInInfo = (value: string) => {
  localStorage.setItem(loggedInKey, value);
};

const removeLoggedInInfo = () => {
  localStorage.removeItem(loggedInKey);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(getLoggedinInfo());

  const login = useCallback(async (username: string) => {
    if (username) {
      setLoggedInInfo(username);
      setUser(username);
    }
  }, []);

  const logout = useCallback(() => {
    removeLoggedInInfo();
    setUser(null);
  }, []);

  const authContextValue: AuthContextType = useMemo(
    () => ({
      isAuthenticated: !!user,
      login,
      user,
      logout,
    }),
    [login, logout, user]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
