let element = document.getElementById('music');
let audio = new Audio('assets/audio/dancing.mp3');

document.getElementById('why').onclick = function () {
    document.getElementById('answer').style.display = 'block';
    document.getElementById('why').style.display = 'none';
}

element.onmouseover = function (event) {
    audio.play();
};

element.onmouseout = function (event) {
    audio.pause();
    audio.currentTime = 0;
};