const express = require('express'),
      bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter
    .use(bodyParser.json())
    .route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotions your way!');
    })
    .post((req, res, next) => {
        res.end(`Will add the promotion `+ req.body.promotion + ` with promo id ` + req.body.promoid);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('Will delete all promotions');
    });


promoRouter
    .route('/:promoid')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end(`Will get the promotion related to:` + req.params.promoid);
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promoid');
    })

    .put((req, res, next) => {
        res.end(`Will update the promotion for promoid: ` + req.params.promoid);
    })

    .delete((req, res, next) => {
        res.end(`Will delete the promotion for promoid: ` + req.params.promoid);
    });

module.exports = promoRouter;
