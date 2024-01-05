// Express server with basic get that returns an empty array

import express from "express";
import airports from './airports.json'

const app = express();

app.use(express.json());

const offsets: AiportApi.Offset[] = [];

app.get("/airports", (req, res) => {
  res.send(airports);
})

app.get("/offsets", (req, res) => {
    res.send(offsets);
})

app.post("/offsets", (req, res) => {
    const offset = req.body as AiportApi.Offset
    offsets.push(offset)

    res.send(offsets)
})

app.listen(5000)
