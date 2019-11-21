var meowAudio = require('./meowAudio.js')

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
    }
    return meowAudioFound
}