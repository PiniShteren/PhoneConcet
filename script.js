'use strict';


//variblr which get div from html to evry contects
let divPrintNames = document.getElementById('booxNames');
// global variblr which get div for details contect 
// it's global beacuse i want to renew div from evry func() 
let divShowDetails;

//this is the array of object context\\
let bookNames = [
  {
    firstName: 'Yosi',
    lastName: 'Cohen',
    phoneNumber: '0549574345',
    adress: 'Isreal',
    email: 'yosi@gmail.com',
    description: '',
  },
  {
    firstName: 'David',
    lastName: 'Cohen',
    phoneNumber: '0549574345',
    adress: 'Isreal',
    email: 'yosi@gmail.com',
    description: '',
  },
  {
    firstName: 'Uri',
    lastName: 'Cohen',
    phoneNumber: '0549574345',
    adress: 'Isreal',
    email: 'yosi@gmail.com',
    description: '',
  },
  {
    firstName: 'Moshe',
    lastName: 'Cohen',
    phoneNumber: '0549574345',
    adress: 'Isreal',
    email: 'yosi@gmail.com',
    description: '',
  },
];

let bookNamesToPrint = JSON.stringify(bookNames);
bookNamesToPrint = JSON.parse(bookNamesToPrint);
// function converTojsonToSave() {
//   localStorage.setItem('contects', JSON.stringify(bookNames));
//   let save = JSON.parse(localStorage.getItem('contect'));
//   console.log(save);
//   bookNamesToPrint = bookNames;
// }
// converTojsonToSave()
function updateOb(object, index) {
  debugger
  // func() to push new contect to my contect object
  if (index !== " ") {
    bookNamesToPrint[index] = object;
  } else {
    // index is empty and i want to add new contect
    bookNames.push(object);
    bookNamesToPrint.push(object);
  }
  divPrintNames.innerHTML = "";// renew div contect
  divAddContect.innerHTML = "";// renew div contect
  resetNewObject();
  if (bookNamesToPrint.length > 0) {
    printNames();// call func() print contect
    createDivAddContect();
  } else {
    // if list is empty
    let p = document.createElement("p");
    p.id = "empty";
    p.innerHTML = "Empty List";
    divPrintNames.appendChild(p);
  }
}

function printNames() {
  //function that create li for evry contect
  // and printed it on the page in HTML

  function compare(a, b) {
    //function to sort array
    const nameA = a.firstName;
    const nameB = b.firstName;
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    }
    if (nameB > nameA) {
      comparison = -1;
    }
    return comparison;
  }
  bookNamesToPrint.sort(compare);
  // vairble which create ul for contect {
  let ul = document.createElement('ul');
  divPrintNames.appendChild(ul);
  //}

  for (let i = 0; i < bookNamesToPrint.length; i++) {
    // loop run on the array of contects

    // varaible which create li for details
    let li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('details');

    let spanName = document.createElement('span');
    spanName.classList.add('nameContect');
    //create span for phone number
    let spanPhone = document.createElement('span');
    spanPhone.classList.add('phoneContect');

    // inner details from booxNames array
    spanName.innerHTML = `${bookNamesToPrint[i].firstName} ${bookNamesToPrint[i].lastName}`;
    spanPhone.innerHTML = bookNamesToPrint[i].phoneNumber;
    li.appendChild(spanName);
    li.appendChild(spanPhone);

    //call func() for to add event click to open div show details
    openDetails(spanName, i);
    openDetails(spanPhone, i);
    //call func() to show icon dalate contect and edit
    userIcons(li, i);
  }
}
printNames(); //call function

function openDetails(span, i) {
  span.addEventListener('click', () => {
    // function is calling them to 
    //show details contect
    divShowDetails.innerHTML = "";
    onClickshowDetails(i);

  })
}

function userIcons(li, i) {
  //function to create td for icons user delete and edit
  let spanIcons = document.createElement('span');
  spanIcons.classList.add('icons');
  let iconDelete = document.createElement('img');
  addEvent(iconDelete, i, "delete");
  let iconEdit = document.createElement('img');
  addEvent(iconEdit, i, "edit");
  iconDelete.src = 'images/trash.svg';
  iconEdit.src = 'images/edit.svg';
  spanIcons.appendChild(iconDelete);
  spanIcons.appendChild(iconEdit);
  li.appendChild(spanIcons);
}

