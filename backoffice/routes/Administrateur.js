// Creation des routes de notre application
const express = require('express');
const router = express.Router();
// Recupération de notre modele de table
const { Admin } = require("../models");

router.get("/", async (req, res) => {
    // res.json("Hello world!");
    // Si nous voulons retourner ce resultat au format json, 
    // On le fait comme ceci en changeant juste le send par json:
    // res.json("Hello world!");
    // La premiere requete renvoie un résultat au format web page !
    const admin = await Admin.findAll();
    res.json(admin);
});

router.post("/", async (req, res) => {
    const admin = req.body;
    // Creation d'une admin avec des proprietes correspondant aux instances de notre classe Admin
    // async et await nous permet d'attendre que le process se termine
    await Admin.create(admin);
    res.json(admin);

});


module.exports = router;