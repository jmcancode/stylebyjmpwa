import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const stripeSecret = "process.env.REACT_APP_STRIPE_SECRET_KEY";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

app.use("/client/public/**", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

app.get("/", async (req, res) => {
  res.json("Hello this is stripe setup server.");
});

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripeSecret.checkout.session.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 40000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5000/stripepaymentsuccess",
    cancel_url: "http://localhost:5000/stripepaymentcancel",
  });
  res.json({ id: session.id });
});

app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const payload = request.body;

  console.log("Got payload: " + payload);

  res.status(200);
});

app.listen(port, () =>
  console.log(`SBJM Footwear Server is connected on PORT ${port}`)
);
