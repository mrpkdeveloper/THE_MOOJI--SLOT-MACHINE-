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
    '😕', '😁', '😁', '😁', '😁', '😁', '😁',
    '😕', '😁', '😁', '😁', '😁', '😁', '😁',
    '😕', '😁', '😁', '😁', '😁', '😁', '😁',
]

function randomvalues() {
    return values[Math.floor(Math.random() * 14)]
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


Spin_bttn.onclick = function () {
    result_bttn.innerText = "Result"
    document.documentElement.style.setProperty('--speed', 5)
    updateanimation(5)
    setTimeout(() => {
        stop()
    }, 1200)
}