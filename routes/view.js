const router = require("express").Router();
const { model } = require("mongoose");
const path = require("path");
const { send } = require("process");

router.get("/exercise", (req, res) => {
   
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
  });

  router.get("/stats", (req, res) => {
   
    res.sendFile(path.join(__dirname,"../public/stats.html"))
  });

  module.exports = router;