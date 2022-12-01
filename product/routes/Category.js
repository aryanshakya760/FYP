const express = require('express');
const { sequelize } = require('../models');
const router = express.Router()
const { Category } = require("../models");

router.get("/", async(req, res) => {
    showCategory = await Category.findAll();
    res.json(showCategory);
});

router
    .route("/")
    .post((req, res) => {
        Category.create(category);
        res.json(category);

    });

module.exports = router