const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello Express')
});

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});