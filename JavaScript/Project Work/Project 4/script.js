let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let p = document.querySelector(".para");

function add() {
    p.innerHTML = Number(inp1.value) + Number(inp2.value)

}

function sub() {
    p.innerHTML = Number(inp1.value) - Number(inp2.value)

}

function mul() {
    p.innerHTML = Number(inp1.value) * Number(inp2.value)

}

function divi() {
    p.innerHTML = Number(inp1.value) / Number(inp2.value)

}