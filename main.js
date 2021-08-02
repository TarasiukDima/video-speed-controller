document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    musicPlayer();

    // page music player
    function musicPlayer() {
        const video = document.querySelector('.flex');
        const speedController = document.querySelector('.speed');
        const speedBar = speedController.querySelector('.speed-bar');
        const heightController = speedController.offsetHeight;
        const startX = speedController.offsetTop;

        let percent = 38;
        let playbackRate = 1;

        speedController.addEventListener('mousemove', (e) => {
            let heightVal = (e.clientY - startX) / heightController;
            percent = Math.round(heightVal * 100);
            playbackRate = Math.round((heightVal * (2.5 - 0.25) + 0.25) / 0.25) * 0.25;

            drawchanges(speedBar, video, percent, playbackRate);
        })

        document.addEventListener('keydown', (e) => {
            if (!e.key === '>' || !e.key === '<') return;

            if (e.key === '>') {
                percent += 11.1;
                playbackRate += 0.25;
            } else if (e.key === '<') {
                percent -=11.1;
                playbackRate -= 0.25;
            }

            if (percent > 100) percent = 100;
            if (playbackRate > 2.5) playbackRate = 2.5;
            if (percent < 0) percent = 0;
            if (playbackRate < 0.25) playbackRate = 0.25;

            drawchanges(speedBar, video, percent, playbackRate);
        })
    }

    // draw changes on page
    function drawchanges(speedBar, video, percent, playbackRate) {
        speedBar.style.height = percent + '%';
        speedBar.textContent = playbackRate + 'x';
        video.playbackRate = playbackRate;
    }
});