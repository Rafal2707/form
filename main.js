function passName(){
    let name = document.getElementById('name');
    let imie = name.value.toUpperCase();
    localStorage.setItem('textValue', imie);
    return false
}

document.getElementById('imie').innerHTML = localStorage.getItem('textValue');



