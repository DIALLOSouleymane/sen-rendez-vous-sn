// Creation de notre module exportable sous forme de fonction
module.exports = (sequelize, DataTypes) => {

    // definition de notre table Service
    const Service = sequelize.define("Service", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },            
    });

    return Service;

}