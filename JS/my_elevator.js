window.onload = function() {
    const elevator = new Elevator({
        element: document.querySelector('.elevator-button'),
        targetElement: document.querySelector('#elevator-target'),
        mainAudio: '../music/anya.m4a',
        duration: 10000
    });
}