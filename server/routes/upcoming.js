const express = require("express");
const upcRoutes = express.Router();
const Upcoming = require("../models/UpcomingModel");

upcRoutes.get("/upcoming", async (req, res) => {
   const response = await Upcoming.find();
   res.json(response);
  });
  module.exports = upcRoutes;
