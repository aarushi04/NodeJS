const fs = require('fs');
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express();
app
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use(express.static(__dirname + '/public'));
// Router: promoRouter
    app.use('/promotions', promoRouter);
// Router: leaderRouter 
    app.use('/leaders', leaderRouter);

const hostname = 'localhost',
      port = 3000,

      server = http.createServer(app)
          .listen(port, hostname, () => {
            console.log(`Express Server ${hostname} listening on port ${port}`);
          });

const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter);

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Reached the dishes API');
});        







