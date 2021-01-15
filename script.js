'use strict';


//variblr which get div from html to evry contects
let divPrintNames = document.getElementById('booxNames');
let divShowDetails;

function updateOb(object) {
  bookNames.push(object);
  divPrintNames.innerHTML = '';
  printNames();
}
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

function printNames() {
  //function that create div for evry contect
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
  bookNames.sort(compare);
  console.log(bookNames);

  // vairble which create ul for contect {
  let ul = document.createElement('ul');
  divPrintNames.appendChild(ul);
  //}

  for (let i = 0; i < bookNames.length; i++) {
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
    spanName.innerHTML = `${bookNames[i].firstName} ${bookNames[i].lastName}`;
    spanPhone.innerHTML = bookNames[i].phoneNumber;
    li.appendChild(spanName);
    li.appendChild(spanPhone);

    //add event click to td details to show all details

    spanName.addEventListener('click', () => {
      // function is calling them to
      //show details contect
      divShowDetails.innerHTML = '';
      onClickshowDetails(i);
    });
    spanPhone.addEventListener('click', () => {
      // function is calling them to
      //show details contect
      divShowDetails.innerHTML = '';
      onClickshowDetails(i);
    });
    userIcons(li);
  }
}
printNames(); //call function

function userIcons(li) {
  //function to create td for icons user delete and edit
  let spanIcons = document.createElement('span');
  spanIcons.classList.add('icons');
  let iconDelete = document.createElement('img');
  let iconEdit = document.createElement('img');
  iconDelete.src = 'images/trash.svg';
  iconEdit.src = 'images/edit.svg';
  spanIcons.appendChild(iconDelete);
  spanIcons.appendChild(iconEdit);
  li.appendChild(spanIcons);
}

function showDetails() {
  let containerChild = document.getElementById('containerChild');
  divShowDetails = document.createElement('div');
  divShowDetails.classList.add('showDetails');
  containerChild.appendChild(divShowDetails);
}
showDetails();

function onClickshowDetails(index) {
  //function to print details on divShow
  let divShowDetails = document.querySelector('.showDetails');
  divShowDetails.style.visibility = 'visible';

  // add event click to divShowDetails for hide again if i click on the window
  divShowDetails.addEventListener('click', function () {
    divShowDetails.style.visibility = 'hidden';
    divShowDetails.innerHTML = '';
  });
  printDetails(index, divShowDetails);
}

function printDetails(index, divShowDetails) {
  //function to print all contect details on the window
  let userContect = '';
  bookNames.forEach((e, i, o) => {
    if (i === index) {
      // i equl to some li end if i equl to the
      // index in array
      userContect = e;
    }
  });
  // this is creating p tags for show details {

  //p for name
  let pName = document.createElement('p');
  divShowDetails.appendChild(pName);
  pName.classList.add('nameShow');
  pName.innerHTML = `${userContect.firstName} ${userContect.lastName}<br>`;
  //p for phone number
  createPphone(divShowDetails, userContect);
  //p for country
  createPcountry(divShowDetails, userContect);
  //p for email 
  createPemail(divShowDetails, userContect);
  //p for description
  createPdescription(divShowDetails, userContect);
  //}
}

function createPphone(divShowDetails, userContect) {
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

function createPcountry(divShowDetails, userContect) {
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

function createPemail(divShowDetails, userContect) {
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

function createPdescription(divShowDetails, userContect) {
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
let newObject = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  adress: "",
  email: "",
  description: "",
}

// updateOb(newObject);


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


function addContect(buttonBack) {
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
    menageAddContect(divAddContect)
  }

}
function menageAddContect(divAddContect) {
  let checkFirstName = true;
  let checkLastName = false;
  let checkPhone = false;
  let checkCountry = false;
  AddInpFirstName(divAddContect, checkFirstName);
  AddInpLastName(divAddContect, checkLastName);
  AddInpPhone(divAddContect, checkPhone);
  AddInpcountry(divAddContect, checkCountry);
  // AddInpDescription(divAddContect);
}
function AddInpFirstName(divAddContect, checkFirstName) {

  //create input
  let div = document.createElement('div');
  div.classList.add('divInp');
  divAddContect.appendChild(div);
  let label = document.createElement('label');
  label.innerHTML = "First Name";
  div.appendChild(label);
  let input = document.createElement('input');
  div.appendChild(input)
  let inpVal;
  input.onchange = function (e) {
    inpVal = e.target.value;
    if (inpVal.length > 1) {
      for (let i = 0; i < inpVal.length; i++) {
        if (inpVal.charAt(i).match(/[a-z]/i)) {
          checkFirstName = true;
          continue;
        } else {
          checkFirstName = false;
          break;
        }
      }
    } else {
      checkFirstName = false;
    }
    if (checkFirstName) {
      newObject.firstName = inpVal;
    } else {
      newObject.firstName = '';
    }
  }


}

function AddInpLastName(divAddContect, checkLastName) {

  //create input
  let div = document.createElement('div');
  div.classList.add('divInp');
  divAddContect.appendChild(div);
  let label = document.createElement('label');
  label.innerHTML = "Last Name";
  div.appendChild(label);
  let input = document.createElement('input');
  div.appendChild(input)
  let inpVal;
  input.onchange = function (e) {
    inpVal = e.target.value;
    if (inpVal.length > 1) {
      for (let i = 0; i < inpVal.length; i++) {
        if (inpVal.charAt(i).match(/[a-z]/i)) {
          checkLastName = true;
          continue;
        } else {
          checkLastName = false;
          break;
        }
      }
    } else {
      checkLastName = false;
    }
    if (checkLastName) {
      newObject.lastName = inpVal;
    } else {
      newObject.lastName = '';
    }
  }


}

function AddInpPhone(divAddContect, checkPhone) {
  let div = document.createElement('div');
  div.classList.add('divInp');
  divAddContect.appendChild(div);
  let label = document.createElement('label');
  label.innerHTML = "Phone number";
  div.appendChild(label);
  let input = document.createElement('input');
  div.appendChild(input)
  let inpVal;
  input.onchange = function (e) {
    debugger
    let areaCodePhone = ["050", "052", "054", "055", "057", "059"];
    inpVal = e.target.value;
    if (Number(inpVal)) {
      if (inpVal.length === 10) {
        let phoneCheck = inpVal.toString().slice(0, 3);
        areaCodePhone.forEach((e) => {
          if (phoneCheck === e) {
            checkPhone = true;
          }
        })

      } else {
        checkPhone = false;
      }
    } else {
      checkPhone = false;
    }
    if (checkPhone) {
      newObject.phoneNumber = inpVal;
    } else {
      newObject.phoneNumber = '';
    }
  }
}

function AddInpcountry(divAddContect, checkCountry) {

  let countrys = ['Isreal', 'USA'];

  let div = document.createElement('div');
  div.classList.add('divInp');
  divAddContect.appendChild(div);
  let select = document.createElement('select');
  div.appendChild(select);
  select.id = 'selectCountry';
  let option = document.createElement('option');
  option.text = 'Country';
  option.value = "";
  option.id = "optionCountry";
  select.appendChild(option)
  countrys.map((e) => {
    let optionC = document.createElement('option');
    optionC.id = 'optionCountry';
    select.appendChild(optionC);
    optionC.value = e;
    optionC.text = e;
  })
  select.onchange = function (e) {
    if (e.target.value.length > 0) {
      checkCountry = true;
      newObject.adress = e.target.value;
    } else {
      newObject.adress = '';
      checkCountry = false;
    }
  }
}