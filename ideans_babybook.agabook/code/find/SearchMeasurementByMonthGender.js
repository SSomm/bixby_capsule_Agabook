module.exports.function = function searchMeasurementByMonthGender (age, gender, measurementKeyword, searchKeyword) {

  // const measureMentData = require('./data/Measurement_Data.js')

  const fail = require('fail');
  const console = require('console');

  let vac_data = require('./data/Measurement_Data.js')

  if (!age && !gender) {
    throw fail.checkedError("No Result", "NoResult");  
  }

  console.log(age)
  console.log(measurementKeyword)

  let result = [];

  vac_data.forEach(function(element){
    if (element.age == age && element.gender == gender) {
      if (measurementKeyword.trim() == "발육표준") {
        result.push(element);
      } else if (measurementKeyword.trim() == "키") {
        temp = {
          height: element.height,
          age: element.age,
          gender: element.gender,
          url:element.url,
          label: measurementKeyword
        }

        result.push(temp)

        // result.push(element.height)
        // result.push(element.age)
        // result.push(element.gender)
        // result.push(element.url)
      } else if (measurementKeyword.trim() == "체중") {
        temp = {
          weight: element.weight,
          age: element.age,
          gender: element.gender,
          url:element.url,
          label: measurementKeyword
        }

        result.push(temp)
      } else if (measurementKeyword.trim() == "머리둘레") {
        temp = {
          headSize: element.headSize,
          age: element.age,
          gender: element.gender,
          url:element.url,
          label: measurementKeyword
        }

        result.push(temp)

      }
      // result.push(element);
    }
  });

  
  return result;

  // return {
  //   vacAge: result.month,
  //   gender: result.gender,
  //   headsize: result.headsize,
  //   weight: result.weight,
  //   height: result.height,
  //   url: result.url
  // }
}
