module.exports.function = function searchVaccine (age, vaccineKeyword, searchKeyword) {
  const fail = require('fail');
  const console = require('console');

  let vac_data = require('./data/Vaccine_Data.js')

  if (!age) {
    throw fail.checkedError("No Result", "NoResult");  
  }


  let result = [];

  vac_data.forEach(function(element){
    if (element.age == age) {
      // result.push(element);
      // temp = {
      //   age : element.age,
      //   vacName : element.vacName,
      //   vacVirusName : element.vacVirusName,
      //   vacDescription : element.vacDescription
      // }
      result.push(element)
    }
  });

  console.log(result)


  
  return result;
}
