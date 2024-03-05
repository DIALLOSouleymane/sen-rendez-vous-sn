const express = require('express');
const mysql = require('mysql2');
 
// MySQL connection
const db =
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'senrvsndb',
    });
 
// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});


const router = express.Router();

router.get("/", async (req, res) => {
    const {name, fonction} = req.query;
    
    if (!name || !fonction){
        if (!name){
            if (!fonction){
                /*
                    Si aucun champ n'est renseigné, nous renvoyons l'ensemble des prestataires 
                    (sans aucun filtre) 
                */
                const query = 'SELECT * from Prestataires';

                db.query(query, (err, results) => {
                        if (err) {
                            console
                                .error("Erreur d'exécusion de la requete:", err);
                            return res.status(500)
                                .json(
                                    {
                                        error: 'Echec : Erreur de Serveur interne !'
                                    });
                        }
            
                        res.json(results);
                    });
            }
            else {
                /*
                    Si c'est seulement la fonction est qui est renseigné,
                    nous renvoyons la liste des prestataires répondant à ce profil ! 
                */
                const query = 'SELECT * from Prestataires WHERE fonction LIKE ? ';
                const searchValue = `%${fonction}%`
            
                db.query(query, searchValue,
                    (err, results) => {
                        if (err) {
                            console
                                .error("Erreur d'exécusion de la requete:", err);
                            return res.status(500)
                                .json(
                                    {
                                        error: 'Echec : Erreur de Serveur interne !'
                                    });
                        }
            
                        res.json(results);
                    });
            }
        }
        else {
            if (!fonction){
                /*
                    Si c'est seulement c'est le nom qui est renseigné, nous renvoyons la liste
                    des prestataires répondant à ce critère !
                */
                const query = 'SELECT * from Prestataires WHERE prenom LIKE ? OR nom LIKE ?';

                const searchValue = `%${name}%`
            
                db.query(query, [searchValue, searchValue],
                    (err, results) => {
                        if (err) {
                            console
                                .error("Erreur d'exécusion de la requete:", err);
                            return res.status(500)
                                .json(
                                    {
                                        error: 'Echec : Erreur de Serveur interne !'
                                    });
                        }
            
                        res.json(results);
                    });
            }
        }
    }
    else {
        // champs name & fonction renseignés
        const query = 
            `SELECT * FROM prestataires WHERE prenom LIKE ? OR nom LIKE ? OR fonction LIKE ? `;
        
        // Use '%' to perform a partial match
        const searchValues = 
            [
                `%${name}%`,
                `%${name}%`,
                `%${fonction}%`
            ]
     
        db.query(query, searchValues,
            (err, results) => {
                if (err) {
                    console
                        .error("Erreur d'exécusion de la requete:", err);
                    return res.status(500)
                        .json(
                            {
                                error: 'Echec : Erreur de Serveur interne !'
                            });
                }
     
                res.json(results);
            });
    }
 

});

module.exports = router;

