import React from "react";

// Icons
import Logo from "../../Images/Logo.png";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);


  return (
    <header className="flex justify-between gap-2">
      <div>
        <img className="h-10 w-10 rounded-lg" src={Logo} alt="logo" />
      </div>
      {user.email && (
        <div className="flex gap-4">
          <button className=" bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
            Log out
          </button>
          <div>
            <img
              className="h-10 w-10 rounded-full"
              src={`http://localhost:4000/${user.profilePic}`}
              alt=""
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
