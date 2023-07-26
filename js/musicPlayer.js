export function toggleMusic() {
    const audioPlayer = document.getElementById("audioPlayer");
    const iconPlayer = document.getElementById("iconPlayer");

    if (audioPlayer.paused) {
        audioPlayer.play();
        iconPlayer.innerText = 'volume_up';
    } else {
        audioPlayer.pause();
        iconPlayer.innerText = 'volume_off';
    }
}

export function initMusicPlayer() {
    const playPauseButton = document.getElementById("playPauseButton");
    playPauseButton.addEventListener("click", toggleMusic);
}