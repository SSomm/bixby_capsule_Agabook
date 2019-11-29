module.exports.function = function playMeow (meowToPlay) {

  // var albumName = []
  // var artist = []
  // var title = []
  // var imgUrl = []

  // for (var i= 0; i < meowToPlay.audioItem.length; i++ ) {
  //   albumName.push(meowToPlay.audioItem[i].albumName)
  //   artist.push(meowToPlay.audioItem[i].albumName)
  //   title.push(meowToPlay.audioItem[i].albumName)
  //   imgUrl.push(meowToPlay.audioItem[i].albumName)
  // } 



  var result ={
    albumName : meowToPlay.audioItem[0].albumName,
    artist : meowToPlay.audioItem[0].artist,
    title : meowToPlay.audioItem[0].title,
    imgUrl : meowToPlay.audioItem[0].albumArtUrl
  }

  // var result = {
  //   albumName : albumName,
  //   artist : artist,
  //   title : title,
  //   imgUrl : imgUrl
  // }
  return result;
}