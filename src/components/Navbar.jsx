import { signOut } from "firebase/auth";
import { auth } from "../firebase/Config";

const Navbar = () => {
  const handleSignout = async () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="navbar bg-base-100 justify-between">
        <a className="font-bold underline text-xl">GallerPro</a>
        <button onClick={handleSignout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
