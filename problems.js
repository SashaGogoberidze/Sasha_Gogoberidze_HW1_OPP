function countt() {
    console.log('x','y','z')
    let x = parseInt(elementX.innerText);
    let y = parseInt(elementY.innerText);
    let z = parseInt(elementZ.innerText);
    console.log(x,y,z)
    
    if ((x + y) > z && (x + z) > y && (z + y) > x) {
        if ((x**2 + y**2 == z**2) || (x**2 + z**2 == y**2) || (z**2 + y**2 == x**2)){
            result = "Треугольник существует и является прямоугольным."
            document.getElementById('result').innerText = result;
        }
        else {
            result = "Треугольник существует, но не является прямоугольным."
            document.getElementById('result').innerText = result;
        }
    }

    else {
        result = 'Такого треугольника не существует.'
        document.getElementById('result').innerText = result;
    }

}





const elementX = document.getElementById('x');
const elementY = document.getElementById('y');
const elementZ = document.getElementById('z');

const elementCheck = document.getElementById('check');
elementCheck.addEventListener('click', countt)