function verify() {
    console.log('x','y','z')
    let x = parseInt(elementX.value);
    let y = parseInt(elementY.value);
    let z = parseInt(elementZ.value);
    console.log(x,y,z)
    
    if ((x + y) > z && (x + z) > y && (z + y) > x) {
        if ((x**2 + y**2 == z**2) || (x**2 + z**2 == y**2) || (z**2 + y**2 == x**2)){
            result = "Треугольник существует и является прямоугольным."
        }
        else {
            result = "Треугольник существует, но не является прямоугольным."
        }
        check = true
    }

    else {
        result = 'Такого треугольника не существует.'
        check = false;
    }
    document.getElementById('result').value=result;
}

function send() {
    if (check) {
        document.getElementById('UserEnter').submit();
    }
    else {
        alert('Есть недостатки. Повторите ввод.')
    }
}

let result;
let check;

const elementX = document.getElementById('x');
const elementY = document.getElementById('y');
const elementZ = document.getElementById('z');

const elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById('send');
elementSend.addEventListener('click', send)