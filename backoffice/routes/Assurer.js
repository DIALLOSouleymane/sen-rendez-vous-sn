// Creation des routes de notre application
const express = require('express');
const router = express.Router();
// Recupération de notre modele de table
const { Assurer } = require("../models");

router.get("/", async (req, res) => {
    const listAssurer = await Assurer.findAll();
    res.json(listAssurer);
});

router.post("/", async (req, res) => {
    const assurer = req.body;
    // Creation d'une assurer avec des proprietes correspondant aux instances de notre classe Assurer
    // async et await nous permet d'attendre que le process se termine
    await Assurer.create(assurer);
    res.json(assurer);

});


module.exports = router;