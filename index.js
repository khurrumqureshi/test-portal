const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 5000;


//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api', require('./api'));

app.listen(port, () => {
    console.log(`Running server on ${port}`);
});

// app.use((err, req, res,next) => {
//     res.status(err.output.payload.statusCode).send(err.message);
// });
