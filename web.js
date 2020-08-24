var port = Number(process.env.PORT || 8080);
const express = require('express')
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(port, '0.0.0.0', function () {
    console.log('Listening on port ' + port + '. Hit CTRL-C to stop the server.');
});