function addEvent(icon, i, type) {
  if (type === "delete") {
    icon.onclick = function () {
      deleteContect(i);
    }
  } else {
    icon.onclick = function () {
      editContect(i);
    }
  }
}

function showDetails() {
  //create div for show details
  let containerChild = document.getElementById('containerChild');
  divShowDetails = document.createElement('div');
  divShowDetails.classList.add('showDetails');
  containerChild.appendChild(divShowDetails);
}
showDetails();//call function

function onClickshowDetails(index) {
  //index for place contect in array but i using it in function (printDetails) 
  //function to print details on divShow
  let divShowDetails = document.querySelector('.showDetails');
  divShowDetails.style.visibility = 'visible';

  // add event click to divShowDetails for hide again if i click on the window
  divShowDetails.addEventListener('click', function () {
    divShowDetails.style.visibility = 'hidden';
    divShowDetails.innerHTML = '';//for reset div when user click on other contect
  });
  printDetails(index, divShowDetails);//call function with a callback
}

function printDetails(index, divShowDetails) {
  //function to print all contect details on the window
  let userContect = bookNamesToPrint[index];
  // this is for creating p tags for show details {

  //p for name
  let pName = document.createElement('p');
  divShowDetails.appendChild(pName);
  pName.classList.add('nameShow');
  pName.innerHTML = `${userContect.firstName} ${userContect.lastName}<br>`;
  //call function to create p for phone number
  createPphone(userContect);
  //call function to create p for country
  createPcountry(userContect);
  //call function to create p for email 
  createPemail(userContect);
  //call function to create p for description
  createPdescription(userContect);
  //}
}

function createPphone(userContect) {
  //function to create p with to span for phone  
  let pPhone = document.createElement('p');
  divShowDetails.appendChild(pPhone);
  pPhone.classList.add('allShow');
  let spanA = document.createElement('span');
  spanA.classList.add('detailsA');
  pPhone.appendChild(spanA);
  spanA.innerHTML = "Tal:";
  let spanB = document.createElement('span');
  spanB.classList.add('detailsB');
  pPhone.appendChild(spanB);
  spanB.innerHTML = `${userContect.phoneNumber}<br>`;
}

function createPcountry(userContect) {
  //function to create p for country
  let pCountry = document.createElement('p');
  divShowDetails.appendChild(pCountry);
  pCountry.classList.add('allShow');
  let spanA = document.createElement('span');
  spanA.classList.add('detailsA');
  pCountry.appendChild(spanA);
  spanA.innerHTML = "Country:";
  let spanB = document.createElement('span');
  spanB.classList.add('detailsB');
  pCountry.appendChild(spanB);
  spanB.innerHTML = `${userContect.adress}<br>`;
}

function createPemail(userContect) {
  //function to create p for email
  let pEmail = document.createElement('p');
  divShowDetails.appendChild(pEmail);
  pEmail.classList.add('allShow');
  let spanA = document.createElement('span');
  spanA.classList.add('detailsA');
  pEmail.appendChild(spanA);
  spanA.innerHTML = "Email:";
  let spanB = document.createElement('span');
  spanB.classList.add('detailsB');
  pEmail.appendChild(spanB);
  spanB.innerHTML = `${userContect.email}<br>`;
}

function createPdescription(userContect) {
  //function to create p for description
  let pDescription = document.createElement('p');
  divShowDetails.appendChild(pDescription);
  pDescription.classList.add('allShow');
  let spanA = document.createElement('span');
  spanA.classList.add('detailsA');
  pDescription.appendChild(spanA);
  spanA.innerHTML = "Description:";
  let spanB = document.createElement('span');
  spanB.classList.add('detailsB');
  pDescription.appendChild(spanB);
  spanB.innerHTML = `${userContect.description}<br>`;
}
//object for adding new contect
let newObject = {
  firstName: " ",
  lastName: " ",
  phoneNumber: " ",
  adress: " ",
  email: " ",
  description: " ",
}
function resetNewObject() {
  newObject = {
    firstName: " ",
    lastName: " ",
    phoneNumber: " ",
    adress: " ",
    email: " ",
    description: " ",
  }
}
//divAddContect to create div for adding contect
let divAddContect;//global becuse i use it in faw function
let checkAddContect = false;//global same reason... to know if divaddContect exist 
let buttonBack;//global becuse i use it in faw function

