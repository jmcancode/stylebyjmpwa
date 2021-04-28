import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./firebase/context";

import TopNavBar from "./components/navbar/navbar";

import MainPage from "./pages/main";
import FourOhFour from "./pages/errorpage";
import MensPage from "./pages/menspage";
import BagPage from "./pages/bagpage";
import AccPage from "./pages/accessories";
import ByRequestPage from "./pages/byrequest";
import AboutUsPage from "./pages/aboutus";
import LoginPage from "./components/auth/login";
import RegisterPage from "./components/auth/register";
import CollabPage from "./pages/collaborations";
import ShoeCare from "./pages/shoecare";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <TopNavBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/mens" component={MensPage} />
            <Route path="/bags" component={BagPage} />
            <Route path="/accessories" component={AccPage} />
            <Route path="/shoecare" component={ShoeCare} />
            <Route path="/collabs" component={CollabPage} />
            <Route path="/byrequest" component={ByRequestPage} />
            <Route path="/aboutus" component={AboutUsPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
