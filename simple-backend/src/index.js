import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import kochbuchRoutes from "./routes/kochbuchRoutes.js";
import nwerteRoutes from "./routes/naehrwerteRoutes.js";
import zutatenRoutes from "./routes/zutatenRoutes.js";
import swaggerDocs from "../swaggerDocs.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use("/kochbuch/rezepte", kochbuchRoutes);
app.use("/kochbuch/zutaten", zutatenRoutes);
app.use("/kochbuch/naehrwerte", nwerteRoutes);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.all("*", (req, res) => res.sendStatus(404));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
    console.log("Database connected");
});

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});