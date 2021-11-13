const e = require('express');
const app = e();
const log = console.log;
const port = process.env.PORT;

app.use((req, res, next) => {
    log(`GET ${req.method} - ${req.path}`);
    next();
})
app.use(e.static(__dirname + '/public_html'))

app.listen(port, () => {
    log(`itstk.me at http://localhost:${port}`)
  })