import { useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <header className="h-16 mb-8 bg-white border-b border-gray-primary">
      <div className="container h-full max-w-screen-lg mx-auto">
        <div className="flex justify-between h-full">
          <div className="flex items-center text-center text-gray-700 cursor-pointer align-items">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram Logo">
                <img
                  src="/images/logo.png"
                  alt="Instagram"
                  className="w-6/12 mt-2"
                />
              </Link>
            </h1>
          </div>
          <div className="flex items-center text-center text-gray-700 align-items">
            {user ? (
              <>
                <Link
                  to={ROUTES.DASHBOARD}
                  aria-label="Dashboard"
                  className="mr-3"
                >
                  <svg
                    className="w-8 h-6 cursor-pointer text-black-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </Link>
                <button
                  className="mr-3"
                  type="button"
                  title="Sign Out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <svg
                    className="w-8 h-6 cursor-pointer text-black-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      className="flex w-8 h-8 rounded-full"
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile `}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="w-20 h-8 mr-2 text-sm font-bold text-white rounded outline-none bg-blue-medium"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="w-20 h-8 text-sm font-bold bg-white border rounded text-blue-medium border-blue-medium"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
