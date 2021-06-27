import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";

const stripePromise = loadStripe("process.env.REACT_APP_STRIPE_SECRET_KEY");

const ProductDisplay = ({ handleClick }) => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Developers Test"
      />
      <div className="description">
        <h3>Developers Test</h3>
        <h5>$280.00</h5>
      </div>
    </div>
    <button
      className="btn btn-dark"
      type="button"
      id="checkout-button"
      role="link"
      onClick={handleClick}
    >
      Checkout
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function StripeCheckoutButton() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async () => {
    const stripe = await stripePromise;
    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
      }
    );
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout(
      {
        sessionId: session.id,
      },
      console.log(session)
    );
    if (result.error) {
      console.warn("There was an error! ");
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}
