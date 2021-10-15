const express = require('express')
const app = express()

app.use(express.static('static'))

app.use((err, req, res, next) => {
    res.end('Problem');
    console.log(err);
});

require('./route/index.js')(app);

app.listen(3000, function () {
    console.log('Running on :3000');
});

