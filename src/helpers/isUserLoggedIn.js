import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import * as ROUTES from "../constants/routes";

export default function isUserLoggedIn({
  user,
  loggedInPath,
  children,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{ pathname: loggedInPath, state: { from: location } }}
            />
          );
        }

        return null;
      }}
    />
  );
}

isUserLoggedIn.propTypes = {
  user: PropTypes.object,
  isUserLoggedIn: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
