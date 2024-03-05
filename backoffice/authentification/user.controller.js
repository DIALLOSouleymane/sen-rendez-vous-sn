const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res){
    const user = {
        prenom: req.body.prenom,
        nom: req.body.nom,
        profil_image: req.body.profil_image,
        description: req.body.description,
        email: req.body.email,
        telephone: req.body.telephone,
        fonction: req.body.fonction,
        lieu: req.body.lieu,
        nom_entreprise: req.body.nom_entreprise,
        password: req.body.password,

    }

    models.prestataire.create(user).then(result => {
        res.status(201).json({
            message: "Votre compte a été créé avac succès !"
        });
    }).catch(err => {
        res.status(500).json({
            message: `Erreur : impossible de créer votre compte ! 
            Une erreur s'est produite...
            `
        });
    });
}

module.exports = {
    signUp: signUp
}