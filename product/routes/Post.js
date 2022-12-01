const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { Product } = require("../models");

const Users = require("../models/Users");

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: "1000000000" },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const minType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if (minType && extname) {
            return cb(null, true);
        }
        cb("The image format is invalid! Please provide a valid file.");
    },
}).single("image");

router.get("/", async(req, res) => {
    showAllProduct = await Product.findAll();
    console.log(showAllProduct);
    res.json(showAllProduct);
});

router.route("/").post(upload, (req, res) => {
    const { name, description, price, CategoryId } = req.body;
    Product.create({
        name: name,
        description: description,
        price: price,
        CategoryId: CategoryId,
        image: req.file.path,
    });
    res.json("Product Added successfully!");
    alert("Product Added Successfully!!!")
});

router.get('/byId/:id', async(req, res) =>{
    const id = req.params.id
    const post = await Product.findByPk(id);
    res.json(post);
});

module.exports = router;