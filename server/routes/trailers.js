const express = require("express");
const itemRoutes = express.Router();
const Trailer = require("../models/TrailerModel");

itemRoutes.get('/items', async (req, res) => {
    const result = await Trailer.find();
    res.json(result);
})

module.exports = itemRoutes;