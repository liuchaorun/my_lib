const Router = require('koa-router');
const lib = require('../lib/lib');

router = new Router({
    prefix: '/user'
});

router.use(async (ctx, next) => {
    ctx.state.user = 0;
    await next();
});

router.get('/login', async (ctx, next) => {
    console.log(ctx.state.user++);
    console.log(ctx.state.cookie);
    await next();
});

lib.autoImport(__dirname + '/api', (tmpPath) => {
    require(tmpPath)(router);
});

const routes = router.routes();

module.exports = function a() {
    return routes;
};