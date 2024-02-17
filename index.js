const name = document.querySelector('#name');
const surname = document.querySelector('#surname');
const age = document.querySelector('#age');
const phoneNumber = document.querySelector('#phoneNumber');
const emial = document.querySelector('#emial');
const password = document.querySelector('#password');
const nat = document.querySelector('#nationality');
const desc = document.querySelector('#desc');
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');

function validate (name, surname, age, phoneNumber, emial, password, nat, desc) {

    if (!name.value) {
        alert('Ism kiritilishi shart');
        name.focus();
        name.style.outlineColor = 'red'
        return false
    } else {
        name.focus();
        name.style.outlineColor = 'black'
    }

    if (name.value.length < 3) {
        alert('ism kamida 3 ta belgidan iborat bolishi kerak');
        name.focus();
        name.style.outlineColor = 'red';
        return false
    } else {
        name.focus();
        name.style.outlineColor = 'black'
    }


    return true
}

btn && btn.addEventListener('click', function(e) {
    e.preventDefault();

    if (validate(name, surname, age, phoneNumber, emial, password, nat, desc)) {
        console.log('bajarildi');
    } else {
        console.log('bajarilmadi');
    }

});