
const app = require("./app");
 const dotenv = require ('dotenv').config() ;
 const Stripe = require('stripe')
 const port = 3000;
  
// const SECRET_KEY = "sk_test_51Mj3foAOzb6EsGkU8nAJJVY21mY2djjEkDNRURpi2EbF8ybkxVGnErrpcHtOBXWLLKUPAwZELshoXgQ5f4Yc2L6W00ICY5g41O";

console.log(process.env.SECRET_KEY)
//Confirm the API version from your stripe dashboard
const stripe = Stripe(process.env.SECRET_KEY, { apiVersion: "2022-11-15" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});



//Setting the port and listening for connections


