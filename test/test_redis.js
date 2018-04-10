const cache = require('../lib/cache')('redis');

async function test(){
    await cache.jsetex('name',1,{
        name:'xiaoming',
        sex:1
    });
    let a = await cache.jget('name');
    console.log(a);
    setTimeout(async function () {
        console.log('2s');
        let b = await cache.jget('name');
        console.log(b);
    },2000);
}

try{
    test().then((a)=>{
        console.log(a);
    });
}
catch (e) {
    console.log(e);
}