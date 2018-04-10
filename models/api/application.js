module.exports = (sequelize, DataTypes) => {
    return sequelize.define("application", {
        status:DataTypes.INTEGER

    },{
        timestamps: false,
        freezeTableName: true,
    })
};