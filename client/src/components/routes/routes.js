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
import JMsJouranl from "../../pages/jmsjournal";

const Routes = (props) => {
  return (
    <div>
      <Switch>
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
        <Route path="/jmsjournal" component={JMsJouranl} />

        <Route path="/stockist" component={StockistLocation} />
        <Route path="/policy" component={PolicyPage} />
        <PrivateRoute path="/myaccount" component={UserAccount} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  );
};
export default Routes;
