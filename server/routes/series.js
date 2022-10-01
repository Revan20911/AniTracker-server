const express = require("express");
const seriesRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;
const Series = require("../models/SeriesModel");

seriesRoutes.get("/anime/series", async (req, res) => {
    const response = await Series.find({});
    res.json(response);
})

seriesRoutes.get("/anime/series/:id" , async (req, res) => {
    Series.findOne({_id: ObjectId(req.params.id)}, (err, result) =>{
        if(err) throw err;
        res.json(result);
      });
})

module.exports = seriesRoutes;