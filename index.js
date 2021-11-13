const e = require('express');
const app = e();
const log = console.log;
const port = process.env.PORT;
const morgan = require("morgan");
const chalk = require("chalk");

app.use(e.static(__dirname + '/static'))

app.listen(port, () => {
    log(`itstk.me at http://localhost:${port}`)
  })

const morganMiddleware = morgan(function(tokens, req, res) {
    if (!blocked.includes(req.headers['x-forwarded-for'])) return [
      chalk.hex('#34ace0').bold(tokens.method(req, res)),
      chalk.hex('#ffb142').bold(tokens.status(req, res) || 200),
      chalk.hex('#ff5252').bold(tokens.url(req, res)),
      chalk.hex('#2ed573').bold((tokens['response-time'](req, res) || 0) + ' ms'),
      chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
    ].join(' ');
  });

app.use(morganMiddleware);