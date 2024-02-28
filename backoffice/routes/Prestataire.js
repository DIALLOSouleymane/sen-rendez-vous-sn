// Creation des routes de notre application
const express = require('express');
const router = express.Router();
// Recupération de notre modele de table
const { Prestataire } = require("../models");

router.get("/", async (req, res) => {
    // res.send("Hello world!");
    const listPrestataires = await Prestataire.findAll();
    res.json(listPrestataires);
});

router.post("/", async (req, res) => {
    const prestataire = req.body;
    // Creation d'un Prestataire avec des proprietes correspondant aux instances de notre classe Prestataire
    // async et await nous permet d'attendre que le process se termine
    await Prestataire.create(prestataire);
    res.json(prestataire);

});


module.exports = router;