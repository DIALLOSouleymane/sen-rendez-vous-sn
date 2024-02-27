// Creation des routes de notre application
const express = require('express');
const router = express.Router();
// Recupération de notre modele de table
const { Personne } = require("../models");

router.get("/", async (req, res) => {
    // res.json("Hello world!");
    // Si nous voulons retourner ce resultat au format json, 
    // On le fait comme ceci en changeant juste le send par json:
    // res.json("Hello world!");
    // La premiere requete renvoie un résultat au format web page !
    const listPersonnes = await Personne.findAll();
    res.json(listPersonnes);

});

router.post("/", async (req, res) => {
    const personne = req.body;
    // Creation d'une personne avec des proprietes correspondant aux instances de notre classe Personne
    // async et await nous permet d'attendre que le process se termine
    await Personne.create(personne);
    res.json(personne);

});


module.exports = router;