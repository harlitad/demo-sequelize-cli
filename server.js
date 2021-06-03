const express = require("express");
const app = express();
const port = 3000;
const cast = require("./db/models").Cast;
const movie = require("./db/models").Movie;
const category = require("./db/models").Category;
const db = require("./db/models")

// db.Movie

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/casts", async (req, res) => {
  const casts = await cast.findAll();
  res.json({ casts });
});

app.get("/casts/:id/movies", async (req, res) => {
  const casts = await cast.findOne({
    where: {
      id: req.params.id,
    },
    include: {
        model: movie,
        through: {
            attributes: []
        },
        include: category
    }
  });
  res.json({ casts });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
