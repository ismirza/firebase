const Koa = require('koa');
const app = new Koa();
app.use(async ctx => ctx.body = 'Lets go Pens');

app.listen(3000, () => console.log('serve is runnin'))
