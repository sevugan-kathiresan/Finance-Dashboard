import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import kpiRoutes from "./routes/kpi.js"; //importing our routes (note in nodejs we need to specify .js but in case of react not needed)
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);

/* Mongoose Setup*/
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL)
    .then(async ()=>{
        app.listen(PORT, ()=> console.log(`Server Port : ${PORT}`));

        /* ADD data one time only then comment the below two lines of code */
        // await mongoose.connection.db.dropDatabase(); // since we are manually seeding the data we need to drop the existing database before everytime we start or server otherwise we will end up with duplicate data
        // KPI.insertMany(kpis);
    })
    .catch((error) => console.log(`${error} did not connect`))

