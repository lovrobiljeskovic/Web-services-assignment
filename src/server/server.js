const soap = require('soap');
const express = require('express');
const app = express();

app.get('/api/v1/addition', (req, res) => {
  res.status(200).send({
    result: parseInt(req.query.x) + parseInt(req.query.y)
  })
});

const service = {
  Subtraction_Service: {
    Subtraction_Port: {
      subtractionCalculator(args) {
        const n = args.x - args.y;
        console.log(n);
        return { result: n };
      }
    }
  }
};
// xml data is extracted from wsdl file created
const xml = require('fs').readFileSync('./subtractioncalculator.wsdl', 'utf8');
//create an express server and pass it to a soap server
const server = app.listen(3030, function() {
  const host = '127.0.0.1';
  const port = server.address().port;
});
soap.listen(server, '/subtraction', service, xml);