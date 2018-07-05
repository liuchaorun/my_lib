const db = require('../models/index');
const sequelize = require('sequelize');

async function test(){
    // await db.drop();
    // await db.sync();
    // for (let i = 1;i <= 3;i++){
    //     let f = await db.models.forum.create({content:i.toString()});
    //     for (let j = 0;j< i;j++){
    //         f.createComment({content:j.toString()});
    //     }
    // }
    // let r = await db.models.forum.findById(1);
    // await r.createComment({content:'new'});
    // let f = await db.models.forum.findAll({
    //     //order: [[db.models.comment,"createdAt", "DESC"],["createdAt","DESC"]],
    //     limit:5,
    //     offset:0,
    //     order: [
    //         [db.models.comment,'createdAt','DESC'],
    //         //[sequelize.fn('coalesce',sequelize.col('comment.createdAt'),sequelize.col('forum.createdAt')), "DESC"],
    //         ["createdAt","DESC"]],
    //         include: [{
    //         model: db.models.comment,
    //         as:'comment'
    //     }]
    // });
    // console.log(JSON.stringify(f));
    // for (let i of f){
    //     console.log(i.id);
    // }
    let c = await db.models.comment.findById(2);
    await db.models.comment.update({content:'test',updatedAt:c.updatedAt},{
        where:{
            id:c.id
        }
    })
}

test();
