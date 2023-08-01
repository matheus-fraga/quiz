const audioPlayer = document.getElementById("audioPlayer");
const iconPlayer = document.getElementById("iconPlayer");
const volumeSlider = document.getElementById("volumeSlider");

// Função para iniciar ou parar a música e trocar o ícone
export function toggleMusic() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        iconPlayer.innerText = 'volume_up';
        volumeSlider.style.display = 'block'; // Mostra o slider quando a música inicia
    } else {
        audioPlayer.pause();
        iconPlayer.innerText = 'volume_off';
        volumeSlider.style.display = 'none'; // Esconde o slider quando a música é pausada
    }
}

// Event listener para o controle deslizante de volume
volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value; // Atualiza o volume do áudio conforme o usuário move o controle deslizante
});

// Esconder o slider no carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    volumeSlider.style.display = 'none';
});