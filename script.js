let value1 = document.getElementById('value-1')
let value2 = document.getElementById('value-2')
let value3 = document.getElementById('value-3')
// let idspeed = document.getElementById('idspeed')
// let Stop_bttn = document.getElementById('stop-bttn')
// let Start_bttn = document.getElementById('start-bttn')
let Spin_bttn = document.getElementById('spin-bttn')
let result_bttn = document.getElementById('result')

let values = [
    '😁', '😃', '😎', '😇', '😅', '😠', '😨',
    '😎', '😁', '😁', '😇', '😁', '😁', '😁',
    '😎', '😁', '🍻', '😇', '😁', '😁', '😁',
    '🍻', '🍻', '😁', '😇', '😁', '😁', '😁',
    '✌', '😂', '😝', '😁', '😱', '🍻', '🍻',
    '😡', '👿', '😍', '😉', '😓', '😳', '💩',
    '🍻', '😘', '😜', '😵', '🚽', '🍻', '🍻',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '💩', '💩', '💩', '💩', '💩', '💩', '💩',
    '🚽', '🚽', '🚽', '🚽', '🚽', '🚽', '🚽',
    '🚽', '🚽', '🚽', '🚽', '🚽', '🚽', '🚽',
    '🚽', '🚽', '🚽', '🚽', '🚽', '🚽', '🚽',

]

function randomvalues() {
    return values[Math.floor(Math.random() * 91)]
}

let animateid;

function updateanimation(newspeed) {
    if (animateid) clearInterval(animateid)

    animateid = setInterval(() => {
        value1.innerText = randomvalues()
        value2.innerText = randomvalues()
        value3.innerText = randomvalues()

    }, 1000 / newspeed)
}

// idspeed.onchange = function (ev) {
//     // document.documentElement => this is root of css
//     document.documentElement.style.setProperty('--speed', ev.target.value)
//     updateanimation(ev.target.value)
// }

// Start_bttn.onclick = function () {
//     document.documentElement.style.setProperty('--speed', 5)
//     updateanimation(5)
//     result_bttn.innerText = "Result"
// }

// Stop_bttn.onclick = function () {
function stop() {
    document.documentElement.style.setProperty('--speed', 0)
    clearInterval(animateid) //face change stop
    if (value1.innerText == value2.innerText && value1.innerText == value3.innerText) {
        result_bttn.innerText = "U WIN"
    } else {
        result_bttn.innerText = "U LOST"
    }
}

var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}

// var y = document.getElementById("myAudio2");

function playAudio2() {
    y.play();
}

function pauseAudio() {
    y.pause();
}




// Spin_bttn.onmouseover = function () { playAudio2() };

Spin_bttn.onclick = function () {
    playAudio()
    // result_bttn.innerText = "Result"
    document.documentElement.style.setProperty('--speed', 10)
    updateanimation(5)
    setTimeout(() => {
        document.documentElement.style.setProperty('--speed', 7)
    }, 500)
    setTimeout(() => {
        document.documentElement.style.setProperty('--speed', 4)
    }, 1000)
    setTimeout(() => {
        document.documentElement.style.setProperty('--speed', 2.5)
    }, 1500)
    setTimeout(() => {
        document.documentElement.style.setProperty('--speed', 1.2)
    }, 2500)
    setTimeout(() => {
        stop()
    }, 4500)
    // pauseAudio()
}





