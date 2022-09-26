console.log('kalai')

document.body.innerHTML = `<h1>Calculator</h1>
<div class="grid-container">
        <input id="inp" type="text" placeholder="0" value=''>
        <button class="one" onclick="input(1)">1</button>
        <button class="two" onclick="input(2)">2</button>
        <button class="three" onclick="input(3)">3</button>
        <button class="four" onclick="input(4)">4</button>
        <button class="five" onclick="input(5)">5</button>
        <button class="six" onclick="input(6)">6</button>
        <button class="seven" onclick="input(7)">7</button>
        <button class="eight" onclick="input(8)">8</button>
        <button class="nine" onclick="input(9)">9</button>
        <button class="zeroo" onclick="zeroo()">0</button>
        <button class="mod" onclick="mod()">%</button>
        <button class="clear" onclick="clearr('')">C</button>
        <button class="back" onclick="back()">⌫</button>
        <button class="dott" onclick="dott('.')">.</button>
        <button class="mul" onclick="mul('*')">X</button>
        <button class="divide" onclick="divide('/')">/</button>
        <button class="minus" onclick="minus('-')">-</button>
        <button class="plus" onclick="plus('+')">+</button>
        <button class="equal" onclick="equal('+')">=</button>
    </div>
    <div id="memory"></div>`

document.getElementById("inp").onkeypress = function(n) {
    let inp = isNaN(n.key)
    if (inp == true) {
        alert('Type a Number');
    } else {
        document.getElementById('memory').innerText += n.key;
    }
};

function input(i) {
    let data = document.getElementById('inp').value += i;
    document.getElementById('memory').innerText = data;
}

function zeroo() {
    let indzeroo = document.getElementById('memory').innerText;
    if (indzeroo <= 0) {
        let data = document.getElementById('inp').value = '';
        document.getElementById('memory').innerText = data;
    } else {
        let data = document.getElementById('inp').value += 0;
        document.getElementById('memory').innerText = data;
    }
}

function mod() {
    let data = document.getElementById('inp').value += '%';
    document.getElementById('memory').innerText = data;
}

function clearr() {
    let data = document.getElementById('inp').value = '';
    document.getElementById('memory').innerText = data;
}

function back() {
    let memory = document.getElementById('memory').innerText;
    let back = memory.slice(0, memory.length - 1);
    let reBack = document.getElementById('memory').innerText = back;
    document.getElementById('inp').value = reBack;

}

function dott() {
    let data = document.getElementById('inp').value += '.';
    document.getElementById('memory').innerText = data;
}

function mul() {
    let data = document.getElementById('inp').value += `*`;
    document.getElementById('memory').innerText = data;
}

function divide() {
    let data = document.getElementById('inp').value += `/`;
    document.getElementById('memory').innerText = data;
}

function minus() {
    let data = document.getElementById('inp').value += `-`;
    document.getElementById('memory').innerText = data;
}

function plus() {
    let data = document.getElementById('inp').value += `+`;
    document.getElementById('memory').innerText = data;
}

function equal() {

    let validation = new Promise((resolve, reject) => {
        let equalData = document.getElementById('memory').innerText;
        let data = document.getElementById('inp').value = eval(equalData);
        document.getElementById('memory').innerText = data;
    })

    validation
        .then((n) => { console.log(document.getElementById('memory').innerText = data); })
        .catch((err) => alert("Please Enter valid Number"))


}

//double zeero
// let indzero = document.getElementById('memory').innerText;
// console.log(indzero);
// if (indzero <= 0) {
//     let data = document.getElementById('inp').value = '';
//     console.log(document.getElementById('memory').innerText = data);
// } else {
//     document.getElementById('inp').value += 0;
//     let data = document.getElementById('inp').value += 0;
//     console.log(document.getElementById('memory').innerText = data);
// }