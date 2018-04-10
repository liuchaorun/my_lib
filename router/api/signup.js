module.exports = (router)=>{
    router.get('/signup',async(ctx,next)=>{
        ctx.body = 'signup' + ctx.state.user;
        await next();
    })
};