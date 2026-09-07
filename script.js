const music = document.getElementById('music');
const musicBtn = document.getElementById('musicBtn');
const playBtn = document.getElementById('playPause');
const muteBtn = document.getElementById('muteBtn');

function updateUI() {
  const playing = !music.paused;
  musicBtn.innerHTML = playing ? '♫ <span>Pause</span>' : '♫ <span>Play</span>';
  if (playBtn) playBtn.textContent = playing ? '❚❚' : '▶';
  if (muteBtn) muteBtn.textContent = music.muted ? '🔇' : '🔊';
}

async function togglePlay() {
  try {
    if (music.paused) await music.play();
    else music.pause();
    updateUI();
  } catch (e) {
    console.log('Audio playback needs a user click.', e);
  }
}

musicBtn?.addEventListener('click', togglePlay);
playBtn?.addEventListener('click', togglePlay);
muteBtn?.addEventListener('click', () => { music.muted = !music.muted; updateUI(); });
music?.addEventListener('play', updateUI);
music?.addEventListener('pause', updateUI);
music?.addEventListener('ended', () => { music.currentTime = 0; updateUI(); });
updateUI();
