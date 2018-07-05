module.exports = (sequelize, DataTypes) => {
    return sequelize.define("comment", {
        content:DataTypes.STRING(255),
    },{
        timestamps: true,
        freezeTableName: true,
        associate:function (models) {
            models.comment.belongsTo(models.forum,{
                foreignKey:'forum_id'
            })
        }
    })
};