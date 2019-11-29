
var console = require('console');
var http = require('http');

module.exports.function = function getDetailLink 
(hospName, hospAddress, hospPhone, urlLink, x, y) {
  console.log(hospName);
  return {
    hospDetailLink: urlLink,
    hospPhone : hospPhone,
    hospName : hospName,
    hospitalAddress : hospAddress,
    xcoordinate : x,
    ycoordinate : y
  };
}
