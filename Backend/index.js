import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "./config/passport.config.js";
import session from "express-session";
import connectDb from "./db/connectdb.js";
import categoryRoute from "./route/category.route.js";
import userRoute from "./route/user.route.js";
import wishlistRoute from "./route/wishlist.route.js";
import ProductRoute from "./route/product.route.js";
import myOrderRoute from "./route/myOrder.route.js";
import PaymentRoute from "./route/payment.route.js";
import googleRoute from "./route/googleAuth.route.js";
dotenv.config();
const port = process.env.PORT || 4001;
const app = express();

connectDb();
//routes
const corsOptions = {
  origin: 'https://urban-cart-eight.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  Credential:true,
};
app.use(
  cors(corsOptions)
);
app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET_key,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", categoryRoute);
app.use("/user", userRoute);
app.use("/product", ProductRoute);
app.use("/wishlist", wishlistRoute);
app.use("/api/myorders", myOrderRoute);
app.use("/api/payment", PaymentRoute);
app.use("/auth", googleRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
