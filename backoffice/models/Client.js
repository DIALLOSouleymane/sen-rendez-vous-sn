// Creation de notre module exportable sous forme de fonction
module.exports = (sequelize, DataTypes) => {

    // definition de notre table Client
    const Client = sequelize.define("Client", {
        id_personne: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    return Client;

}