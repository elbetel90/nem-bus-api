const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const voyageRouter = require("./routes/voyage.router");
const userRouter = require("./routes/user.router");
const companyRouter = require("./routes/company.route");

// const { fail } = require("assert");
const { dirname } = require("path");
const app = express();

// APP - MIDDLEWARE
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTER - MIDDLEWARE
app.use("/api/v1/voyages", voyageRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/companies", companyRouter);

module.exports = app;
