const e = require('express');
const app = e();
const log = console.log;

app.use((req, res, next) => {
    log(`GET ${req.method} - ${req.path}`);
    next();
})
app.use(express.static(__dirname + '/public_html'))

app.listen(3072, () => {
    log('website is online!');
})