import updateOb from "./script.js";

let newObject = {
    firstName: "Pini",
    lastName: "Shteren",
    phoneNumber: "0548345192",
    adress: {
        street: "HariGolan 1",
        city: "Ashdod",
        country: "Israel"

    },
    email: "Pini@gmail.com",
    description: "",
}

updateOb(newObject);


let divAddContect;
let checkAddContect = false;
function DivAddContect() {
    //function to create div for add contect and button to go back 
    //and edd event listener to open  

    // create div for add conetct {
    divAddContect = document.createElement('div');
    let containerChild = document.querySelector('.containerChild');
    containerChild.appendChild(divAddContect);
    divAddContect.classList.add('addContect');
    //}

    //create button to go back {
    let buttonBack = document.createElement('img');
    buttonBack.src = "images/arrow.svg";
    divAddContect.appendChild(buttonBack);
    //} 

    //add event listener to open{
    let add = document.querySelector('#add');
    add.addEventListener('click', () => {
        addContect(buttonBack, add);
    })
    //}
}
DivAddContect()


function addContect(buttonBack, add) {
    buttonBack.addEventListener('click', function () {
        divAddContect.style.visibility = 'hidden';
        checkAddContect = false;
        divAddContect.innerHTML = ' ';
        DivAddContect();
        return
    })
    if (!checkAddContect) {
        checkAddContect = true;

        // show div addContect
        divAddContect.style.visibility = 'visible';


        let HdivAddContect = document.createElement('h1');
        HdivAddContect.innerHTML = "Add Contect";
        HdivAddContect.classList.add('addLogo')
        divAddContect.appendChild(HdivAddContect);

        AddInpFirstName(divAddContect);
        // AddInpLastName(divAddContect);
        // AddInpPhone(divAddContect);
        // AddInpStreet(divAddContect);
        // AddInpNum(divAddContect);
        // AddInpCity(divAddContect);
        // AddInpcountry(divAddContect);
        // AddInpDescription(divAddContect);
    }

}
function AddInpFirstName(divAddContect) {
    let check;
    let input = document.createElement('input');
    divAddContect.appendChild(input);
    let errorP = document.createElement('p');
    errorP.innerHTML = " ";
    divAddContect.appendChild(errorP)
    input.addEventListener('change', function (e) {
        check = true;
        let inpVal = e.target.value;
        if (inpVal.length > 1) {
            for (let i = 0; i < inpVal.length; i++) {
                if (inpVal.charAt(i).match(/[a-z]/i)) {
                    continue;
                } else {
                    check = false;
                    break;
                }
            }
        } else {
            check = false;
            errorP.innerHTML = `<br>` + "A name must be at last 2 letters long";
            return;
        } if (!check) {

            errorP.innerHTML = `<br>` + "A name cannot contain synbols or numbers"
        } else {
            errorP.innerHTML = `<br>` + " ";
        }
    })

}
// function isLetter(str) {
//     let check = true;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i).match(/[a-z]/i)) {
//             check = true
//         } else {
//             check = false
//             return check
//         }
//     }

//     return check
// }

