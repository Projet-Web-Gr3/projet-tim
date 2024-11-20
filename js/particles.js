// particles.js

// Ensure particlesJS is defined before using it
if (typeof particlesJS !== 'undefined') {
    particlesJS.load('particles-js', './particles.json', function () {
        console.log('particles.js loaded - callback');

        /* ---- stats.js config ---- */

        var count_particles, stats, update;
        stats = new Stats;
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
        count_particles = document.querySelector('.js-count-particles');

        update = function () {
            stats.begin();
            stats.end();
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS && window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
    });
} else {
    console.error('particlesJS is not defined');
}