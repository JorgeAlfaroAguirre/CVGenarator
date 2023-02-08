import express from "express";
import loginRoute from "./routes/sesion.routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", 3000);

app.use(loginRoute);

app.listen(3000);
console.log("server running in port:", 3000);
