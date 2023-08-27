const express = require("express");
const router = express.Router();
const photoTraining = require("./controller/photoTraining");
const patroli = require("./controller/patroli");
const tamu = require("./controller/tamu");

// Patroli
router.post("/post/patroli/insert-patroli", patroli.insertPatroli);

// Tamu 
router.post("/post/tamu/insert-tamu", tamu.insertTamu);

router.get("/get/photo-training", photoTraining.getPhotos);
router.delete("/delete/photo-training", photoTraining.deletePhoto);

module.exports = router;
