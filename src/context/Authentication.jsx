import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Config";

export const AuthContxt = createContext({
  user: null,
  isLoading: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return unsubcribe;
  }, []);

  const value = {
    user,
    isLoading,
  };

  return (
    <AuthContxt.Provider value={value}>
      {!isLoading && children}
    </AuthContxt.Provider>
  );
};
