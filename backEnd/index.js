const express = require("express");
const app = express();
const uri = "https://api.mugglepay.com/api/usdt";


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Resource-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");
  console.log("requst url = " + req.url);
  next();
});

app.get("/", (req, res) => {
  res.status(301).redirect(uri);  
});

app.listen(8080, () => console.log("App listening on port 8080"));