function createDivAddContect() {
  //function to create div for add contect 
  //and button to go back 
  //and edd event listener to open  

  // create div for add conetct {
  divAddContect = document.createElement('div');
  let containerChild = document.querySelector('.containerChild');
  containerChild.appendChild(divAddContect);
  divAddContect.classList.add('addContect');// class for css
  //}
  //create button to go back {
  buttonBack = document.createElement('img');
  buttonBack.src = "images/arrow.svg";
  divAddContect.appendChild(buttonBack);
  //} 
  //add event listener to open{
  let add = document.querySelector('#add');
  add.addEventListener('click', () => {
    openAddContect(" ");
  })
  //}
}
createDivAddContect()//call function


function openAddContect(i) {

  //function get a paremeter for adding event listener to close the div in reset
  if (!checkAddContect) {//if divAddContect is flag 
    checkAddContect = true;//to change flag
    divAddContect.style.visibility = 'visible';//to show div
    //cretae h1 for div {
    let HdivAddContect = document.createElement('h1');
    HdivAddContect.innerHTML = i !== " " ? "Edit Contect" : "Add Contect";
    HdivAddContect.classList.add('addLogo')
    divAddContect.appendChild(HdivAddContect);
    //}

    menageAddContect(divAddContect, i);//callback get in divAddContect to create all childern
  }
  buttonBack.addEventListener('click',
    function () {
      divAddContect.style.visibility = 'hidden';
      checkAddContect = false;
      divAddContect.innerHTML = '';//renew div
      i = '';
      resetNewObject()
      createDivAddContect();//call function to start again divAddContect
    }
  )

}
function menageAddContect(divAddContect, i) {
  let contect = 0;
  debugger
  contect = newObject;
  if (i === 0 || i > 0) {
    contect = bookNamesToPrint[i];
  }
  let inputs = document.createElement('div');
  inputs.classList.add('inputs');
  divAddContect.appendChild(inputs);
  // func() to craete all inputs to add contect
  // call func() for create elements {

  addInpFirstName(inputs, contect.firstName);
  addInpLastName(inputs, contect.lastName);
  addInpPhone(inputs, contect.phoneNumber);
  addInpCountry(inputs, contect.adress);
  addInpEmail(inputs, contect.email);
  addInpDescription(inputs, contect.description);
  addButton(divAddContect, inputs, i);
  // }


}
function addInpFirstName(inputs, value) {
  // create input for first name
  newObject.firstName = "";
  let place = value !== " " ? value : "FirstName..."
  //create input
  let input = document.createElement('input');
  inputs.appendChild(input);
  input.setAttribute('placeholder', place)
  let inpVal;
  input.onkeyup = function (e) {
    inpVal = e.target.value;
    if (inpVal.match("[a-zA-Z].{2}")) {
      newObject.firstName = inpVal.charAt(0).toUpperCase() + inpVal.substring(1);
    } else {
      // if value smaller than 2 letters and 
      newObject.firstName = '';
    }
  }
  if (value) {
    newObject.firstName = value;
  }
}

function addInpLastName(inputs, value) {
  newObject.lastName = "";
  //create input
  let place = value !== " " ? value : "LastName..."
  let input = document.createElement('input');
  input.setAttribute('placeholder', place)
  inputs.appendChild(input)
  let inpVal;
  input.onkeyup = function (e) {
    inpVal = e.target.value;
    if (inpVal.match("[a-zA-Z].{2}")) {
      newObject.lastName = inpVal.charAt(0).toUpperCase() + inpVal.substring(1);
    } else {
      newObject.lastName = '';
    }
  }
  if (value) {
    newObject.lastName = value;
  }
}

