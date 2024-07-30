import express from "express";
import errorHandler from "./errorHandler/errorHandler.js";
import dotenv from "dotenv";
import router from "./Router.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// routes
app.use(router);

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running at htpp:localhost:${PORT}`);
});
