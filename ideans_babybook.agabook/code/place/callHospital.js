module.exports.function = function callHospital (tel) {
  const console = require('console');
  console.log(tel);
  
  let result = '';
  if(tel != undefined){
    result = tel;
  }
  
  return result;
}
