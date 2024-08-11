const display = document.getElementById("display")

function appendinputvalue(input) {
    display.value += input;
}


function calculate() {
    display.value= eval(display.value)
}


function clearscreen() {
    display.value = "";

}