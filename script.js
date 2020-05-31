let value1 = document.getElementById('value-1')
let value2 = document.getElementById('value-2')
let value3 = document.getElementById('value-3')
let idspeed = document.getElementById('idspeed')

let values = [
    '😁', '😃', '😎', '😇', '😅', '😠', '😨', '😕'
]

function randomvalues() {
    return values[Math.floor(Math.random() * 8)]
}

setInterval(() => {
    value1.innerText = randomvalues()
    value2.innerText = randomvalues()
    value3.innerText = randomvalues()

}, 200)

idspeed.onchange = function (ev) {
    console.log("value changes to " + ev.target.value)
    // document.documentElement => this si root of css
    document.documentElement.style.setProperty('--speed', ev.target.value)
}