import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// redux
import { loadUser } from "./redux/actions/auth";
import { LOGOUT } from "./redux/actions/types";
import setAuthToken from "./redux/utils/setAuthToken";
import { Provider } from "react-redux";
import store from "./store";
// components
import TopNavBar from "./components/navbar/navbar";
import Routes from "./components/routes/routes";
// pages
import MainPage from "./pages/main";

function App() {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="App">
            <TopNavBar />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route component={Routes} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
