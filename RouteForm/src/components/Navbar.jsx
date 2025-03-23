import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#212A31] border-b border-[#2E3944] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#748D92] font-bold"
                : "text-[#748D92] hover:text-[#D3D9D4]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/fav"
            className={({ isActive }) =>
              isActive
                ? "text-[#748D92] font-bold"
                : "text-[#748D92] hover:text-[#D3D9D4]"
            }
          >
            Favourites
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-[#748D92] font-bold"
                : "text-[#748D92] hover:text-[#D3D9D4]"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
