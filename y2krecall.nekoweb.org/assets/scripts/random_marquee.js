const yucks = [
    "This ain't your granny's website - y2krecall.nekoweb.org",
    "Load it up and rip the mouse out - stay online",
    "You've got mail. (email.)",
    "Now serving 56k realness",
    "Warning: May contain traces of swag"
];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomText() {
    const random_number = getRandomIntInclusive(0, 4);
    document.getElementById('scrolling-text').textContent = yucks[random_number];
}

document.addEventListener('DOMContentLoaded', function() {
    randomText();
});