document.addEventListener('DOMContentLoaded', function () {
    var musicStarted = false;

    // Typewriter effect
    var app = document.getElementById('typing');
    var typingText = app.dataset.typingText || 'Default typing text'; // Use the data attribute or provide a default text
    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter
        .typeString(typingText)
        .pauseFor(2500)
        .deleteAll()
        .typeString('Soon...')
        .pauseFor(2500)
        .start();

    // Add background music on user interaction
    document.addEventListener('click', function () {
        if (!musicStarted) {
            var audio = new Audio('images/music/mobile.mp3');
            audio.loop = true;
            audio.volume = 0.5; // Adjust the volume as needed
            audio.play();
            musicStarted = true;
        }
    });
});
