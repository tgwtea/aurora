import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children, token }) {
  return (
    <AuthContext.Provider value={{
      token
    }}>
      {children}
    </AuthContext.Provider>
  );
}