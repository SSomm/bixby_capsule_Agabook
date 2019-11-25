
// 상세페이지에서 사용할 

var console = require('console');
var http = require('http');

module.exports.function = function getDetailLink (hospAddress, hospName, hospPhone) {

  var hosp_url = 'https://map.naver.com/v5/search/' + hospAddress + " " + hospName;
  console.log(hosp_url)
  
  return {
    hospDetailLink: hosp_url,
    hospitalPhone : hospPhone
  };
}
