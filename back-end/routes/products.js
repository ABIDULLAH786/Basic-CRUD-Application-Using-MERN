const express = require("express");
const { getAllProducts, removeProduct,findProductById, findProductByName, createProduct, updateProduct } = require("../controllers/ProductsController");

const router = express.Router();

// router.get("/")
router.route("/").get(getAllProducts);
router.route("/:id").get(findProductById);
// router.route("/findByName/:name").get(findProductByName);
router.route("/create").post(createProduct);
router.route("/update/:id").patch(updateProduct);
router.route("/remove/:id").delete(removeProduct);


module.exports= router;