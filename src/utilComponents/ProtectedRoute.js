import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const authState = useContext(AuthContext);
  console.log(authState);
  return (
    <Route
      {...rest}
      render={routeProps =>
         authState.isLoading || authState.isAuthenticated ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default ProtectedRoute;