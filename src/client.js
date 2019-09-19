const express = require('express');
const soap = require('soap');
const url = 'http://localhost:3030/subtraction?wsdl';
const args = { x: 420, y: 69 };
soap.createClient(url, function(err, client) {
  if (err) console.error(err);
  else {
    client.subtractionCalculator(args, function(err, response) {
      if (err) console.error(err);
      else {
        console.log(response);
      }
    });
  }
});

