import { NavLink } from "react-router-dom";
import store from "../store/configureStore";


export const MainNavbar = () => {
  const { isLoggedIn, } = store.getState().userAuth


  const content = isLoggedIn ?
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink
          to="user/:userid/binder"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        >
          Binder
        </NavLink>
      </li>
      <li>
        <NavLink
          to="user/:userid/offers"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        >
          Offers
        </NavLink>
      </li>
    </ul>
    : <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"><li>
      <NavLink
        to="login"
        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
      >
        Iniciar Sesion
      </NavLink>
    </li>
      <li>
        <NavLink
          to="signup"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        >
          Registrarse
        </NavLink>
      </li>
    </ul>;



  return (
    <header >
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="" className="flex items-center space-x-3 rtl:space-x-reverse" end>
            <img src="src\assets\book.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rhystic Binder</span>
          </NavLink>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">0
            {content}
            {isLoggedIn && <NavLink
              to="user/:userid/profile"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            >
              <img src="" className="h-8" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">User Profile</span>
            </NavLink>}
          </div>
        </div>
      </nav>
    </header>
  );
};
