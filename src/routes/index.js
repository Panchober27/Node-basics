const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/contacto", (req, res) => {
  res.render("contacto");
});

router.get("/adios", (req, res) => {
  res.render("adios");
});

module.exports = router;
