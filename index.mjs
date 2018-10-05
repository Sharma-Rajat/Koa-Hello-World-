import Koa from "koa";
import log from "signale";
import Router from "koa-router";

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 8080;

router.get('/', (ctx, next) => {
    ctx.body = 'Hello world!';
});

app.use(router.routes())
    .use(router.allowedMethods());


app.listen(PORT, err => {
    log.success(`Successfully started on port ${PORT}!`);
});