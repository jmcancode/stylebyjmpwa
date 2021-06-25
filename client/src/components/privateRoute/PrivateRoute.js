import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CurrentUserContext from "../../context/currentUser/current-user.context";

export default function PrivateRoute({ component: Component, ...rest }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signIn" />
        );
      }}
    ></Route>
  );
}
