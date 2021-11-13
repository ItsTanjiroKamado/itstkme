const e = require('express');
const app = e();
const log = console.log;
const port = process.env.PORT;

app.use((req, res, next) => {
    log(`${req.method} - ${req.path}`);
    next();
})
app.use(e.static(__dirname + '/static'))

app.listen(port, () => {
    log(`Listening to PORT 3000 \n Powered by https://railway.app/ \n Hosting: \n https://itstkme-production.up.railway.app/ \n https://itstk.me \n The web is up and working af! \n Source code at https://itstk.me/github/web `)
  })
