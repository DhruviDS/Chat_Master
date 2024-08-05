// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// import Connection from './database/db.js';

// import Route from './routes/route.js';

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', Route);

// Connection();

// const PORT = 8000;

// app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import Connection from "./database/db.js";
import Route from "./routes/route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

Connection();

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
