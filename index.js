const Koa = require('koa');
const session = require("koa-session2");
const static_server = require('koa-static');
const bodyParser = require('koa-bodyparser');

const Store = require("./lib/store.js");
const route = require('./router/router');

const app = new Koa();

app.keys = ['im a newer secret', 'i like turtle'];

app.use(static_server(__dirname));
app.use(bodyParser());
app.use(session({
    store: new Store()
}));
app.use(async (ctx, next) => {
    if(ctx.cookies.get('123',{signed:true})){
        ctx.state.cookie = true;
        ctx.cookies.set('123','1234567891011',{
            maxAge:0
        });
    }
    else{
        ctx.cookies.set('123','12345678910',{
            maxAge:1000*60*60,
            signed:true
        });
    }
    await next();
});

app.use(route());

module.exports = app;