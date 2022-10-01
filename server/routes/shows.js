const express = require("express");
const showRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;
const Show = require("../models/ShowModel");

showRoutes.get('/shows', async (req, res) => {
  const response = await Show.find()
  res.json(response);
});

showRoutes.get("/shows/:id",  (req, res) => {
  Show.findOne({_id: ObjectId(req.params.id)}, (err, result) =>{
    if(err) throw err;
    res.json(result);
  });
});

showRoutes.post("/shows/add", function (req, response){
  const show = new Show(
  {
    title: req.body.title,
    genre: req.body.genre,
    desc: req.body.desc,
    cover: req.body.cover
  });
  show.save((err, result) => {
    if (err) throw err;
    response.json(result);
  });
});

showRoutes.delete("/:id", function (req, response){
  Show.deleteOne({_id: ObjectId(req.params.id)}, (err, result) => {
    if(err) throw err;
    response.json(result);
  });
});

module.exports = showRoutes;
