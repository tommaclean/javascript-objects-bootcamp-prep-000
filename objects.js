var playlist = { artist: songTitle};

function updatePlaylist(playlist, artist, songTitle) {
  Object.assign({}, { artist: songTitle })
  playlist[artist] = songTitle
  return playlist
}