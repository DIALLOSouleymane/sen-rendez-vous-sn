// Creation des routes de notre application
const express = require('express');
const router = express.Router();
// Recupération de notre modele de table
const { Reservation } = require("../models");

router.get("/", (req, res) => {
    res.json("Hello world!");
    // Si nous voulons retourner ce resultat au format json, 
    // On le fait comme ceci en changeant juste le send par json:
    // res.json("Hello world!");
    // La premiere requete renvoie un résultat au format web page !
});

router.post("/", async (req, res) => {
    const reservation = req.body;
    // Creation d'une reservations avec des proprietes correspondant aux instances de notre classe Reservation
    // async et await nous permet d'attendre que le process se termine
    await Reservation.create(reservation);
    res.json(reservation);

});


module.exports = router;