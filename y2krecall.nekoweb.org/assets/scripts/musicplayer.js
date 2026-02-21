var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});

var audio = document.getElementById("track");
 function setVolume() {
   audio.volume = 0.2;
}
setVolume();

// Create an AudioContext
let audioContext = null;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Resume audio context on user interaction
        document.addEventListener('click', function resumeAudio() {
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            document.removeEventListener('click', resumeAudio);
            
            // Start playing after first interaction
            setTimeout(() => {
                playPause();
            }, 100);
        }, { once: true });
    }
}

// Call initAudio on load
window.addEventListener('load', initAudio);