var meowAudio = require('./meowAudio.js')
var console = require('console')

module.exports.function = function findMeow(songKinds) {
    const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
    let meowAudioFound = []

    if (songKinds) {
        songKinds = songKinds.toLowerCase()
        meowAudioFound = meowAudio.audioItems.filter(function (audioItem) {
            return keysToSearchOn.some(function (key) {
                return audioItem[key] && audioItem[key].toLowerCase().includes(songKinds)
            })
        })
    } else {
        meowAudioFound = meowAudio.audioItems
        console.log(meowAudioFound)
    }
    console.log(meowAudioFound)
    return meowAudioFound
}