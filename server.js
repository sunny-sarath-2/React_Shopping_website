var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var Sample = require("./routes/Sample");
var Insert = require("./routes/Insert");
var Login = require("./routes/login");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", express.static(__dirname + "/public"));
app.use(express.static(__dirname + "static"));
app.set("views", __dirname + "/static");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(session({ secret: "ssshhhhh" }));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});

// app.use("/my", Sample);
app.use("/login", Login);
app.use("/insert", Insert);

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname + "/public", "", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
