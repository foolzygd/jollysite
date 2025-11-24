const button = document.getElementById("jollybutton")
const result = document.getElementById("result")

result.innerHTML = "Click the button below to measure your jollyness"

function measureJollyness() {
    let rNum = Math.floor(Math.random() * 101)
    result.innerHTML = `You are ${rNum}% Jolly`

    if (rNum !== 100) {
        result.style = "color:red;"
    } else {
        result.style = "color:yellow;"
    }
}