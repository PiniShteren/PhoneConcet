'use strict'
let des = document.getElementById('des');
des.addEventListener('click', changeStyle);
let check = true;
function changeStyle() {
    let header = document.querySelector('header');
    let main = document.getElementById('main-con');
    let footer = document.querySelector('footer');
    let logo = document.getElementById('logo');
    if (check) {
        logo.style.fontFamily = `'Pacifico', cursive`;
        header.style.backgroundColor = "#008B8B";
        main.style.backgroundColor = "#1E90FF";
        footer.style.backgroundColor = "#87CEFA";
        check = false;
    } else {
        logo.style.fontFamily = `"Potta One", cursive`;
        header.style.backgroundColor = "lightblue";
        main.style.backgroundColor = "tan";
        footer.style.backgroundColor = "#90ee90";
        check = true;
    }

}
let l = document.querySelectorAll('li');
for (let i = 0; i < l.length; i++) {
    debugger
    l[i].addEventListener('mouseover', () => {
        l[i].style.backgroundColor = "gray";
    })
    l[i].addEventListener('mouseout', () => {
        l[i].style.backgroundColor = "";
    })
}