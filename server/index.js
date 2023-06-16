import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import handlers from "./handlers/index.js";
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(418).send("I'm a teapot");
});
app.post('/v1/match', handlers.createMatch);  // create match  OK
app.get('/v1/match', handlers.listMatches);   // list matches  OK
app.post('/v1/board', handlers.saveBoard);    // save board    OK
app.get('/v1/board/:id', handlers.getBoard);  // bring board   OK
app.post('/v1/play/:id', handlers.play);      // allow to play WIP

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
