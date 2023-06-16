import express from "express";
import cors from "cors";
import handlers from "./handlers/index.js";
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.status(418).send("I'm a teapot");
});
app.post('/v1/match', handlers.createMatch);
app.get('/v1/match', handlers.listMatches);
app.post('/v1/board', handlers.saveBoard);
app.get('/v1/board/:id', handlers.getBoard);
app.get('/v1/play/:id', handlers.play);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
