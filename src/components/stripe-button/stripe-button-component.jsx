import React from "react";
import StripeCheckout from "react-stripe-checkout";
import JMLogo from "../../assets/jmlogo.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_zlOvclEEifiNgca9YX9omBWw";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="SBJM Footwear"
      billingAddress
      image={JMLogo}
      shippingAddress
      description={"Your total is $${price}"}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
