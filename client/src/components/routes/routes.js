import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../privateRoute/PrivateRoute";

// pages
import FourOhFour from "../../pages/errorpage";
import MensPage from "../../pages/menspage";
import BagPage from "../../pages/bagpage";
import AccPage from "../../pages/accessories";
import ByRequestPage from "../../pages/byrequest";
import AboutUsPage from "../../pages/aboutus";

import CollabPage from "../../pages/collaborations";
import ShoeCare from "../../pages/shoecare";
import UserAccount from "../../pages/userAccount";

import StockistLocation from "../../pages/stockist";
import CollabDetail from "../../pages/collabDetail";
import ShopAllMen from "../../pages/shopallmen";
import CustomMade from "../../pages/custom";
import PolicyPage from "../../pages/policy/policy";
import MadeInSanAntonio from "../../pages/sanAntonio";
import JMsJournal from "../../pages/jmsjournal";

import SignUp from "../../pages/auth/register";
import Login from "../../pages/auth/login";
import AdminPanel from "../../pages/admin/adminPanel";
import JournalDetail from "../../pages/journalDetail";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mens" component={MensPage} />
        <Route exact path="/shopallmens" component={ShopAllMen} />
        <Route exact path="/bags" component={BagPage} />
        <Route exact path="/accessories" component={AccPage} />
        <Route exact path="/shoecare" component={ShoeCare} />
        <Route exact path="/collabs" component={CollabPage} />
        <Route exact path="/collabdetail" component={CollabDetail} />
        <Route exact path="/byrequest" component={ByRequestPage} />
        <Route exact path="/custom" component={CustomMade} />
        <Route exact path="/madeinspain" component={AboutUsPage} />
        <Route exact path="/designedinsa" component={MadeInSanAntonio} />
        <Route exact path="/jmsjournal" component={JMsJournal} />
        <Route exact path="/jmsjournal/:id" component={JournalDetail} />
        <Route exact path="/stockist" component={StockistLocation} />
        <Route exact path="/policy" component={PolicyPage} />
        <PrivateRoute exact path="/myaccount" component={UserAccount} />
        <PrivateRoute exact path="/admin-panel" component={AdminPanel} />
        <Route exact component={FourOhFour} />
      </Switch>
    </div>
  );
};
export default Routes;
