const e = require('express');
const app = e();
const log = console.log;
const port = process.env.PORT;
const chalk = require("chalk");
const method = chalk.green;
const iplog = chalk.red;
const path = chalk.yellow

app.use((req, res, next) => {
    log(method(`${req.method}`) + `-` + path(`${req.path}`) + iplog(`${req.ip}`));
    next();
})
app.use(e.static(__dirname + '/static'))

app.listen(port, () => {
    log(`itstk.me at http://localhost:${port}`)
  })

  