const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("process.env.REACT_APP_STRIPE_PUBLIC_KEY");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 5000;
const TEST_DOMAIN = "http://localhost:3000/checkout";
const https = require("https");
const helmet = require("helmet");

app.use("/client/public/**", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === "production") {
  app.use(compression);
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url)
});

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(port, () =>
    console.log(`SBJM Footwear Server is connected on PORT ${port}`)
  );
