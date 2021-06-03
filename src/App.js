import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CurrentUserContext from "./context/currentUser/current-user.context";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
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
import FooterComponent from "./components/footer/FooterComponent";
import UserAccount from "./pages/userAccount";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import CheckoutPage from "./pages/checkout";
import StockistLocation from "./pages/stockist";
import CollabDetail from "./pages/collabDetail";
import ShopAllMen from "./pages/shopallmen";
import CustomMade from "./pages/custom";
import PolicyPage from "./pages/policy/policy";
import MadeInSanAntonio from "./pages/sanAntonio";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <CurrentUserContext.Provider value={this.state.currentUser}>
            <TopNavBar />
          </CurrentUserContext.Provider>
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
            <Route path="/custom" component={CustomMade} />
            <Route path="/madeinspain" component={AboutUsPage} />
            <Route path="/designedinsa" component={MadeInSanAntonio} />
            <Route path="/login" component={LoginPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.state.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
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
    );
  }
}

export default App;
