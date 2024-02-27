# sen Rendez-vous SN Backend software
npm init
## Installations des différents packages de notre backend

1. npm install express
    express library/framework
2. npm install express cors mysql2
    cors : ce package nous permettra de faire la connexion entre le front et le backend de notre application ;
    mysql2 : nous utilisons mysql comme base de données ; facilite la connexion à la BD mysql et nous permet de nouvelles syntaxes correspondantes à la nouvelle version de JS.

## Then we can create our entry point for our server
1. index.js: we create this file in the backend folder ;


## Exécution du server
1. Pour lancer notre serveur, on tape : node index.js
2. Pour plus de flexibilité, nous installons le package node demon afin 
d'executer les nouvelles modifications du serveur automatiquement ;
* npm install nodemon

Ce package redémarrera notre server à chaque fois que nous effectuons des modifications sur ce dernier ;
* A présent pour lancer notre serveur nous tappons juste **npm start**. Mais avant cela nous ajoutons ceci : "start": "nodemon index.js"
dans la section script de package.json ;

## Installation de sequalize et sequelize-cli pour notre DB
* Cet outil nous permet facilement d'écrire du code SQL
* npm i -g sequelize sequelize-cli
* Pour initialiser l'outil : sequelize init





