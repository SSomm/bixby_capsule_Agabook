module.exports.function = function getDetailInfo (vacDescription, vacName, vacVirusName) {
  var result = []

  var console = require("console")
  temp = {
    vacDescription : vacDescription,
    vacName : vacName,
    vacVirusName : vacVirusName
  }

  result.push(temp)

  console.log(result)
  
  return result
}
