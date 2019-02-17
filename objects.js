var playlist = { artist: songTitle};

function updatePlaylist(playlist, artist, songTitle) {
  Object.assign({}, { artist: songTitle })
  return playlist
}