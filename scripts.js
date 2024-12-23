// script.js
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const rewindBtn = document.getElementById('rewindBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const fullScreenBtn = document.getElementById('fullScreenBtn');
    const seekBar = document.getElementById('seekBar');
    const volumeBar = document.getElementById('volumeBar');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    let zoomLevel = 1;

    playPauseBtn.addEventListener('click', function() {
        if (videoPlayer.paused) {
            videoPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            videoPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    stopBtn.addEventListener('click', function() {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });

    rewindBtn.addEventListener('click', function() {
        videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 10);
    });

    forwardBtn.addEventListener('click', function() {
        videoPlayer.currentTime = Math.min(videoPlayer.duration, videoPlayer.currentTime + 10);
    });

    fullScreenBtn.addEventListener('click', function() {
        if (videoPlayer.requestFullscreen) {
            videoPlayer.requestFullscreen();
        } else if (videoPlayer.mozRequestFullScreen) { // Firefox
            videoPlayer.mozRequestFullScreen();
        } else if (videoPlayer.webkitRequestFullscreen) { // Chrome, Safari and Opera
            videoPlayer.webkitRequestFullscreen();
        } else if (videoPlayer.msRequestFullscreen) { // IE/Edge
            videoPlayer.msRequestFullscreen();
        }
    });

    videoPlayer.addEventListener('timeupdate', function() {
        const value = (100 / videoPlayer.duration) * videoPlayer.currentTime;
        seekBar.value = value;
    });

    seekBar.addEventListener('input', function() {
        const time = (videoPlayer.duration / 100) * seekBar.value;
        videoPlayer.currentTime = time;
    });

    volumeBar.addEventListener('input', function() {
        videoPlayer.volume = volumeBar.value / 100;
    });

    zoomInBtn.addEventListener('click', function() {
        zoomLevel += 0.1;
        videoPlayer.style.transform = `scale(${zoomLevel})`;
    });

    zoomOutBtn.addEventListener('click', function() {
        zoomLevel = Math.max(1, zoomLevel - 0.1);
        videoPlayer.style.transform = `scale(${zoomLevel})`;
    });
});
