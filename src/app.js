import express from "express";
import routes from "./routes/cpfRoutes.js";

const app = express();
app.use(routes)


export default app
