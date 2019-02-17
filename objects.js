var playlist = {};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, { artistName: songTitle })
  playlist[artistName] = songTitle
  return playlist
}