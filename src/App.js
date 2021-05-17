import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./firebase/context";

import TopNavBar from "./components/navbar/navbar";
import TopTopNav from "./components/topNav/topNav";

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
import FooterComponent from "./components/footer/FooterComponent";
import UserAccount from "./pages/userAccount";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import CheckoutPage from "./pages/checkout";
import StockistLocation from "./pages/stockist";
import CollabDetail from "./pages/collabDetail";
import ShopAllMen from "./pages/shopallmen";
import PolicyPage from "./pages/policy/policy";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <TopTopNav />

          <TopNavBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/mens" component={MensPage} />
            <Route path="/shopallmens" component={ShopAllMen} />
            <Route path="/bags" component={BagPage} />
            <Route path="/accessories" component={AccPage} />
            <Route path="/shoecare" component={ShoeCare} />
            <Route path="/collabs" component={CollabPage} />
            <Route path="/collabdetail" component={CollabDetail} />
            <Route path="/byrequest" component={ByRequestPage} />
            <Route path="/aboutus" component={AboutUsPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/stockist" component={StockistLocation} />
            <Route path="/policy" component={PolicyPage} />
            <PrivateRoute path="/myaccount" component={UserAccount} />
            <Route component={FourOhFour} />
          </Switch>
          <FooterComponent />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
