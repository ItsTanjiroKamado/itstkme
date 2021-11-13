const e = require('express');
const app = e();
const log = console.log;
const port = process.env.PORT;

app.use((req, res, next) => {
    log(`${req.method} - ${req.path} - ${req.ip}`);
    next();
})
app.use(e.static(__dirname + '/static'))

app.listen(port, () => {
    log(`itstk.me at http://localhost:${port}`)
  })

  