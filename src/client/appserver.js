const express = require('express');
const app = express();
const soap = require('soap');

const url = 'http://localhost:3030/subtraction?wsdl';

app.get('/', (req, res) => {
    soap.createClient(url, function(err, client) {
        if (err) console.error(err);
        else {
          client.subtractionCalculator({x: parseInt(req.query.x), y: parseInt(req.query.y)}, function(err, response) {
            if (err) console.error(err);
            else {
                res.status(200).send({
                    response
                  })
            }
          });
        }
      });
  });

const server = app.listen(5000, function() {
    const host = '127.0.0.1';
    const port = server.address().port;
  });