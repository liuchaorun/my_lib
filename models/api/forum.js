module.exports = (sequelize, DataTypes) => {
    return sequelize.define("forum", {
        id:{
            type:DataTypes.INTEGER,
            unique:true,
            primaryKey:true,
            autoIncrement:true
        },
        content:DataTypes.STRING(255)
    },{
        timestamps: true,
        version:true,
        freezeTableName: true,
        associate:function (models) {
            models.forum.hasMany(models.comment,{
                as:'comment',
                foreignKey:'forum_id'
            });
        }
    })
};