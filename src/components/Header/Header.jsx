import "./Header.css";

import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    const navlinks = (<>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipies</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
    </>)
  return (
    <div>
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <div className="flex">
          <a className="btn btn-ghost text-[32px] pl-0">Recipe Calories</a>
        </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="flex-none gap-2">
          <div className="form-control">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="top-search w-full pl-10 pr-4 py-2 border border-none bg-gray-200 focus:outline-none focus:border-blue-500"
              />
              <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-green-400">
                <CgProfile style={{ fontSize: "30px", margin: "9px auto" }} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
</div>
      {/* <div className="navbar bg-base-100 flex justify-between h-[148px] w-[1320px] items-center pl-0 pr-0">
        <div className="flex">
          <a className="btn btn-ghost text-[32px] pl-0">Recipe Calories</a>
        </div>
        <div>
          <ul
            tabIndex={0}
            className="menu-sm mt-3 p-2 bg-base-100 flex items-center text-[16px]"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipies</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="top-search w-full pl-10 pr-4 py-2 border border-none bg-gray-200 focus:outline-none focus:border-blue-500"
              />
              <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-green-400">
                <CgProfile style={{ fontSize: "30px", margin: "9px auto" }} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
