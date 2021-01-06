const express = require('express');
const app = express();

app.get('/', function (req, res) {
    console.log(req.query.fname)
    console.log(req.query.lname)
  res.send('Hello World!');
});

const port = 3000 ;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});

//these are the changes