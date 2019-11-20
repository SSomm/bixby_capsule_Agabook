module.exports.function = function playMeow (songKinds) {
  result = "기본값"

  if (songKinds =="뽀로로") {
    result = "뽀로로"
  }
  else if (songKinds == "자장가") {
    result = "자장가"
  } 
  else if (songKinds =="동요") {
    result = "동요"
  }


  return result;
}
