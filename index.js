const { localsName } = require("ejs");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/:nome/:area", (req, res) => {
  let nome = req.params.nome;
  let area = req.params.area;
  res.render("index", {
    nome: nome,
    area: area,
    faculdade: "UNESP",
  });
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
