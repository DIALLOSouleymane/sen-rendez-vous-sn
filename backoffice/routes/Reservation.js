// Creation des routes de notre application
const express = require('express');
const router = express.Router();
// Recupération de notre modele de table
const { Reservation } = require("../models");

router.get("/", async (req, res) => {
    const listReservations = await Reservation.findAll();
    res.json(listReservations);
});

router.post("/", async (req, res) => {
    const reservation = req.body;
    // Creation d'une reservations avec des proprietes correspondant aux instances de notre classe Reservation
    // async et await nous permet d'attendre que le process se termine
    await Reservation.create(reservation);
    res.json(reservation);

});


module.exports = router;