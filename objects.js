var playlist = {};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, { artistName: `songTitle` })
  playlist[artistName] = `songTitle`;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  playlist
}