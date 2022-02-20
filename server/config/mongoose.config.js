const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("not connected to database", err));
