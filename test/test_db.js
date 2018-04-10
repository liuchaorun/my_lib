const db = require('../models/index');
const user = db.models.user;

async function test(){
    // let user1 = await user.create({
    //     username:'test_1',
    //     password:'123456'
    // });
    // let user2 = await user.create({
    //     username:'test_2',
    //     password:'456789'
    // });
    // await user1.addSender(user2);
    let user1 = await user.findOne({where:{username:'test_3'}});
    await user1.update({
        username: 'test_1'
    });
    // let s = await user1.getSender();
    // console.log(s[0].password);
}

test();