function addInpPhone(inputs, value) {
  newObject.phoneNumber = "";
  let place = value !== " " ? value : "PhoneNumber....";
  let input = document.createElement('input');
  inputs.appendChild(input);
  input.setAttribute('placeholder', place);
  input.setAttribute('type', 'tel');
  input.onkeyup = function (e) {
    if (e.target.value.match("05[023456]{1}[ -]?\\d{7}")) {
      newObject.phoneNumber = e.target.value;
    } else {
      newObject.phoneNumber = "";
    }
  }
  if (value) {
    newObject.phoneNumber = value;
  }
}

function addInpCountry(inputs, value) {
  newObject.adress = "";
  let countrys = ['Isreal', 'USA'];
  let select = document.createElement('select');
  inputs.appendChild(select);
  select.id = 'selectCountry';
  let option = document.createElement('option');
  option.text = value !== " " ? value : 'Country';
  option.value = value;
  option.id = "optionCountry";
  select.appendChild(option);
  countrys.map((e) => {
    let optionC = document.createElement('option');
    optionC.id = 'optionCountry';
    select.appendChild(optionC);
    optionC.value = e;
    optionC.text = e;
  })
  select.onchange = function (e) {
    if (e.target.value.length > 0) {
      check = true;
      newObject.adress = e.target.value;
    } else {
      newObject.adress = '';
      check = false;
    }
  }
  if (value) {
    newObject.adress = value;
  }
}

function addInpEmail(inputs, value) {
  newObject.email = "";
  let place = value !== " " ? value : "Email...";
  let input = document.createElement('input');
  inputs.appendChild(input);
  input.setAttribute('placeholder', place);
  input.setAttribute('type', 'email')
  input.onkeyup = function (e) {
    let inpVal = e.target.value;
    if (inpVal.match("[a-zA-Z0-9-].{4}@gmail.com")) {
      newObject.email = inpVal;
    } else {
      newObject.email = "";
    }
  }
  if (value) {
    newObject.email = value;
  }
}

function addInpDescription(inputs, value) {
  newObject.description = "";
  let place = value !== " " ? value : "Description...";
  let textArea = document.createElement('textarea');
  inputs.appendChild(textArea);
  textArea.setAttribute('placeholder', place);
  textArea.onkeyup = function (e) {
    let inpVal = e.target.value;
    if (inpVal) {
      newObject.description = inpVal;
    } else {
      newObject.description = "";
    }
  }
  if (value) {
    newObject.description = value;
  }
}

function addButton(divAddContect, inputs, i) {

  let div = document.createElement('div');
  div.classList.add('divInp');
  inputs.appendChild(div);
  let button = document.createElement('button');
  div.appendChild(button);
  button.id = 'addContect';
  button.innerHTML = i !== " " ? "Edit" : "Add";
  button.disabled = false;
  button.onclick = function () {
    debugger
    if (newObject.firstName.length > 1 &&
      newObject.lastName.length > 1 &&
      newObject.phoneNumber.length > 1 &&
      newObject.adress.length > 1 &&
      newObject.email.length > 1) {
      updateOb(newObject, i);
      divAddContect.style.visibility = 'hidden';
      checkAddContect = false;
    }
  }
}

function deleteContect(index) {

  var t = window.confirm('Are you sure you want to dalate?')
  if (t === true) {
    bookNamesToPrint = bookNamesToPrint.filter((e, i) => i !== index);
    divPrintNames.innerHTML = "";
    printNames()
  }
  updateOb();
}
function editContect(index) {

  openAddContect(index);
}

function search(e) {
  debugger
  let saveContect = JSON.stringify(bookNamesToPrint);
  saveContect = JSON.parse(saveContect);
  if (e.target.value) {
    bookNamesToPrint = bookNamesToPrint.filter((element) => element.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0 || element.lastName.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0);
    if (bookNamesToPrint) {
      divPrintNames.innerHTML = "";
      divShowDetails.innerHTML = "";
      printNames();
      createDivAddContect();
    }
  } else {
    bookNamesToPrint = bookNames;
    divPrintNames.innerHTML = "";
    divShowDetails.innerHTML = "";
    printNames();
    createDivAddContect();
  }
}
document.querySelector("#search").onkeyup = (e) => {
  console.log(e.target.value);
  search(e);
}
