const express = require("express");
const router = express.Router();
const { uploadImage, getImage } = require("../controllers/uploadController");

const multer = require("multer");
const storage = multer.memoryStorage();
const { file } = require("googleapis/build/src/apis/file");
const upload = multer({ storage }).single("file");

//RUTAS
router.post("/upload", upload, uploadImage);
router.get("/image/:name", getImage);

module.exports = router;
