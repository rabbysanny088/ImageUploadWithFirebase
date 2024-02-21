import { useContext } from "react";
import { AuthContxt } from "../context/Authentication";

const useAuth = () => {
  return useContext(AuthContxt);
};

export default useAuth;
