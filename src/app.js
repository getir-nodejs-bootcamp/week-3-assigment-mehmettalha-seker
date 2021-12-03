const express = require("express");
const config = require("./config");
const {UserRouter} = require("./route/User")
const notFoundMiddleware = require('./middleware/not-found');


config();

const app = express();

app.use(express.json());


app.listen(process.env.APP_PORT, () => {
  app.use("/user", UserRouter)
  app.use(notFoundMiddleware)
});
