import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import CartProvider from "./providers/cart/cart.provider";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { store, persistor } from "./redux/store";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)


ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </CartProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals(console.log);
