window.onload = function() {
    const audioPlayer = document.getElementById('audio-player');
    const progressBar = document.getElementById('progress-bar');
    const pointer = document.getElementById('pointer');
    const currentTimeEl = document.getElementById('current-time');
    const totalTimeEl = document.getElementById('total-time');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const playbar = document.getElementById('playbar');

    let isDragging = false;

    // Format time in mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = Math.floor(seconds % 60);
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    }

    // Update total time when metadata is loaded
    audioPlayer.addEventListener('loadedmetadata', function() {
        // Ensure the total duration is set after metadata is loaded
        totalTimeEl.textContent = formatTime(audioPlayer.duration);
    });

    // Update progress and current time
    audioPlayer.addEventListener('timeupdate', function() {
        if (!isDragging) {  // Only update when the user is not dragging
            const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            pointer.style.left = `${progressPercent}%`;
            currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
        }
    });

    // Play or pause the audio
    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Drag functionality for the pointer
    pointer.addEventListener('mousedown', function() {
        isDragging = true;
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);
    });

    function onDrag(e) {
        const playbarRect = playbar.getBoundingClientRect();
        let newLeft = e.clientX - playbarRect.left;
        newLeft = Math.max(0, Math.min(newLeft, playbarRect.width));
        const newProgress = newLeft / playbarRect.width;
        pointer.style.left = `${newProgress * 100}%`;
        progressBar.style.width = `${newProgress * 100}%`;
        audioPlayer.currentTime = newProgress * audioPlayer.duration;
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
    }

    // Click on the playbar to seek
    playbar.addEventListener('click', function(e) {
        const playbarRect = playbar.getBoundingClientRect();
        const clickPosition = e.clientX - playbarRect.left;
        const clickPercentage = clickPosition / playbarRect.width;
        audioPlayer.currentTime = clickPercentage * audioPlayer.duration;
    });

    // Volume control
    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = volumeSlider.value;
    });

    volumeBtn.addEventListener('click', function() {
        if (audioPlayer.muted) {
            audioPlayer.muted = false;
            volumeBtn.textContent = '🔊';
        } else {
            audioPlayer.muted = true;
            volumeBtn.textContent = '🔇';
        }
    });
};
